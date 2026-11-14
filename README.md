# English Studio

Aplicación web para practicar inglés con lecturas, gramática, ejercicios y conversaciones.

## GitHub Pages

La interfaz estática se publica en GitHub Pages y puede abrirse desde cualquier dispositivo. El audio neuronal usa `POST http://127.0.0.1:8000/api/tts`; esa dirección apunta al propio dispositivo, por lo que Pages no puede usar el backend local. Para escuchar audio desde otros dispositivos, el backend FastAPI debe alojarse en un servidor HTTPS accesible y `API_URL` en `app.js` debe apuntar a ese servicio.

## Ejecutar localmente en Windows

Desde la carpeta del proyecto, ejecuta:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn server:app --reload --host 127.0.0.1 --port 8000
```

Después abre <http://127.0.0.1:8000/>.
