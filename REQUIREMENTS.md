# E-Ticaret Entegrasyonu — Demo Gereksinimleri

## 1. Amaç

Trendyol, Hepsiburada ve WooCommerce siparişlerini tek merkezde yönetmek; kanal, ürün ve sipariş bazında gerçek net kârı görmek; satış oldukça stokları senkron tutmak ve operasyonel riskleri erkenden bildirmek.

## 2. Kullanıcı Rolleri

- Yönetici: Tüm finansal ve operasyonel veriyi görür, entegrasyonları yönetir.
- Operasyon: Sipariş, kargo, iade ve stok süreçlerini yönetir.
- Finans: Gelir, komisyon, kargo, ürün maliyeti, vergi ve net kâr raporlarını inceler.
- Depo: Stok, kritik stok ve ürün eşleştirme ekranlarını kullanır.

## 3. MVP Modülleri

### Çok Kanallı Sipariş Yönetimi

- Trendyol, Hepsiburada ve WooCommerce siparişlerini tek listede toplama
- Kanal, tarih, durum ve sipariş numarasıyla filtreleme
- Yeni, hazırlanıyor, kargoda, teslim edildi, iptal ve iade durumları
- Sipariş detayı, müşteri, ürün kalemleri, kargo ve tahsilat bilgileri
- Manuel veya otomatik senkronizasyon

### Ürün ve Stok Yönetimi

- Ana ürün/SKU kataloğu
- Pazaryeri ürün kodlarını ana SKU ile eşleştirme
- Depo stoğu, ayrılmış stok ve satılabilir stok ayrımı
- Kanal bazlı stok tamponu
- Kritik stok, stok tükendi ve eşleşmeyen ürün uyarıları
- Satış, iptal ve iade sonrası otomatik stok hareketi

### Kârlılık

- Brüt satış
- İndirim ve kuponlar
- Pazaryeri komisyonu
- Kargo ve hizmet bedelleri
- Ürün maliyeti
- Vergi etkisi
- Sipariş, ürün, kategori ve kanal bazında net kâr ve marj

### Entegrasyon Yönetimi

- Bağlantı durumu ve son başarılı senkron zamanı
- API kimlik bilgilerinin güvenli saklanması
- Hata kaydı, yeniden deneme ve yetki süresi uyarısı
- Her kanal için sipariş, ürün, stok ve fiyat senkron ayarları

### Raporlama ve Uyarılar

- Günlük/haftalık/aylık satış ve net kâr
- Kanal performansı ve karşılaştırma
- En çok satan ve en kârlı ürünler
- Kritik stok, senkronizasyon hatası, geciken sipariş ve negatif marj uyarıları
- CSV/Excel dışa aktarma

## 4. Temel İş Kuralları

- Tekil ürün anahtarı şirket içi SKU’dur; kanal kodları bu SKU’ya bağlanır.
- Satılabilir stok = fiziksel stok - ayrılmış stok - güvenlik tamponu.
- Net kâr = net satış - ürün maliyeti - komisyon - kargo - hizmet bedeli - diğer giderler.
- Webhook desteklenen kanallarda olay bazlı; diğer durumlarda zamanlanmış sorgu ile senkronizasyon yapılır.
- Aynı sipariş ikinci kez içeri alınmaz; işlemler tekrar çalıştırılabilir/idempotent olmalıdır.
- Entegrasyon hataları sipariş kabulünü sessizce durdurmamalı; görünür uyarı ve yeniden deneme kaydı üretmelidir.

## 5. MVP Dışı / Sonraki Faz

- Otomatik fiyatlandırma ve rakip fiyat takibi
- Fatura/e-Fatura entegrasyonu
- Muhasebe/ERP bağlantıları
- Çoklu depo ve satın alma önerileri
- Kargo firması anlaşmaları ve etiket yazdırma
- Gelişmiş talep tahmini

## 6. Teknik ve Operasyonel Beklentiler

- Rol bazlı yetkilendirme, işlem günlüğü ve iki aşamalı doğrulama
- API sırlarının şifreli saklanması; KVKK uyumlu veri yaşam döngüsü
- Kuyruk tabanlı senkronizasyon, hata tekrar denemeleri ve hız limiti yönetimi
- İzlenebilirlik: entegrasyon logları, hata oranı ve senkronizasyon gecikmesi
- Mobil uyumlu web arayüzü
- Günlük yedekleme ve dışa aktarılabilir raporlar

## 7. Demo Kapsamı

Bu prototip; genel bakış, siparişler, stok, kârlılık ve entegrasyonlar arasında gezinmeyi; tarih filtresini, hızlı aramayı, bildirim panelini ve manuel senkronizasyon geri bildirimini örnek verilerle gösterir. Gerçek API bağlantısı veya kalıcı veri tabanı içermez.
