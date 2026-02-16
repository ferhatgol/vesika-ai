import React from 'react';
import { Download, RefreshCw, CheckCircle } from 'lucide-react';
import Button from './Button';

interface ComparisonViewProps {
  originalImage: string;
  processedImage: string;
  onReset: () => void;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ originalImage, processedImage, onReset }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `data:image/png;base64,${processedImage}`;
    link.download = 'vesikalik-foto.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">İşlem Başarılı!</h2>
        <p className="text-slate-600">Vesikalık fotoğrafınız hazır. Aşağıdan inceleyebilir ve indirebilirsiniz.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Original */}
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-slate-100 relative">
              <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded">
                Orijinal
              </span>
              <img 
                src={originalImage} 
                alt="Original" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Processed */}
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-2xl shadow-lg border border-blue-100 ring-1 ring-blue-200">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white relative group">
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm z-10">
                AI Sonuç
              </span>
              <img 
                src={`data:image/png;base64,${processedImage}`} 
                alt="Processed Passport" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 pb-12">
        <Button variant="outline" onClick={onReset} icon={<RefreshCw size={18} />}>
          Yeni Fotoğraf
        </Button>
        <Button onClick={handleDownload} icon={<Download size={18} />} className="shadow-lg shadow-blue-200">
          İndir (PNG)
        </Button>
      </div>
    </div>
  );
};

export default ComparisonView;
