window.GRAMATICA_DATA = {
  tobe: {
    bloques: [
      {
        titulo: "1. Verbo To Be: Afirmativo (Ser o Estar)",
        uso: "Usa 'am' con I, 'is' con he/she/it, y 'are' con you/we/they.",
        formula: "Sujeto + am / is / are + Complemento",
        ejemplos: [
          { en: "I am a systems engineering student.", es: "Soy estudiante de ingeniería de sistemas." },
          { en: "The mountain is very tall and cold.", es: "La montaña es muy alta y fría." },
          { en: "We are ready to practice English today.", es: "Estamos listos para practicar inglés hoy." }
        ]
      },
      {
        titulo: "2. Verbo To Be: Negativo",
        uso: "Solo agrega 'not' después del verbo To Be. No uses 'don't' ni 'doesn't'.",
        formula: "Sujeto + am not / isn't / aren't + Complemento",
        ejemplos: [
          { en: "I am not frustrated anymore.", es: "Ya no estoy frustrado." },
          { en: "She isn't in the laboratory right now.", es: "Ella no está en el laboratorio ahora mismo." },
          { en: "They aren't afraid of difficult books.", es: "Ellos no tienen miedo de los libros difíciles." }
        ]
      },
      {
        titulo: "3. Verbo To Be: Preguntas",
        uso: "Invierte el orden: pon Am, Is o Are al principio de la oración.",
        formula: "Am / Is / Are + Sujeto + Complemento + ?",
        ejemplos: [
          { en: "Are you interested in neurology?", es: "¿Estás interesado en la neurología?" },
          { en: "Is this trail safe during the rain?", es: "¿Es seguro este sendero durante la lluvia?" },
          { en: "Where are my hiking boots?", es: "¿Dónde están mis botas de senderismo?" }
        ]
      }
    ],
    ejercicios: [
      {
        pregunta: "Completa: 'My brain ___ learning new patterns every day.'",
        opciones: ["am", "is", "are"],
        correcta: "is",
        explicacion: "'My brain' equivale a 'it' (singular), por eso usamos 'is'."
      },
      {
        pregunta: "Completa la pregunta: '___ you ready for the next level?'",
        opciones: ["Is", "Am", "Are"],
        correcta: "Are",
        explicacion: "Con el pronombre 'you' siempre usamos 'Are'."
      },
      {
        pregunta: "Elige la forma negativa correcta: 'The neurons ___ static; they constantly adapt.'",
        opciones: ["isn't", "aren't", "not are"],
        correcta: "aren't",
        explicacion: "'The neurons' es plural (they), así que la negación correcta es 'aren't'."
      }
    ]
  },

  tenses: {
    lista: [
      // PRESENTES
      {
        grupo: "Presente (1-4)",
        nombre: "1. Present Simple (Presente Simple)",
        uso: "Rutinas diarias, hábitos, hechos científicos y verdades permanentes.",
        marcadores: "always, usually, every day, often, never",
        formula: "Sujeto + Verbo base (+ s/es en he, she, it)",
        ejemplos: [
          { en: "Neurons send electrical signals every millisecond.", es: "Las neuronas envían señales eléctricas cada milisegundo." },
          { en: "She reads one chapter before sleeping.", es: "Ella lee un capítulo antes de dormir." }
        ]
      },
      {
        grupo: "Presente (1-4)",
        nombre: "2. Present Continuous (Presente Continuo)",
        uso: "Acciones que ocurren en este preciso instante o proyectos temporales actuales.",
        marcadores: "now, right now, at the moment, today, currently",
        formula: "Sujeto + am / is / are + Verbo-ing",
        ejemplos: [
          { en: "I am building my own English platform right now.", es: "Estoy construyendo mi propia plataforma de inglés ahora mismo." },
          { en: "They are climbing the north ridge today.", es: "Ellos están escalando la cresta norte hoy." }
        ]
      },
      {
        grupo: "Presente (1-4)",
        nombre: "3. Present Perfect (Presente Perfecto)",
        uso: "Experiencias de vida (sin decir cuándo) o acciones pasadas con resultado en el presente.",
        marcadores: "already, yet, just, ever, never, twice, recently",
        formula: "Sujeto + have / has + Participio Pasado (3ra columna)",
        ejemplos: [
          { en: "I have visited three volcanic peaks this year.", es: "He visitado tres picos volcánicos este año." },
          { en: "Science has discovered amazing facts about sleep.", es: "La ciencia ha descubierto datos asombrosos sobre el sueño." }
        ]
      },
      {
        grupo: "Presente (1-4)",
        nombre: "4. Present Perfect Continuous",
        uso: "Acción que empezó en el pasado y sigue ocurriendo ahora mismo (enfatiza la duración).",
        marcadores: "for two hours, since morning, all day, lately",
        formula: "Sujeto + have / has been + Verbo-ing",
        ejemplos: [
          { en: "I have been studying grammar for forty minutes.", es: "He estado estudiando gramática durante cuarenta minutos." },
          { en: "It has been raining in the mountains since dawn.", es: "Ha estado lloviendo en las montañas desde el amanecer." }
        ]
      },

      // PASADOS
      {
        grupo: "Pasado (5-8)",
        nombre: "5. Past Simple (Pasado Simple)",
        uso: "Acciones que empezaron y terminaron completamente en un momento definido del pasado.",
        marcadores: "yesterday, last week, in 2024, two days ago",
        formula: "Sujeto + Verbo en Pasado (-ed o irregular)",
        ejemplos: [
          { en: "Yesterday I read a long story about a lighthouse.", es: "Ayer leí una historia larga sobre un faro." },
          { en: "We reached the summit at noon.", es: "Alcanzamos la cumbre al mediodía." }
        ]
      },
      {
        grupo: "Pasado (5-8)",
        nombre: "6. Past Continuous (Pasado Continuo)",
        uso: "Acción larga que estaba en progreso en el pasado cuando otra la interrumpió.",
        marcadores: "while, when, at 8 PM yesterday",
        formula: "Sujeto + was / were + Verbo-ing",
        ejemplos: [
          { en: "I was walking along the trail when the sun came out.", es: "Iba caminando por el sendero cuando salió el sol." },
          { en: "They were analyzing brain scans all afternoon.", es: "Ellos estaban analizando escáneres cerebrales toda la tarde." }
        ]
      },
      {
        grupo: "Pasado (5-8)",
        nombre: "7. Past Perfect (Pasado Perfecto)",
        uso: "El 'pasado del pasado': una acción que ocurrió ANTES que otra acción pasada.",
        marcadores: "before, after, already, by the time",
        formula: "Sujeto + had + Participio Pasado",
        ejemplos: [
          { en: "When Thomas opened the bottle, the sailor had written the letter fifty years earlier.", es: "Cuando Thomas abrió la botella, el marinero había escrito la carta cincuenta años antes." }
        ]
      },
      {
        grupo: "Pasado (5-8)",
        nombre: "8. Past Perfect Continuous",
        uso: "Acción continua que estuvo pasando antes de otro momento en el pasado.",
        marcadores: "for hours before, until, since",
        formula: "Sujeto + had been + Verbo-ing",
        ejemplos: [
          { en: "We had been hiking for four hours before we found the stream.", es: "Habíamos estado caminando por cuatro horas antes de encontrar el arroyo." }
        ]
      },

      // FUTUROS
      {
        grupo: "Futuro (9-12)",
        nombre: "9. Future Simple (Will)",
        uso: "Decisiones tomadas en el momento, predicciones, promesas u ofrecimientos.",
        marcadores: "tomorrow, next year, I think, probably, soon",
        formula: "Sujeto + will + Verbo Base",
        ejemplos: [
          { en: "I think I will read one more paragraph tonight.", es: "Creo que leeré un párrafo más esta noche." },
          { en: "Consistent practice will improve your listening.", es: "La práctica constante mejorará tu escucha." }
        ]
      },
      {
        grupo: "Futuro (9-12)",
        nombre: "10. Future Going To",
        uso: "Planes ya decididos con anticipación o algo evidente que va a pasar.",
        marcadores: "tonight, this weekend, next month",
        formula: "Sujeto + am / is / are + going to + Verbo Base",
        ejemplos: [
          { en: "I am going to add ten new stories to my app this week.", es: "Voy a agregar diez historias nuevas a mi app esta semana." }
        ]
      },
      {
        grupo: "Futuro (9-12)",
        nombre: "11. Future Continuous",
        uso: "Acción que estará en pleno desarrollo en un momento específico del futuro.",
        marcadores: "this time tomorrow, at 9 AM next Monday",
        formula: "Sujeto + will be + Verbo-ing",
        ejemplos: [
          { en: "This time tomorrow, I will be hiking near the volcano.", es: "Mañana a esta hora, estaré haciendo senderismo cerca del volcán." }
        ]
      },
      {
        grupo: "Futuro (9-12)",
        nombre: "12. Future Perfect",
        uso: "Acción que ya estará terminada antes de una fecha o límite futuro.",
        marcadores: "by next year, by Friday, by 2027",
        formula: "Sujeto + will have + Participio Pasado",
        ejemplos: [
          { en: "By December, I will have mastered all twelve verb tenses.", es: "Para diciembre, habré dominado los doce tiempos verbales." }
        ]
      }
    ],
    ejercicios: [
      {
        pregunta: "1. (Present Simple) 'The human brain ___ about three pounds.'",
        opciones: ["weigh", "weighs", "weighing"],
        correcta: "weighs",
        explicacion: "Es un hecho científico (Present Simple) y 'The human brain' es tercera persona (it), así que lleva -s."
      },
      {
        pregunta: "2. (Present Continuous) 'Listen! The birds ___ in the forest right now.'",
        opciones: ["sing", "are singing", "sang"],
        correcta: "are singing",
        explicacion: "La palabra 'right now' indica una acción ocurriendo en este mismo instante."
      },
      {
        pregunta: "3. (Past Simple) 'Yesterday we ___ a green bottle on the beach.'",
        opciones: ["find", "found", "have found"],
        correcta: "found",
        explicacion: "'Yesterday' marca un tiempo pasado ya terminado, por eso usamos el pasado simple 'found'."
      },
      {
        pregunta: "4. (Present Perfect) 'I ___ never ___ that mountain before.'",
        opciones: ["have / climbed", "did / climb", "am / climbing"],
        correcta: "have / climbed",
        explicacion: "Para experiencias de vida con 'never' o 'ever' usamos Present Perfect (have + participio)."
      },
      {
        pregunta: "5. (Past Continuous) 'I ___ a book when the phone rang.'",
        opciones: ["read", "was reading", "will read"],
        correcta: "was reading",
        explicacion: "Acción en progreso en el pasado ('was reading') interrumpida por otra acción ('rang')."
      },
      {
        pregunta: "6. (Past Perfect) 'When we arrived at the station, the bus ___ already ___.'",
        opciones: ["has / left", "had / left", "was / leaving"],
        correcta: "had / left",
        explicacion: "El bus se fue ANTES de que llegáramos (pasado anterior a otro pasado = had + participio)."
      },
      {
        pregunta: "7. (Present Perfect Continuous) 'She ___ English for two hours without stopping.'",
        opciones: ["has been practicing", "is practicing", "practiced"],
        correcta: "has been practicing",
        explicacion: "Enfatiza la duración ('for two hours') desde el pasado hasta el presente."
      },
      {
        pregunta: "8. (Future Perfect) 'By next month, I ___ fifty new words.'",
        opciones: ["will learn", "will have learned", "am learning"],
        correcta: "will have learned",
        explicacion: "'By next month' indica que la acción ya estará completada antes de ese punto futuro."
      }
    ]
  },

  questions: {
    bloques: [
      {
        titulo: "1. La Regla de Oro: Auxiliar Antes del Sujeto",
        uso: "En español solo cambias la entonación (¿Tú estudias?). En inglés DEBES poner un auxiliar antes del sujeto.",
        formula: "Auxiliar (Do / Does / Did / Will / Have) + Sujeto + Verbo Base + ?",
        ejemplos: [
          { en: "Do you understand this paragraph?", es: "¿Entiendes este párrafo? (Presente con I/you/we/they)" },
          { en: "Does the brain need deep sleep?", es: "¿El cerebro necesita sueño profundo? (Presente con he/she/it)" },
          { en: "Did you walk in the mountains yesterday?", es: "¿Caminaste en las montañas ayer? (Pasado - el verbo vuelve a su forma base)" },
          { en: "Will you practice again tomorrow?", es: "¿Practicarás de nuevo mañana? (Futuro)" }
        ]
      },
      {
        titulo: "2. Preguntas Abiertas con Palabras Wh-",
        uso: "Usa What (Qué), Where (Dónde), When (Cuándo), Why (Por qué), Who (Quién), How (Cómo) al inicio.",
        formula: "Wh- Word + Auxiliar + Sujeto + Verbo Base + ?",
        ejemplos: [
          { en: "What does 'neuroplasticity' mean?", es: "¿Qué significa 'neuroplasticidad'?" },
          { en: "Where did coffee originate?", es: "¿Dónde se originó el café?" },
          { en: "Why do neurons send chemical signals?", es: "¿Por qué las neuronas envían señales químicas?" },
          { en: "How long have you been studying English?", es: "¿Cuánto tiempo llevas estudiando inglés?" }
        ]
      }
    ],
    ejercicios: [
      {
        pregunta: "1. Pregunta en pasado: '___ you read the story yesterday?'",
        opciones: ["Do", "Did", "Were"],
        correcta: "Did",
        explicacion: "Para preguntar con un verbo de acción ('read') en pasado, usamos el auxiliar 'Did'."
      },
      {
        pregunta: "2. Pregunta en presente (3ra persona): 'What ___ this word mean?'",
        opciones: ["do", "does", "is"],
        correcta: "does",
        explicacion: "'This word' equivale a 'it', por lo tanto el auxiliar en presente es 'does'."
      },
      {
        pregunta: "3. Orden correcto: '¿Dónde vives tú?'",
        opciones: ["Where you live?", "Where do you live?", "Where does you live?"],
        correcta: "Where do you live?",
        explicacion: "Estructura: Wh- (Where) + Auxiliar (do) + Sujeto (you) + Verbo (live)."
      }
    ]
  }
};

