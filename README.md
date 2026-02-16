<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Passport Photo Pro</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body class="bg-slate-50 text-slate-900 font-sans">

    <header class="bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <div class="flex items-center gap-2">
            <div class="bg-blue-600 p-2 rounded-lg">
                <i class="fas fa-camera-retro text-white text-xl"></i>
            </div>
            <h1 class="text-xl font-bold tracking-tight text-slate-800">AI Passport <span class="text-blue-600">Pro</span></h1>
        </div>
        <button class="text-sm font-medium bg-slate-100 hover:bg-slate-200 py-2 px-4 rounded-full transition">
            Nasıl Çalışır?
        </button>
    </header>

    <main class="max-w-4xl mx-auto p-6 space-y-8">
        
        <section class="text-center space-y-4 py-8">
            <h2 class="text-3xl font-extrabold text-slate-900">Saniyeler İçinde Biyometrik Fotoğraf</h2>
            <p class="text-slate-500 max-w-lg mx-auto">Sıradan bir selfie'yi profesyonel stüdyo kalitesinde vesikalık fotoğrafa dönüştürün. Gemini 2.5 Flash ile güçlendirildi.</p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button class="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-200 transition-all">
                    <i class="fas fa-camera"></i> Kamerayı Aç
                </button>
                <label class="flex items-center justify-center gap-2 bg-white border-2 border-dashed border-slate-300 hover:border-blue-400 px-8 py-4 rounded-2xl font-semibold cursor-pointer transition-all">
                    <i class="fas fa-upload text-slate-400"></i> Fotoğraf Yükle
                    <input type="file" class="hidden">
                </label>
            </div>
        </section>

        <section class="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] max-w-2xl mx-auto border-8 border-white">
            <div class="absolute inset-0 flex items-center justify-center">
                <p class="text-slate-500 italic text-sm">Kamera görüntüsü burada görünecek...</p>
            </div>

            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div class="w-48 h-64 border-2 border-dashed border-blue-400/60 rounded-[100%] mb-12"></div>
                <div class="absolute top-1/3 w-full border-t border-white/20"></div>
                <div class="absolute left-1/2 h-full border-l border-white/20"></div>
            </div>

            <div class="absolute bottom-6 inset-x-0 flex justify-center gap-4 px-6">
                <button class="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition">
                    <i class="fas fa-rotate"></i>
                </button>
                <button class="bg-white text-slate-900 w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition">
                    <div class="w-12 h-12 border-4 border-slate-900 rounded-full"></div>
                </button>
                <button class="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition">
                    <i class="fas fa-bolt"></i>
                </button>
            </div>
        </section>

        <section class="grid md:grid-cols-2 gap-6 pt-8">
            <div class="space-y-2">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Orijinal</span>
                <div class="bg-slate-200 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://via.placeholder.com/300x400?text=Orijinal+Selfie" class="w-full h-full object-cover grayscale opacity-50" />
                </div>
            </div>
            <div class="space-y-2">
                <div class="flex justify-between items-end">
                    <span class="text-xs font-bold uppercase tracking-wider text-blue-600">AI İşlenmiş (Biyometrik)</span>
                    <span class="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-bold">STÜDYO KALİTESİ</span>
                </div>
                <div class="bg-white aspect-[3/4] rounded-2xl overflow-hidden border-4 border-blue-500 shadow-xl relative group">
                    <img src="https://via.placeholder.com/300x400?text=Vesikalık+Sonuç" class="w-full h-full object-cover" />
                    <button class="absolute bottom-4 right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
                        <i class="fas fa-download"></i> İndir
                    </button>
                </div>
            </div>
        </section>

    </main>

    <footer class="py-12 text-center text-slate-400 text-sm">
        <p>&copy; 2026 AI Passport Photo Generator. Tüm hakları saklıdır.</p>
        <p class="mt-2 flex justify-center items-center gap-1 italic">
            Powered by <span class="font-bold text-slate-600 italic">Gemini 2.5 Flash</span>
        </p>
    </footer>

</body>
</html>
