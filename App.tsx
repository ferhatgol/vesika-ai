import React, { useState, useCallback } from 'react';
import { Upload, Camera as CameraIcon, ShieldCheck, Sparkles, User, AlertCircle } from 'lucide-react';
import Camera from './components/Camera';
import ComparisonView from './components/ComparisonView';
import Button from './components/Button';
import { processPassportPhoto } from './services/geminiService';
import { AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setAppState(AppState.PREVIEW);
        setErrorMsg(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = (base64Image: string) => {
    setImage(base64Image);
    setShowCamera(false);
    setAppState(AppState.PREVIEW);
    setErrorMsg(null);
  };

  const processImage = async () => {
    if (!image) return;

    setAppState(AppState.PROCESSING);
    setErrorMsg(null);

    try {
      // Clean base64 string
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];

      const resultBase64 = await processPassportPhoto(base64Data, mimeType);
      
      setProcessedImage(resultBase64);
      setAppState(AppState.SUCCESS);
    } catch (err: any) {
      console.error("Processing failed", err);
      setAppState(AppState.ERROR);
      setErrorMsg("Fotoğraf işlenirken bir hata oluştu. Lütfen tekrar deneyin veya farklı bir fotoğraf yükleyin.");
    }
  };

  const resetApp = () => {
    setAppState(AppState.IDLE);
    setImage(null);
    setProcessedImage(null);
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <User size={20} strokeWidth={2.5} />
            </div>
            <h1 className="font-bold text-lg text-slate-800 tracking-tight">AI Vesikalık Oluşturucu</h1>
          </div>
          <div className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            BETA v1.0
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start p-4 md:p-8">
        
        {/* Error Notification */}
        {errorMsg && (
          <div className="w-full max-w-xl mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <p>{errorMsg}</p>
          </div>
        )}

        {appState === AppState.IDLE && (
          <div className="max-w-3xl w-full space-y-12 animate-in fade-in zoom-in duration-500">
            <div className="text-center space-y-4 pt-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Mükemmel Vesikalık, <br/>
                <span className="text-blue-600">Saniyeler İçinde.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Yapay zeka teknolojisi ile evinizin konforunda profesyonel biyometrik fotoğraf oluşturun. Arka planı temizler, ışığı düzenler ve yüzünüzü mükemmel şekilde hizalar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-3">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Yüz Bütünlüğü</h3>
                <p className="text-sm text-slate-500">Yüz hatlarınız ve kimliğiniz korunur. Sadece ışık ve ortam iyileştirilir.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-3">
                <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Otomatik Düzenleme</h3>
                <p className="text-sm text-slate-500">Arka plan beyazlatılır ve gölgeler yumuşatılarak stüdyo kalitesi sağlanır.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center space-y-3">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <User size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Biyometrik Standart</h3>
                <p className="text-sm text-slate-500">Baş hizalaması ve oranlar otomatik olarak standartlara uygun ayarlanır.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6">
              <label className="group relative cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileUpload}
                  className="hidden" 
                />
                <div className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 font-medium text-lg w-full sm:w-auto min-w-[240px]">
                  <Upload className="mr-3" size={24} />
                  Fotoğraf Yükle
                </div>
              </label>

              <span className="text-slate-400 font-medium">veya</span>

              <button 
                onClick={() => setShowCamera(true)}
                className="flex items-center justify-center px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 font-medium text-lg w-full sm:w-auto min-w-[240px]"
              >
                <CameraIcon className="mr-3" size={24} />
                Kamera Kullan
              </button>
            </div>
          </div>
        )}

        {(appState === AppState.PREVIEW || appState === AppState.PROCESSING || appState === AppState.ERROR) && image && (
          <div className="w-full max-w-lg space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-300">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-slate-100">
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                {appState === AppState.PROCESSING && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="font-semibold text-slate-700 animate-pulse">Fotoğrafınız İşleniyor...</p>
                    <p className="text-xs text-slate-500 mt-2">Bu işlem yapay zeka ile 5-10 saniye sürebilir.</p>
                  </div>
                )}
              </div>
            </div>

            {appState === AppState.ERROR && (
              <div className="flex justify-center">
                 <Button onClick={processImage} variant="primary" className="w-full">
                    Tekrar Dene
                 </Button>
              </div>
            )}

            {appState === AppState.PREVIEW && (
              <div className="flex gap-4">
                <Button onClick={resetApp} variant="outline" className="flex-1">
                  İptal
                </Button>
                <Button onClick={processImage} variant="primary" className="flex-[2] shadow-lg shadow-blue-200" icon={<Sparkles size={18} />}>
                  Vesikalığa Dönüştür
                </Button>
              </div>
            )}
          </div>
        )}

        {appState === AppState.SUCCESS && processedImage && image && (
          <ComparisonView 
            originalImage={image} 
            processedImage={processedImage} 
            onReset={resetApp} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>&copy; 2024 AI Vesikalık Oluşturucu. Gizliliğiniz bizim için önemlidir, fotoğraflarınız sunucuda saklanmaz.</p>
      </footer>

      {/* Camera Modal */}
      {showCamera && (
        <Camera 
          onCapture={handleCameraCapture} 
          onClose={() => setShowCamera(false)} 
        />
      )}
    </div>
  );
}

export default App;
