document.addEventListener("DOMContentLoaded", () => {
  // ==================== MOTOR DE AUDIO NEURONAL (FASTAPI + EDGE-TTS) ====================
  const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
  const isGitHubPages = window.location.hostname.endsWith(".github.io");
  const API_URL = isLocalHost
    ? "http://127.0.0.1:8000/api/tts"
    : isGitHubPages
      ? "https://english-studio-neural-audio.onrender.com/api/tts"
      : `${window.location.origin}/api/tts`;
  const voiceSelect = document.getElementById("voice-select");
  const rateSelect = document.getElementById("speech-rate");
  const stopAudioBtn = document.getElementById("stop-audio-btn");
  const audioStatus = document.getElementById("audio-status");

  let currentAudio = null;
  let currentAudioUrl = null;
  let stopQueueFlag = false;
  let highlightTimer = null;
  let playbackVersion = 0;
  let activePlaybackKey = null;

  function getAudioErrorMessage() {
    return isGitHubPages
      ? "No se pudo conectar con el servidor de audio en Render. Si acabas de desplegarlo, espera a que esté listo y vuelve a intentarlo."
      : "No se pudo conectar con el servidor de audio. En local, inicia server.py y vuelve a intentarlo.";
  }

  function setStatus(text, isLoading = false) {
    audioStatus.textContent = text;
    audioStatus.style.background = isLoading ? "#fef3c7" : "#eff6ff";
    audioStatus.style.color = isLoading ? "#b45309" : "#2563eb";
  }

  function clearWordHighlights() {
    if (highlightTimer) clearInterval(highlightTimer);
    document.querySelectorAll(".speaking-word").forEach(el => el.classList.remove("speaking-word"));
  }

  function stopAllAudio() {
    playbackVersion++;
    stopQueueFlag = true;
    activePlaybackKey = null;
    const audioToStop = currentAudio;
    const audioUrlToRevoke = currentAudioUrl;
    currentAudio = null;
    currentAudioUrl = null;
    if (audioToStop) {
      audioToStop.pause();
      audioToStop.currentTime = 0;
    }
    if (audioUrlToRevoke) URL.revokeObjectURL(audioUrlToRevoke);
    clearWordHighlights();
    setStatus("Voz Neuronal Lista");
  }

  async function fetchAudioBlob(text, customVoice = null) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        voice: customVoice || voiceSelect.value,
        rate: rateSelect.value
      })
    });

    if (!response.ok) {
      throw new Error("No se pudo conectar con el servidor de audio Python.");
    }
    return await response.blob();
  }

  async function speakText(text, wordSpans = null, customVoice = null) {
    const playbackKey = `text:${JSON.stringify([text, customVoice || voiceSelect.value, rateSelect.value])}`;
    if (activePlaybackKey === playbackKey) return;

    stopAllAudio();
    const currentPlaybackVersion = playbackVersion;
    activePlaybackKey = playbackKey;
    stopQueueFlag = false;
    setStatus("Generando voz...", true);

    try {
      const blob = await fetchAudioBlob(text, customVoice);
      if (currentPlaybackVersion !== playbackVersion || stopQueueFlag) return;

      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      currentAudio = audio;
      currentAudioUrl = audioUrl;

      audio.onloadedmetadata = () => {
        if (currentPlaybackVersion !== playbackVersion) return;
        setStatus("Reproduciendo 🔊");
        // Sincronización visual proporcional palabra por palabra
        if (wordSpans && wordSpans.length > 0 && audio.duration) {
          const totalDurationMs = audio.duration * 1000;
          const stepMs = totalDurationMs / wordSpans.length;
          let idx = 0;

          clearWordHighlights();
          wordSpans[0].el.classList.add("speaking-word");

          highlightTimer = setInterval(() => {
            idx++;
            if (idx < wordSpans.length && !stopQueueFlag) {
              clearWordHighlights();
              wordSpans[idx].el.classList.add("speaking-word");
            } else {
              clearInterval(highlightTimer);
            }
          }, stepMs);
        }
      };

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        if (currentAudio === audio) {
          currentAudio = null;
          currentAudioUrl = null;
        }
        if (currentPlaybackVersion !== playbackVersion) return;
        activePlaybackKey = null;
        clearWordHighlights();
        setStatus("Voz Neuronal Lista");
      };

      await audio.play();
    } catch (err) {
      if (currentPlaybackVersion !== playbackVersion) return;
      console.error(err);
      activePlaybackKey = null;
      setStatus("Error: servidor de audio no disponible", true);
      alert(`⚠️ ${getAudioErrorMessage()}`);
    }
  }

  // Reproducir secuencia de frases o diálogos (alternando voces reales)
  async function playSequence(items) {
    const playbackKey = `sequence:${JSON.stringify([rateSelect.value, items])}`;
    if (activePlaybackKey === playbackKey) return;

    stopAllAudio();
    const currentPlaybackVersion = playbackVersion;
    activePlaybackKey = playbackKey;
    stopQueueFlag = false;

    for (let i = 0; i < items.length; i++) {
      if (currentPlaybackVersion !== playbackVersion || stopQueueFlag) break;
      const item = items[i];
      setStatus(`Reproduciendo (${i + 1}/${items.length})...`, true);

      try {
        const blob = await fetchAudioBlob(item.text, item.voice || null);
        if (currentPlaybackVersion !== playbackVersion || stopQueueFlag) break;

        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        currentAudio = audio;
        currentAudioUrl = audioUrl;
        await new Promise((resolve) => {
          let settled = false;
          const finish = () => {
            if (settled) return;
            settled = true;
            URL.revokeObjectURL(audioUrl);
            if (currentAudio === audio) {
              currentAudio = null;
              currentAudioUrl = null;
            }
            resolve();
          };
          audio.onended = finish;
          audio.onerror = finish;
          audio.onpause = finish;
          audio.play().catch((err) => {
            console.error(err);
            finish();
          });
        });
      } catch (err) {
        if (currentPlaybackVersion !== playbackVersion) return;
        console.error(err);
        activePlaybackKey = null;
        setStatus("Error: servidor de audio no disponible", true);
        return;
      }
    }

    if (currentPlaybackVersion === playbackVersion && !stopQueueFlag) {
      activePlaybackKey = null;
      setStatus("Voz Neuronal Lista");
    }
  }

  stopAudioBtn.addEventListener("click", stopAllAudio);

  // ==================== NAVEGACIÓN PRINCIPAL ====================
  const navBtns = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  // ==================== TOOLTIP INSTANTÁNEO ====================
  const tooltip = document.getElementById("word-tooltip");

  function showTooltip(e, cleanWord, originalWord) {
    const translation = window.DICCIONARIO_PALABRAS[cleanWord.toLowerCase()] || "Palabra aún no registrada en el glosario";
    tooltip.innerHTML = `<strong>${originalWord}</strong>${translation}`;
    tooltip.classList.remove("hidden");
    moveTooltip(e);
  }

  function moveTooltip(e) {
    tooltip.style.left = `${Math.min(e.clientX + 14, window.innerWidth - 220)}px`;
    tooltip.style.top = `${e.clientY + 16}px`;
  }

  function hideTooltip() {
    tooltip.classList.add("hidden");
  }

  // ==================== MÓDULO 1: LECTURAS LARGAS ====================
  const readingsGrid = document.getElementById("readings-grid");
  const readerView = document.getElementById("reader-view");
  const filterCategory = document.getElementById("filter-category");
  const filterLevel = document.getElementById("filter-level");

  function renderReadingsList() {
    const cat = filterCategory.value;
    const lvl = filterLevel.value;

    const filtered = window.LECTURAS_DATA.filter(item => {
      const matchCat = cat === "all" || item.categoria === cat;
      const matchLvl = lvl === "all" || item.nivel.toString() === lvl;
      return matchCat && matchLvl;
    });

    readingsGrid.innerHTML = filtered.map(lectura => `
      <div class="card">
        <div>
          <span class="tag">${lectura.categoria}</span>
          <span class="tag level">Nivel ${lectura.nivel}</span>
          <h3>${lectura.titulo}</h3>
          <p>${lectura.descripcion}</p>
        </div>
        <button class="btn-primary" onclick="openReading('${lectura.id}')">Leer Historia Completa (${lectura.parrafos.length} párrafos)</button>
      </div>
    `).join("");
  }

  window.openReading = function(id) {
    const lectura = window.LECTURAS_DATA.find(l => l.id === id);
    if (!lectura) return;

    readingsGrid.classList.add("hidden");
    readerView.classList.remove("hidden");

    document.getElementById("reader-category").textContent = lectura.categoria;
    document.getElementById("reader-level").textContent = `Nivel ${lectura.nivel}`;
    document.getElementById("reader-title").textContent = lectura.titulo;

    document.getElementById("read-full-story-btn").onclick = () => {
      const seq = lectura.parrafos.map(p => ({ text: p.texto }));
      playSequence(seq);
    };

    const paragraphsContainer = document.getElementById("reader-paragraphs");
    paragraphsContainer.innerHTML = "";

    lectura.parrafos.forEach((p, idx) => {
      const block = document.createElement("div");
      block.className = "paragraph-block";

      const header = document.createElement("div");
      header.className = "paragraph-header";
      header.innerHTML = `<span style="color:var(--text-muted); font-weight:600; font-size:0.85rem;">Párrafo ${idx + 1} de ${lectura.parrafos.length}</span>`;

      const textDiv = document.createElement("div");
      textDiv.className = "interactive-text";

      const wordSpans = [];
      const words = p.texto.split(" ");

      words.forEach(word => {
        const span = document.createElement("span");
        span.className = "word-span";
        span.textContent = word + " ";
        const clean = word.replace(/[.,!?;:"()'’\-]/g, "");

        wordSpans.push({ el: span });

        span.addEventListener("mouseenter", (e) => showTooltip(e, clean, word));
        span.addEventListener("mousemove", moveTooltip);
        span.addEventListener("mouseleave", hideTooltip);
        span.addEventListener("click", () => speakText(clean));

        textDiv.appendChild(span);
      });

      const audioBtn = document.createElement("button");
      audioBtn.className = "btn-audio";
      audioBtn.textContent = "🔊 Escuchar párrafo";
      audioBtn.onclick = () => speakText(p.texto, wordSpans);
      header.appendChild(audioBtn);

      const summaryBox = document.createElement("div");
      summaryBox.className = "summary-box";
      summaryBox.innerHTML = `
        <label>✍️ Opcional: Escribe en inglés un mini resumen de este párrafo:</label>
        <div class="summary-controls">
          <input type="text" id="summary-input-${idx}" placeholder="Escribe aquí con tus propias palabras en inglés..." />
          <button class="btn-audio" id="validate-btn-${idx}">Validar resumen</button>
        </div>
        <div id="feedback-${idx}" class="feedback-msg hidden"></div>
      `;

      block.appendChild(header);
      block.appendChild(textDiv);
      block.appendChild(summaryBox);
      paragraphsContainer.appendChild(block);

      document.getElementById(`validate-btn-${idx}`).addEventListener("click", () => {
        const userText = document.getElementById(`summary-input-${idx}`).value.trim().toLowerCase();
        const feedbackEl = document.getElementById(`feedback-${idx}`);
        feedbackEl.classList.remove("hidden");

        if (!userText) {
          feedbackEl.innerHTML = "Escribe primero una oración corta en inglés sobre lo que leíste.";
          return;
        }

        const matches = p.palabrasClave.filter(kw => userText.includes(kw));
        if (matches.length >= 2) {
          feedbackEl.innerHTML = `¡Muy bien! Identificaste conceptos clave (<strong>${matches.join(", ")}</strong>).<br>💡 <em>Ejemplo de referencia:</em> "${p.ideaClave}"`;
        } else {
          feedbackEl.innerHTML = `¡Buen esfuerzo! Sigue practicando. Intenta usar palabras clave del texto.<br>💡 <em>Ejemplo de referencia:</em> "${p.ideaClave}"`;
        }
      });
    });
  };

  document.getElementById("back-to-readings").addEventListener("click", () => {
    readerView.classList.add("hidden");
    readingsGrid.classList.remove("hidden");
    stopAllAudio();
  });

  filterCategory.addEventListener("change", renderReadingsList);
  filterLevel.addEventListener("change", renderReadingsList);
  renderReadingsList();

  // ==================== EJERCICIOS INTERACTIVOS ====================
  function buildExercisesHTML(ejercicios, prefix) {
    return `
      <div class="exercise-section">
        <h2>🎯 Laboratorio de Práctica Interactiva</h2>
        <p style="color:var(--text-muted); font-size:0.92rem;">Selecciona la opción correcta para poner a prueba lo que acabas de estudiar:</p>
        ${ejercicios.map((ej, i) => `
          <div class="exercise-card">
            <strong>${ej.pregunta}</strong>
            <div class="exercise-options" id="opts-${prefix}-${i}">
              ${ej.opciones.map(op => `
                <button class="opt-btn" onclick="checkExercise('${prefix}', ${i}, '${op.replace(/'/g, "\\'")}')">${op}</button>
              `).join("")}
            </div>
            <div id="ex-fb-${prefix}-${i}" class="feedback-msg hidden"></div>
          </div>
        `).join("")}
      </div>
    `;
  }

  window.checkExercise = function(prefix, idx, selected) {
    const dataset = prefix === "tobe"
      ? window.GRAMATICA_DATA.tobe.ejercicios
      : prefix === "tenses"
      ? window.GRAMATICA_DATA.tenses.ejercicios
      : window.GRAMATICA_DATA.questions.ejercicios;

    const item = dataset[idx];
    const optsContainer = document.getElementById(`opts-${prefix}-${idx}`);
    const fbEl = document.getElementById(`ex-fb-${prefix}-${idx}`);

    optsContainer.querySelectorAll(".opt-btn").forEach(btn => {
      btn.classList.remove("correct", "wrong");
      if (btn.textContent === selected) {
        btn.classList.add(selected === item.correcta ? "correct" : "wrong");
      }
    });

    fbEl.classList.remove("hidden");
    if (selected === item.correcta) {
      fbEl.innerHTML = `✅ <strong>¡Correcto!</strong> ${item.explicacion}`;
      speakText(item.correcta);
    } else {
      fbEl.innerHTML = `❌ <strong>Intenta de nuevo.</strong> Pista: ${item.explicacion}`;
    }
  };

  // ==================== MÓDULO 2: GRAMÁTICA & 12 TIEMPOS ====================
  const grammarContainer = document.getElementById("grammar-container");
  const gramBtns = document.querySelectorAll("[data-gram]");

  function renderGrammar(section) {
    grammarContainer.innerHTML = "";

    if (section === "tobe") {
      const data = window.GRAMATICA_DATA.tobe;
      grammarContainer.innerHTML = `<div class="cards-grid">` + data.bloques.map(b => `
        <div class="card">
          <div>
            <h3>${b.titulo}</h3>
            <p>${b.uso}</p>
            <div class="formula-box">${b.formula}</div>
            ${b.ejemplos.map(ej => `
              <div class="example-row">
                <div>
                  <strong>${ej.en}</strong>
                  <small>${ej.es}</small>
                </div>
                <button class="btn-icon" onclick="speakGlobal('${ej.en.replace(/'/g, "\\'")}')">🔊</button>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("") + `</div>` + buildExercisesHTML(data.ejercicios, "tobe");
    }

    if (section === "tenses") {
      const data = window.GRAMATICA_DATA.tenses;
      renderTenseStudy(data.lista, 0);
    }

    function renderTenseStudy(tenses, selectedIndex) {
      const groups = [
        { title: "Presentes · 1–4", items: tenses.slice(0, 4), offset: 0 },
        { title: "Pasados · 5–8", items: tenses.slice(4, 8), offset: 4 },
        { title: "Futuros · 9–12", items: tenses.slice(8, 12), offset: 8 }
      ];
      const tense = tenses[selectedIndex];
      const exercises = tense.ejercicios;

      grammarContainer.innerHTML = `
        <nav class="tense-selector" aria-label="Seleccionar tiempo verbal">
          ${groups.map(group => `
            <section class="tense-group">
              <h2>${group.title}</h2>
              <div class="tense-options">
                ${group.items.map((item, index) => {
                  const itemIndex = group.offset + index;
                  return `<button type="button" class="tense-option${itemIndex === selectedIndex ? " active" : ""}"
                    data-tense-index="${itemIndex}" aria-pressed="${itemIndex === selectedIndex}">
                    <span>${itemIndex + 1}.</span> ${item.nombre.replace(/^\d+\.\s*/, "").replace(/\s*\([^)]*\)/, "")}
                  </button>`;
                }).join("")}
              </div>
            </section>
          `).join("")}
        </nav>
        <article class="tense-study">
          <header class="tense-study-header">
            <span class="tag">${tense.grupo}</span>
            <h2>${tense.nombre}</h2>
            <p>${tense.uso}</p>
          </header>
          <section class="tense-explanation">
            <h3>Cuándo se usa</h3>
            <p>${tense.estudio.usos}</p>
            <h3>Cuándo no se usa y con qué contrastarlo</h3>
            <p>${tense.estudio.contraste}</p>
          </section>
          <section class="tense-formulas">
            <h3>Construcción</h3>
            ${Object.entries(tense.estudio.formulas).map(([label, formula]) => `
              <div class="formula-row"><strong>${label}</strong><span>${formula}</span></div>
            `).join("")}
            <div class="markers-tag"><strong>Time markers:</strong> ${tense.marcadores}</div>
          </section>
          <section class="tense-examples">
            <h3>Ejemplos en contexto</h3>
            <div class="tense-example-list">
              ${tense.ejemplos.map(example => `
                <div class="example-row">
                  <div><strong>${example.en}</strong><small>${example.es}</small></div>
                  <button type="button" class="btn-icon tense-example-audio" data-text="${escapeAttribute(example.en)}" aria-label="Escuchar ejemplo">🔊</button>
                </div>
              `).join("")}
            </div>
          </section>
          <section class="exercise-section tense-practice">
            <h3>Práctica enfocada · ${exercises.length} ejercicios</h3>
            <p>Resuelve cada ejercicio. Recibirás una explicación breve en español.</p>
            ${exercises.map((exercise, exerciseIndex) => `
              <div class="exercise-card" data-tense-exercise="${exerciseIndex}">
                <strong>${exercise.pregunta}</strong>
                ${exercise.tipo === "choice" ? `
                  <div class="exercise-options">
                    ${exercise.opciones.map(option => `
                      <button type="button" class="opt-btn tense-answer" data-answer="${escapeAttribute(option)}">${option}</button>
                    `).join("")}
                  </div>
                ` : `
                  <div class="tense-fill-answer">
                    <input type="text" aria-label="Tu respuesta" autocomplete="off">
                    <button type="button" class="btn-secondary tense-check">Comprobar</button>
                  </div>
                `}
                <div class="feedback-msg hidden" aria-live="polite"></div>
              </div>
            `).join("")}
          </section>
        </article>
      `;

      grammarContainer.querySelectorAll("[data-tense-index]").forEach(button => {
        button.addEventListener("click", () => renderTenseStudy(tenses, Number(button.dataset.tenseIndex)));
      });

      grammarContainer.querySelectorAll(".tense-example-audio").forEach(button => {
        button.addEventListener("click", () => speakText(button.dataset.text));
      });

      grammarContainer.querySelectorAll("[data-tense-exercise]").forEach(card => {
        const exerciseIndex = Number(card.dataset.tenseExercise);
        const exercise = exercises[exerciseIndex];
        card.querySelectorAll(".tense-answer").forEach(button => {
          button.addEventListener("click", () => {
            card.querySelectorAll(".tense-answer").forEach(option => option.classList.remove("correct", "wrong"));
            const correct = normalizeAnswer(button.dataset.answer) === normalizeAnswer(exercise.respuesta);
            button.classList.add(correct ? "correct" : "wrong");
            showTenseFeedback(card, correct, exercise);
          });
        });
        const checkButton = card.querySelector(".tense-check");
        if (checkButton) {
          checkButton.addEventListener("click", () => {
            const value = card.querySelector("input").value;
            const correct = normalizeAnswer(value) === normalizeAnswer(exercise.respuesta);
            showTenseFeedback(card, correct, exercise);
          });
        }
      });
    }

    function escapeAttribute(value) {
      return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function normalizeAnswer(value) {
      return String(value).trim().toLowerCase().replace(/[.!?]/g, "").replace(/\s*\/\s*/g, " ").replace(/\s+/g, " ");
    }

    function showTenseFeedback(card, correct, exercise) {
      const feedback = card.querySelector(".feedback-msg");
      feedback.classList.remove("hidden");
      feedback.innerHTML = `${correct ? "✅ <strong>¡Correcto!</strong>" : "❌ <strong>Revisa la respuesta.</strong>"} ${exercise.explicacion}`;
    }

    if (section === "questions") {
      const data = window.GRAMATICA_DATA.questions;
      grammarContainer.innerHTML = `<div class="cards-grid">` + data.bloques.map(q => `
        <div class="card">
          <div>
            <h3>${q.titulo}</h3>
            <p>${q.uso}</p>
            <div class="formula-box">${q.formula}</div>
            ${q.ejemplos.map(ej => `
              <div class="example-row">
                <div>
                  <strong>${ej.en}</strong>
                  <small>${ej.es}</small>
                </div>
                <button class="btn-icon" onclick="speakGlobal('${ej.en.replace(/'/g, "\\'")}')">🔊</button>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("") + `</div>` + buildExercisesHTML(data.ejercicios, "questions");
    }
  }

  gramBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      gramBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrammar(btn.dataset.gram);
    });
  });

  // ==================== MÓDULO 3: FUNDAMENTOS & DIÁLOGOS ====================
  const fundContainer = document.getElementById("fundamentals-container");
  const fundBtns = document.querySelectorAll("[data-fund]");

  function renderFundamentals(type) {
    fundContainer.innerHTML = "";

    if (type === "vocales") {
      fundContainer.innerHTML = `<div class="cards-grid">` + window.FUNDAMENTOS_DATA.vocales.map(v => `
        <div class="card">
          <div>
            <span class="tag">${v.simbolo}</span>
            <h3>${v.ejemplo}</h3>
            <p>${v.sonido}</p>
            <div class="example-row">
              <strong>${v.frase}</strong>
              <button class="btn-icon" onclick="speakGlobal('${v.frase}')">🔊</button>
            </div>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    if (type === "numeros") {
      fundContainer.innerHTML = `<div class="cards-grid">` + window.FUNDAMENTOS_DATA.numeros.map(n => `
        <div class="card">
          <div>
            <h3>${n.es}</h3>
            <div class="example-row">
              <strong>${n.en}</strong>
              <button class="btn-icon" onclick="speakGlobal('${n.en.replace(/'/g, "\\'")}')">🔊</button>
            </div>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    if (type === "profesiones" || type === "verbos") {
      const list = window.FUNDAMENTOS_DATA[type];
      fundContainer.innerHTML = `<div class="cards-grid">` + list.map(item => `
        <div class="card">
          <div>
            <h3>${item.en}</h3>
            <p>${item.es}</p>
            <div class="example-row">
              <small>${item.frase}</small>
              <button class="btn-icon" onclick="speakGlobal('${item.en}. ${item.frase}')">🔊</button>
            </div>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    if (type === "dialogos") {
      renderDialogueCatalog(window.FUNDAMENTOS_DATA.dialogos);
    }
  }

  function renderDialogueCatalog(dialogues) {
    fundContainer.innerHTML = `
      <div class="cards-grid conversation-grid">
        ${dialogues.map((dialogue, index) => `
          <article class="card conversation-card">
            <div>
              <div class="reader-meta">
                <span class="tag">${dialogue.tema}</span>
                <span class="tag level">Nivel ${dialogue.nivel}</span>
              </div>
              <h3>${dialogue.titulo}</h3>
              <p>${dialogue.descripcion}</p>
              <small>${dialogue.lineas.length} intervenciones</small>
            </div>
            <button type="button" class="btn-primary" data-dialogue-index="${index}">Abrir conversación</button>
          </article>
        `).join("")}
      </div>
    `;

    fundContainer.querySelectorAll("[data-dialogue-index]").forEach(button => {
      button.addEventListener("click", () => renderDialogue(dialogues[Number(button.dataset.dialogueIndex)], dialogues));
    });
  }

  function renderDialogue(dialogue, dialogues) {
    fundContainer.innerHTML = `
      <div class="reader-box dialogue-reader">
        <div class="reader-top-actions">
          <button type="button" class="btn-secondary" id="back-to-dialogues">← Volver a conversaciones</button>
          <button type="button" class="btn-audio-primary" id="play-dialogue">▶️ Escuchar conversación completa</button>
        </div>
        <div class="reader-meta">
          <span class="tag">${dialogue.tema}</span>
          <span class="tag level">Nivel ${dialogue.nivel}</span>
        </div>
        <h2>${dialogue.titulo}</h2>
        <p>${dialogue.descripcion}</p>
        <div class="dialogue-lines">
          ${dialogue.lineas.map((line, index) => `
            <div class="dialogue-line speaker-${line.speaker.toLowerCase()}">
              <div><strong>${line.nombre}:</strong> ${line.en}<small>${line.es}</small></div>
              <button type="button" class="btn-icon dialogue-audio" data-line-index="${index}" aria-label="Escuchar a ${line.nombre}">🔊</button>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    fundContainer.querySelector("#back-to-dialogues").addEventListener("click", () => renderDialogueCatalog(dialogues));
    fundContainer.querySelector("#play-dialogue").addEventListener("click", () => {
      playSequence(dialogue.lineas.map(line => ({
        text: line.en,
        voice: line.speaker === "A" ? "en-US-AriaNeural" : "en-US-GuyNeural"
      })));
    });
    fundContainer.querySelectorAll(".dialogue-audio").forEach(button => {
      const line = dialogue.lineas[Number(button.dataset.lineIndex)];
      button.addEventListener("click", () => speakText(line.en, null, line.speaker === "A" ? "en-US-AriaNeural" : "en-US-GuyNeural"));
    });
  }

  fundBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      fundBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderFundamentals(btn.dataset.fund);
    });
  });

  window.speakGlobal = (txt, voice = null) => speakText(txt, null, voice);

  renderGrammar("tobe");
  renderFundamentals("vocales");
});