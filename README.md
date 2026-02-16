```markdown
## 📸 AI Passport Photo Pro
> Sıradan selfieleri saniyeler içinde stüdyo kalitesinde,
> biyometrik uyumlu vesikalık fotoğraflara dönüştüren yapay zeka destekli bir web uygulaması.

---

### 💡 Neden AI Passport Photo Pro?
Geleneksel fotoğrafçılık süreçlerini dijitalleştiren bu uygulama, **Google Gemini 2.5 Flash** modelinin görsel
işleme yeteneklerini kullanarak profesyonel sonuçlar üretir. Karmaşık düzenleme araçlarına veya bir
fotoğrafçıya gitmeye gerek kalmadan, doğrudan tarayıcınızüzerinden resmi standartlara uygun görseller hazırlar.

---

## 🌟 Proje Hakkında
Bu proje, karmaşık fotoğraf düzenleme araçlarına ihtiyaç duymadan, **Google Gemini 2.5 Flash**
modelinin gücünü kullanarak herkesin kendi evinde stüdyo kalitesinde vesikalık fotoğraflar
çekebilmesini sağlar.

### Neden AI Passport Pro?
* **Biyometrik Uyum:** Pasaport ve kimlik standartlarına uygun otomatik hizalama.
* **Akıllı Rötuş:** Yüz hatlarını bozmadan stüdyo ışığı ve renk dengesi sağlama.
* **Hız:** İşlem süreci saniyeler içinde tamamlanır.

---

## ✨ Öne Çıkan Özellikler

| Özellik | Açıklama |
| :--- | :--- |
| 🤖 **Gemini 2.5 Flash** | En gelişmiş AI motoru ile keskin arka plan temizleme ve ışıklandırma. |
| 📷 **Canlı Kamera** | Tarayıcı üzerinden doğrudan çekim ve gerçek zamanlı yüz kılavuz çizgileri. |
| 💡 **Butterfly Lighting** | Sert gölgeleri yok eden profesyonel stüdyo aydınlatma simülasyonu. |
| 🎨 **Renk Yönetimi** | 5500K nötr beyaz dengesi ve doğal cilt tonu koruması. |
| 🔒 **Kimlik Koruma** | Biyometrik veriyi bozmaz; göz, burun ve çene yapısını değiştirmez. |

---

## 🛠 Teknik Mimari

Proje, modern ve performans odaklı bir teknoloji yığını üzerine inşa edilmiştir:

* **Frontend:** React (TypeScript) ile tip güvenli geliştirme.
* **Stil:** Tailwind CSS ile responsive ve şık arayüz.
* **AI Bağlantısı:** `@google/genai` SDK'sı üzerinden doğrudan model etkileşimi.
* **Hizalama:** HTML5 Media Devices API ile kamera kontrolü ve rehber katmanlar.

---

## 🚀 Kurulum

Projeyi kendi yerel ortamınızda çalıştırmak için şu adımları izleyin:

1. **Repoyu klonlayın:**
   ```bash
   git clone [https://github.com/ferhatgol/vesika-ai.git](https://github.com/ferhatgol/vesika-ai.git)
   cd vesika-ai

```

2. **Bağımlılıkları yükleyin:**
```bash
npm install

```


3. **API Anahtarını Tanımlayın:**
`.env` dosyası oluşturun ve Gemini API anahtarınızı ekleyin:
```env
VITE_GEMINI_API_KEY=Sizin_API_Anahtarınız

```


4. **Projeyi Başlatın:**
```bash
npm run dev

```



---

🧠 AI Prompt Mühendisliği

Bu projenin başarısı, Gemini modeline gönderilen özel **Kritik İşleme Talimatları**'nda gizlidir. Model sadece bir "edit" yapmaz; beyaz dengesini ayarlar, arka planı `#FFFFFF` koduna sabitler ve yüzü 3:4 oranında matematiksel olarak ortalar.

---

🤝 Katkıda Bulunma

Geliştirmelere katkıda bulunmak isterseniz bir `Pull Request` açmaktan çekinmeyin! Büyük değişiklikler için önce bir `Issue` açarak neyi değiştirmek istediğinizi tartışalım.

---

📜 Lisans

Bu proje **MIT Lisansı** ile korunmaktadır.

---

*Geliştiren: **Ferhat GÖL** - [LinkedIn](https://www.linkedin.com/in/ferhatgol) / [Web*](https://www.ferhatgol.com)