const TENSE_STUDY = [
  {
    usos: "Hábitos, rutinas, estados permanentes y hechos verificables. En tercera persona singular, el verbo principal suele llevar -s o -es.",
    contraste: "No lo uses para una acción que está ocurriendo justo ahora; para eso, Present Continuous. Los verbos de estado (know, believe, need) normalmente no van en continuo.",
    formulas: { "Afirmativa": "Sujeto + verbo base (+ s/es con he/she/it)", "Negativa": "Sujeto + do/does not + verbo base", "Interrogativa": "Do/Does + sujeto + verbo base + ?" },
    examples: [
      ["I review my notes every evening.", "Repaso mis apuntes cada tarde."],
      ["Maya studies memory and attention.", "Maya estudia la memoria y la atención."],
      ["The brain needs regular sleep.", "El cerebro necesita dormir con regularidad."],
      ["Do you usually take the early train?", "¿Sueles tomar el tren temprano?"]
    ],
    blanks: ["My brother ___ vocabulary before breakfast.", "Water ___ at one hundred degrees Celsius.", "They ___ the mountain trail every summer.", "___ she work at the city library?", "We ___ coffee after dinner."],
    answers: ["reviews", "boils", "explore", "Does", "do not drink"],
    wrong: ["review", "is boiling"],
    explanation: "Las rutinas y los hechos generales van en Present Simple. Recuerda la -s de la tercera persona y do/does en preguntas."
  },
  {
    usos: "Acciones en progreso ahora, situaciones temporales y cambios que están ocurriendo en el periodo actual. También sirve para planes personales ya organizados.",
    contraste: "No lo uses para rutinas habituales ni, por lo general, con verbos de estado como know o belong. Contrasta con Present Simple: hábito frente a acción temporal/en curso.",
    formulas: { "Afirmativa": "Sujeto + am/is/are + verbo-ing", "Negativa": "Sujeto + am/is/are not + verbo-ing", "Interrogativa": "Am/Is/Are + sujeto + verbo-ing + ?" },
    examples: [
      ["I am reading a chapter right now.", "Estoy leyendo un capítulo ahora mismo."],
      ["The research team is studying sleep this month.", "El equipo de investigación está estudiando el sueño este mes."],
      ["They are not climbing today because of the storm.", "No están subiendo hoy por la tormenta."],
      ["Are you meeting the guide at the station?", "¿Te reunirás con el guía en la estación?"]
    ],
    blanks: ["Listen! The birds ___ above the valley.", "I ___ a new study plan this week.", "The children ___ outside right now.", "___ he ___ the equipment at the moment?", "We ___ (not / travel) this weekend."],
    answers: ["are singing", "am testing", "are playing", "Is / checking", "are not traveling"],
    wrong: ["sing", "sang"],
    explanation: "Usa be + verbo-ing para una acción actual o temporal; el auxiliar be concuerda con el sujeto."
  },
  {
    usos: "Experiencias sin fecha pasada especificada, resultados presentes de una acción pasada y periodos que siguen abiertos (today, this year).",
    contraste: "No lo combines con un momento pasado terminado como yesterday o in 2020; usa Past Simple. Si interesa cuánto tiempo lleva una actividad continua, suele encajar Present Perfect Continuous.",
    formulas: { "Afirmativa": "Sujeto + have/has + participio", "Negativa": "Sujeto + have/has not + participio", "Interrogativa": "Have/Has + sujeto + participio + ?" },
    examples: [
      ["I have visited the science museum twice.", "He visitado el museo de ciencias dos veces."],
      ["She has just finished her report.", "Ella acaba de terminar su informe."],
      ["We have not seen that film yet.", "Todavía no hemos visto esa película."],
      ["Have you ever slept in a mountain shelter?", "¿Has dormido alguna vez en un refugio de montaña?"]
    ],
    blanks: ["I ___ never ___ a glacier before.", "He ___ already ___ the email.", "They ___ (not / choose) a route yet.", "___ you ever ___ a night hike?", "Our teacher ___ just ___ the lesson."],
    answers: ["have / seen", "has / sent", "have not chosen", "Have / taken", "has / started"],
    wrong: ["did / see", "have / saw"],
    explanation: "Present Perfect conecta una experiencia o resultado pasado con el presente; no indiques una fecha pasada ya cerrada."
  },
  {
    usos: "Acciones que comenzaron antes y continúan ahora, o que acaban de terminar dejando una evidencia. Enfatiza duración o actividad.",
    contraste: "Con verbos de estado (know, own, believe) suele preferirse Present Perfect simple. Si importa el resultado o la cantidad completada, usa Present Perfect simple.",
    formulas: { "Afirmativa": "Sujeto + have/has been + verbo-ing", "Negativa": "Sujeto + have/has not been + verbo-ing", "Interrogativa": "Have/Has + sujeto + been + verbo-ing + ?" },
    examples: [
      ["I have been practicing pronunciation for an hour.", "He estado practicando pronunciación durante una hora."],
      ["It has been raining since dawn.", "Ha estado lloviendo desde el amanecer."],
      ["They have been waiting outside all morning.", "Han estado esperando afuera toda la mañana."],
      ["How long have you been learning English?", "¿Cuánto tiempo llevas aprendiendo inglés?"]
    ],
    blanks: ["She ___ ___ ___ for the exam since Monday.", "We ___ ___ ___ the trail for three hours.", "The baby ___ ___ ___ all afternoon.", "___ they ___ ___ at this clinic long?", "I ___ ___ ___ regularly lately."],
    answers: ["has been studying", "have been following", "has been sleeping", "Have / been working", "have been exercising"],
    wrong: ["has studied", "were studying"],
    explanation: "Have/has been + -ing destaca duración y continuidad; for indica cuánto tiempo y since el punto de inicio."
  },
  {
    usos: "Acciones y estados terminados en un momento pasado definido, o una secuencia de eventos completados.",
    contraste: "No lo sustituyas por Present Perfect cuando se menciona una fecha o periodo pasado cerrado (last year, yesterday). Para una acción que estaba en curso, usa Past Continuous.",
    formulas: { "Afirmativa": "Sujeto + verbo en pasado", "Negativa": "Sujeto + did not + verbo base", "Interrogativa": "Did + sujeto + verbo base + ?" },
    examples: [
      ["We reached the village before sunset.", "Llegamos al pueblo antes del atardecer."],
      ["I bought a field guide last week.", "Compré una guía de campo la semana pasada."],
      ["She did not hear the announcement.", "Ella no oyó el anuncio."],
      ["Did they cross the bridge yesterday?", "¿Cruzaron el puente ayer?"]
    ],
    blanks: ["Yesterday, I ___ my old teacher.", "They ___ the museum last Saturday.", "He ___ (not / bring) his raincoat.", "___ you ___ the final chapter last night?", "We ___ the train two minutes ago."],
    answers: ["called", "visited", "did not bring", "Did / read", "missed"],
    wrong: ["have called", "calls"],
    explanation: "Un marcador de tiempo pasado terminado requiere Past Simple; después de did, el verbo principal vuelve a la forma base."
  },
  {
    usos: "Una acción que estaba en progreso en un momento pasado, como contexto de una narración, o una acción larga interrumpida por otra.",
    contraste: "La acción breve que interrumpe suele ir en Past Simple. Para acciones completas y consecutivas sin énfasis en duración, usa Past Simple.",
    formulas: { "Afirmativa": "Sujeto + was/were + verbo-ing", "Negativa": "Sujeto + was/were not + verbo-ing", "Interrogativa": "Was/Were + sujeto + verbo-ing + ?" },
    examples: [
      ["I was reading when the lights went out.", "Estaba leyendo cuando se apagaron las luces."],
      ["They were walking through the forest at dusk.", "Estaban caminando por el bosque al anochecer."],
      ["She was not sleeping at midnight.", "Ella no estaba durmiendo a medianoche."],
      ["Were you waiting when the bus arrived?", "¿Estabas esperando cuando llegó el autobús?"]
    ],
    blanks: ["At eight o'clock, I ___ dinner.", "We ___ along the ridge when fog appeared.", "He ___ (not / listen) during the lecture.", "___ they ___ when you called?", "The guide ___ the map while we rested."],
    answers: ["was cooking", "were hiking", "was not listening", "Were / sleeping", "was checking"],
    wrong: ["cooked", "have cooked"],
    explanation: "Was/were + -ing presenta la acción como telón de fondo o en curso; la acción puntual suele ir en Past Simple."
  },
  {
    usos: "Una acción que ya había terminado antes de otra acción o referencia pasada. Ayuda a dejar clara la secuencia temporal.",
    contraste: "No hace falta usarlo para cada evento pasado: úsalo cuando el orden no quede claro. Si los eventos se narran en orden cronológico, Past Simple suele bastar.",
    formulas: { "Afirmativa": "Sujeto + had + participio", "Negativa": "Sujeto + had not + participio", "Interrogativa": "Had + sujeto + participio + ?" },
    examples: [
      ["The train had left before we reached the station.", "El tren se había ido antes de que llegáramos a la estación."],
      ["She had never seen snow before that trip.", "Ella nunca había visto nieve antes de ese viaje."],
      ["They had not packed enough water.", "No habían empacado suficiente agua."],
      ["Had you saved the document before the computer crashed?", "¿Habías guardado el documento antes de que fallara el ordenador?"]
    ],
    blanks: ["By the time I arrived, the meeting ___.", "He ___ the book before the class began.", "We ___ (not / meet) the new guide before.", "___ she ___ the key before leaving?", "The storm ___ before sunrise."],
    answers: ["had started", "had finished", "had not met", "Had / found", "had passed"],
    wrong: ["has started", "was starting"],
    explanation: "Had + participio señala el evento anterior dentro de una historia pasada; el otro evento suele ir en Past Simple."
  },
  {
    usos: "Una actividad continua que ya llevaba cierto tiempo antes de otro punto o evento pasado. Destaca duración y proceso.",
    contraste: "Si interesa el resultado terminado y no la duración, Past Perfect simple es más natural. Evita la forma continua con la mayoría de verbos de estado.",
    formulas: { "Afirmativa": "Sujeto + had been + verbo-ing", "Negativa": "Sujeto + had not been + verbo-ing", "Interrogativa": "Had + sujeto + been + verbo-ing + ?" },
    examples: [
      ["We had been hiking for hours before it started raining.", "Llevábamos horas caminando cuando empezó a llover."],
      ["He had been working there since May.", "Llevaba trabajando allí desde mayo."],
      ["They had not been waiting long when the doctor called.", "No llevaban mucho esperando cuando llamó el médico."],
      ["Had you been studying before you took the test?", "¿Habías estado estudiando antes de hacer el examen?"]
    ],
    blanks: ["She ___ ___ ___ for an hour before the class.", "They ___ ___ ___ since dawn when we joined them.", "I ___ ___ ___ well before the trip.", "___ he ___ ___ there long before he moved?", "The team ___ ___ ___ the data all week."],
    answers: ["had been reading", "had been climbing", "had not been sleeping", "Had / been working", "had been analyzing"],
    wrong: ["has been reading", "was read"],
    explanation: "Had been + -ing comunica duración anterior a un punto pasado; for expresa duración y since el comienzo."
  },
  {
    usos: "Predicciones, promesas, ofrecimientos y decisiones espontáneas tomadas al hablar. También expresa una opinión sobre el futuro.",
    contraste: "Para planes decididos previamente suele preferirse going to; para horarios oficiales puede usarse Present Simple. Will no implica por sí mismo un plan organizado.",
    formulas: { "Afirmativa": "Sujeto + will + verbo base", "Negativa": "Sujeto + will not (won't) + verbo base", "Interrogativa": "Will + sujeto + verbo base + ?" },
    examples: [
      ["I think the weather will improve tomorrow.", "Creo que el clima mejorará mañana."],
      ["I will carry that bag for you.", "Llevaré esa bolsa por ti."],
      ["She will not forget your advice.", "Ella no olvidará tu consejo."],
      ["Will you join us after lunch?", "¿Te unirás a nosotros después del almuerzo?"]
    ],
    blanks: ["I think the team ___ the match.", "Don't worry; I ___ you with the bags.", "They ___ (not / arrive) before noon.", "___ she ___ us tomorrow?", "Perhaps we ___ a quiet place nearby."],
    answers: ["will win", "will help", "will not arrive", "Will / call", "will find"],
    wrong: ["wins", "are going to helped"],
    explanation: "Will va seguido de verbo base y suele marcar predicciones, promesas u ofertas; no lleva -s."
  },
  {
    usos: "Planes e intenciones decididos antes de hablar, y predicciones apoyadas en señales visibles o evidencia presente.",
    contraste: "Para una decisión espontánea, usa will. Going to enfatiza intención previa o evidencia, no una predicción basada solo en opinión.",
    formulas: { "Afirmativa": "Sujeto + am/is/are going to + verbo base", "Negativa": "Sujeto + am/is/are not going to + verbo base", "Interrogativa": "Am/Is/Are + sujeto + going to + verbo base + ?" },
    examples: [
      ["We are going to visit the observatory this weekend.", "Vamos a visitar el observatorio este fin de semana."],
      ["Look at those clouds; it is going to rain.", "Mira esas nubes; va a llover."],
      ["I am not going to drive in the snow.", "No voy a conducir con nieve."],
      ["Are they going to move to another city?", "¿Van a mudarse a otra ciudad?"]
    ],
    blanks: ["I ___ ___ ___ a new course next month.", "Look out! That glass ___ ___ ___.", "He ___ ___ ___ (not / join) the trip.", "___ you ___ ___ ___ dinner tonight?", "The researchers ___ ___ ___ the results tomorrow."],
    answers: ["am going to start", "is going to fall", "is not going to join", "Are / going to cook", "are going to publish"],
    wrong: ["will starting", "is going rain"],
    explanation: "Be concuerda con el sujeto; después de going to, usa el verbo base."
  },
  {
    usos: "Una acción que estará en progreso en un momento concreto del futuro. También sirve para preguntar con cortesía por planes previstos.",
    contraste: "No lo uses para destacar que algo ya estará terminado: usa Future Perfect. Para una decisión o predicción simple, suele bastar will + verbo base.",
    formulas: { "Afirmativa": "Sujeto + will be + verbo-ing", "Negativa": "Sujeto + will not be + verbo-ing", "Interrogativa": "Will + sujeto + be + verbo-ing + ?" },
    examples: [
      ["This time tomorrow, we will be flying over the ocean.", "Mañana a esta hora estaremos volando sobre el océano."],
      ["She will be studying at the library tonight.", "Ella estará estudiando en la biblioteca esta noche."],
      ["I will not be using the car this afternoon.", "No estaré usando el coche esta tarde."],
      ["Will you be staying with us next week?", "¿Te alojarás con nosotros la próxima semana?"]
    ],
    blanks: ["At noon, they ___ ___ ___ across the valley.", "This time next week, I ___ ___ ___ in Madrid.", "He ___ ___ ___ during the meeting.", "___ you ___ ___ at six tomorrow?", "We ___ ___ ___ the equipment in the morning."],
    answers: ["will be walking", "will be staying", "will not be sleeping", "Will / be working", "will be checking"],
    wrong: ["will walking", "are be working"],
    explanation: "Will be + -ing enfoca el desarrollo de una actividad en un instante futuro."
  },
  {
    usos: "Una acción que estará completada antes de un límite o momento futuro, a menudo con by, before o by the time.",
    contraste: "Si la acción estará en progreso en ese momento, usa Future Continuous. No confundas el participio con el pasado simple de verbos irregulares.",
    formulas: { "Afirmativa": "Sujeto + will have + participio", "Negativa": "Sujeto + will not have + participio", "Interrogativa": "Will + sujeto + have + participio + ?" },
    examples: [
      ["By Friday, I will have finished the report.", "Para el viernes, habré terminado el informe."],
      ["They will have reached the cabin before dark.", "Habrán llegado a la cabaña antes de que oscurezca."],
      ["She will not have completed the course by June.", "Ella no habrá completado el curso para junio."],
      ["Will you have read the book by then?", "¿Habrás leído el libro para entonces?"]
    ],
    blanks: ["By next year, we ___ ___ ___ the new bridge.", "She ___ ___ ___ the exam before noon.", "They ___ ___ ___ (not / arrive) by sunset.", "___ he ___ ___ the project by Friday?", "By the time you wake up, I ___ ___ ___."],
    answers: ["will have built", "will have completed", "will not have arrived", "Will / have finished", "will have left"],
    wrong: ["will has built", "will be build"],
    explanation: "Will have + participio presenta la acción como terminada antes de un límite futuro."
  }
];

window.GRAMATICA_DATA.tenses.lista.forEach((tense, index) => {
  const study = TENSE_STUDY[index];
  tense.estudio = {
    usos: study.usos,
    contraste: study.contraste,
    formulas: study.formulas
  };
  tense.ejemplos = tense.ejemplos.concat(study.examples.map(([en, es]) => ({ en, es }))).slice(0, 6);
  tense.ejercicios = study.blanks.map((pregunta, exerciseIndex) => ({
    tipo: exerciseIndex < 3 ? "choice" : "fill",
    pregunta: pregunta.replace(/___/g, "___"),
    respuesta: study.answers[exerciseIndex],
    opciones: exerciseIndex < 3
      ? [study.answers[exerciseIndex], study.wrong[exerciseIndex % study.wrong.length], study.wrong[(exerciseIndex + 1) % study.wrong.length]]
      : [],
    explicacion: study.explanation
  }));
});