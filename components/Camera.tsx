import React, { useRef, useState, useEffect } from 'react';
import { Camera as CameraIcon, X, RefreshCw } from 'lucide-react';
import Button from './Button';

interface CameraProps {
  onCapture: (base64Image: string) => void;
  onClose: () => void;
}

const Camera: React.FC<CameraProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } } 
        });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error("Camera access error:", err);
        setError("Kameraya erişilemedi. Lütfen izinleri kontrol edin.");
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw the current video frame to the canvas
        // Flip horizontally to mirror user experience if needed, but for passport photo standard, normal is better.
        // Let's keep it standard (non-mirrored) for output correctness, but maybe mirror the preview?
        // For simplicity, we capture exactly what the sensor sees.
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        onCapture(dataUrl);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} className="p-2 bg-slate-900/50 hover:bg-slate-900 rounded-full text-white backdrop-blur-sm transition-colors">
            <X size={24} />
          </button>
        </div>

        {error ? (
          <div className="h-96 flex items-center justify-center text-red-400 p-8 text-center">
            {error}
          </div>
        ) : (
          <div className="relative aspect-video bg-slate-900">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover transform scale-x-[-1]" // Mirror preview for UX
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Guide Overlay for Passport Photo */}
            <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
              <div className="w-48 h-64 border-2 border-blue-400/50 rounded-full opacity-70 transform -translate-y-4"></div>
            </div>
          </div>
        )}

        <div className="p-6 flex justify-center bg-slate-900">
          <Button 
            onClick={handleCapture} 
            disabled={!!error}
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
          >
            <CameraIcon size={20} />
            Fotoğraf Çek
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Camera;
