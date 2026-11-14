# English Studio

Aplicación web para practicar inglés con lecturas, gramática, ejercicios y conversaciones.

## GitHub Pages

La interfaz estática se publica en GitHub Pages y puede abrirse desde cualquier dispositivo. En el equipo local, el audio neuronal usa `POST http://127.0.0.1:8000/api/tts`. En GitHub Pages, `app.js` usa el backend HTTPS configurado para Render. El servicio de Render debe estar desplegado para que el audio funcione desde otros dispositivos.

## Publicar el audio en Render

El archivo `render.yaml` configura el backend FastAPI como un servicio web de Render. Para publicarlo:

1. En Render, crea un **Blueprint** y conecta el repositorio `DeynerPROBOOK/software-Ingles`.
2. Confirma la creación del servicio `english-studio-neural-audio`.
3. Espera a que el despliegue termine y verifica que la URL del servicio sea `https://english-studio-neural-audio.onrender.com`.
4. La web de GitHub Pages ya está configurada para enviar el audio a ese servicio.

Si Render asigna otra URL, actualiza la URL en `app.js` y sube el cambio. En planes gratuitos, el servicio puede entrar en reposo; la primera reproducción después de un tiempo inactivo podría tardar en responder.

## Ejecutar localmente en Windows

Desde la carpeta del proyecto, ejecuta:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

Después abre <http://127.0.0.1:8000/>.
