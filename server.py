import hashlib
import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import edge_tts

app = FastAPI(title="English Studio Neural Audio API")

# Permitir peticiones desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Carpeta donde se guardan los audios generados para reproducción instantánea
CACHE_DIR = Path("audio_cache")
CACHE_DIR.mkdir(exist_ok=True)

class TTSRequest(BaseModel):
    text: str
    voice: str = "en-US-AriaNeural"
    rate: str = "+0%"  # Ej: "-25%", "-10%", "+0%", "+15%"

@app.post("/api/tts")
async def generate_speech(req: TTSRequest):
    clean_text = req.text.strip()
    if not clean_text:
        raise HTTPException(status_code=400, detail="El texto está vacío")

    # Crear un hash único según texto + voz + velocidad para reutilizar el MP3
    key = f"{clean_text}|{req.voice}|{req.rate}".encode("utf-8")
    file_hash = hashlib.sha256(key).hexdigest()[:24]
    output_path = CACHE_DIR / f"{file_hash}.mp3"

    # Si no existe en caché, lo genera con voz neuronal
    if not output_path.exists():
        try:
            communicate = edge_tts.Communicate(
                text=clean_text,
                voice=req.voice,
                rate=req.rate
            )
            await communicate.save(str(output_path))
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error generando audio: {str(e)}")

    return FileResponse(path=output_path, media_type="audio/mpeg")

# Servir también la interfaz web directamente desde http://127.0.0.1:8000
app.mount("/", StaticFiles(directory=".", html=True), name="static")