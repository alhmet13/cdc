# Canlı Ortamda (Production) Görsel Yükleme Mimarisi Analizi

Mevcut durumda admin panelinden yüklenen görseller, API sunucusunun içindeki bir klasöre (yerel diske) kaydediliyor ve Docker kullanarak bu klasör bir Volume (`cdc-uploads`) ile kalıcı hale getiriliyor.

İleride sistemi canlıya (production) aldığınızda nasıl bir sunucu mimarisi seçeceğinize bağlı olarak bazı durumlar ortaya çıkabilir:

## Olası Senaryolar ve Sorunlar

### 1. Tek Sunuculu Yapı (VPS / Dedicated Server + Docker)
Eğer sistemi tek bir sanal sunucuya (örneğin DigitalOcean, AWS EC2, Hetzner) kurup `docker-compose up` ile çalıştırırsanız:
- **Sorun Olmaz:** Şu anki yapımız (Docker Volume) bu senaryo için mükemmel çalışır. Konteynerler yeniden başlasa bile görseller silinmez.
- **Dikkat Edilmesi Gereken:** Sunucunun disk alanı dolabilir. Düzenli sunucu yedeği (snapshot) almanız gerekir.

### 2. Çok Sunuculu Yapı (Load Balancer + Birden Fazla API Instance / Kubernetes)
Eğer yüksek trafik beklentiniz varsa ve API'yi birden fazla sunucuda çalıştırırsanız (yatay ölçekleme):
- **Büyük Sorun:** Görseli yükleyen istek "Sunucu A"ya giderse, görsel Sunucu A'nın diskine kaydedilir. Web sitesine giren başka bir kullanıcının isteği "Sunucu B"ye yönlendirilirse, Sunucu B kendi diskinde bu görseli bulamayacağı için resim **kırık (404)** görünür.

### 3. Bant Genişliği ve Performans
- Görselleri API üzerinden sunmak, API'ye ekstra yük bindirir. Yüksek trafikli sitelerde bu, API'nin yavaşlamasına sebep olabilir.

---

## Önerilen Çözümler (Canlı Ortam İçin)

İleride sistemi canlıya alırken aşağıdaki iki yöntemden birini seçebilirsiniz:

### Yöntem A: Şu Anki Yapı ile Devam Etmek (En Kolay)
Sistemi tek bir sunucuda barındıracaksanız, şu anki Docker Volume yapısı yeterlidir. Sadece:
- Sunucunun disk kapasitesini takip etmelisiniz.
- Sunucu yedeklemelerini (backup) aktif etmelisiniz.

### Yöntem B: Bulut Depolama (S3) Kullanmak (En Profesyonel ve Ölçeklenebilir)
Eğer sistemi çok daha profesyonel ve ölçeklenebilir bir yapıya taşımak isterseniz (önerilen):
- Görselleri yerel diske kaydetmek yerine **Amazon S3, Cloudflare R2 veya DigitalOcean Spaces** gibi bir bulut depolama servisine yükleyecek şekilde API'yi güncelleyebiliriz.
- **Avantajı:** Sunucu çöksede, silinsede görseller bulutta güvende kalır. Görselleri doğrudan CDN (İçerik Dağıtım Ağı) üzerinden sunacağınız için API sunucunuz yorulmaz ve web sitesi çok daha hızlı açılır.

## Karar / Open Questions
Şu an geliştirme aşamasındayız ve mevcut yapı (yerel disk + Docker Volume) işimizi fazlasıyla görüyor. Ancak canlıya çıkış (deployment) stratejiniz belli olduğunda, eğer çoklu sunucuya geçilecekse API tarafında S3 entegrasyonu kodlanmalıdır.

---

## Genel Canlı Ortam (Production) Kontrol Listesi

Görseller dışında, bu projeyi (Node.js API, React Web, React Admin ve MySQL) canlıya alırken dikkat etmeniz gereken diğer kritik noktalar şunlardır:

### 1. Güvenlik (Security)
- **HTTPS/SSL Sertifikası:** Tüm trafiğin şifrelenmesi şarttır. Nginx veya Traefik gibi bir Reverse Proxy kullanarak Let's Encrypt ile ücretsiz SSL kurmalısınız.
- **Güçlü JWT Secret ve Şifreler:** Geliştirme ortamında kullandığınız basit şifreleri ve JWT_SECRET anahtarlarını, tahmin edilemez karmaşık (rastgele oluşturulmuş) metinlerle değiştirmelisiniz.
- **CORS Ayarları:** API'niz sadece kendi domainlerinizden (örn. `cdc.com.tr` ve `admin.cdc.com.tr`) gelen isteklere yanıt vermelidir.
- **Hata Yönetimi:** Canlı ortamda kullanıcılara sunucu tarafındaki hata detayları (stack trace) gösterilmemelidir. Sadece "Bir hata oluştu" gibi genel mesajlar dönülmelidir.

### 2. Çevresel Değişkenler (Environment Variables)
- **.env Dosyası:** Hiçbir şifre veya kritik anahtar kaynak koda (git) eklenmemelidir. Sunucuda güvenli bir `.env` dosyası oluşturulmalıdır.
- **Production Modu:** Node.js ve React uygulamalarının `NODE_ENV=production` değişkeni ile başlatıldığından emin olunmalıdır. Bu, performansı ciddi şekilde artırır.

### 3. Veritabanı (MySQL)
- **Yedekleme (Backup):** Veritabanı düzenli olarak yedeklenmeli ve sunucu dışında bir yerde saklanmalıdır. (Örn. günlük otomatik yedekleme cron job'ı).
- **Dışa Kapalı Olmalı:** MySQL portu (genelde 3306) dış dünyaya tamamen kapalı olmalı, sadece kendi sunucunuzdan veya uygulamanızdan erişilebilir olmalıdır.

### 4. Performans ve Loglama
- **Reverse Proxy:** React statik dosyalarınızı doğrudan Node.js ile sunmak yerine Nginx üzerinden sunmak, yüklenme hızını çok artırır.
- **Loglama:** Sunucuda oluşan hataları görebilmek için PM2 veya Docker loglarını düzenli tutmalı veya Sentry/Datadog gibi bir hata takip sistemi entegre etmelisiniz.
- **Gzip/Brotli Sıkıştırma:** Web tarafında metin ve kaynak kodlarının sıkıştırılarak gönderilmesi sitenin daha hızlı açılmasını sağlar.

### 5. Sürekli Entegrasyon (CI/CD)
- Manuel olarak sunucuya girip kod çekmek yerine, kodunuzu GitHub/GitLab gibi bir yere yüklediğinizde otomatik olarak test edilip canlıya alınmasını sağlayacak bir otomasyon (Örn. GitHub Actions) kurmak, süreçleri profesyonelleştirir.
