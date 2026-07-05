const timeline = [
  { year: "1959", text: "Kuruluş — Okul, hastane, konut, otel ve AVM'lerden köprü, baraj ve arıtma tesislerine uzanan kapsamlı inşaat portföyüyle sektöre giriş.", top: true },
  { year: "1975", text: "Uluslararası Genişleme: Libya & Suudi Arabistan — Büyük ölçekli alt ve üst yapı ihaleleri.", top: false },
  { year: "1990", text: "Proje Geliştirme & İşletme Dönemi — Tasarım, yatırım, inşaat, işletme ve pazarlamanın tamamını kapsayan entegre model.", top: true },
  { year: "1994", text: "Büyük İstanbul Otogarı — Türkiye'nin ve Avrupa'nın en büyük otogarı.", top: false },
  { year: "1995", text: "The Plaza Hotel — Turizm & Otelcilik yatırımı.", top: true },
  { year: "2005", text: "Avrupa'nın En Büyük AVM'si.", top: false },
  { year: "2020", text: "Balkanlardaki en büyük Türk özel sektör yatırımı — 280.000 m².", top: true },
  { year: "2023", text: "TOKİ Deprem Konutları — Adıyaman ve Hatay, 7500+ bağımsız bölüm.", top: false },
  { year: "2024", text: "İFM Faz-3 Projesi — 100.000+ m².", top: true },
  { year: "2025", text: "Kritik Altyapı & Veri Merkezi — Tier-3 ve LEED sertifikalı veri merkezi projeleri.", top: false },
];

export default function Hakkimizda() {
  return (
    <div className="page-container hakkimizda-page">
      <h1 className="page-title">Hakkımızda</h1>

      {/* Slayt 3 — Biz Kimiz */}
      <section className="section-block">
        <h2>Biz Kimiz</h2>
        <div className="stats-grid four-col">
          <div className="stat-card">
            <span className="stat-card-label">Kuruluş Yılı</span>
            <span className="stat-card-value">1959</span>
            <span className="stat-card-desc">65+ yıllık kesintisiz operasyon</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">Uluslararası Varlık</span>
            <span className="stat-card-value">4+ Ülke</span>
            <span className="stat-card-desc">Türkiye, Libya, S. Arabistan, Makedonya</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">Çalışan Sayısı</span>
            <span className="stat-card-value">~15.000</span>
            <span className="stat-card-desc">900+ uzman teknik personel</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">Anahtar Teslim</span>
            <span className="stat-card-value">Uçtan Uca</span>
            <span className="stat-card-desc">
              Planlama → Tasarım → İnşaat → Kurulum → Devreye Alma → İşletme → Pazarlama
            </span>
          </div>
        </div>
        <p className="section-lead">
          Veri Merkezleri, Teknoloji Kampüsleri, Hastaneler, Barajlar, AVM'ler — karmaşık
          mühendislikten kritik altyapılara zamanında ve güvenilir çözümler.
        </p>
      </section>

      {/* Slayt 4 — Tarihçemiz */}
      <section className="section-block">
        <h2>Tarihçemiz</h2>
        <div className="timeline-vertical">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-dot" />
              <div className="timeline-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Slayt 5 — Cevahir Hakkında */}
      <section className="section-block">
        <h2>Cevahir Hakkında</h2>
        <p className="section-lead">
          Karmaşık Mühendislikten Kritik Altyapılara: Cevahir Güvencesi
        </p>
        <div className="two-col-text">
          <ul className="content-list">
            <li>1959 yılında Türkiye'de kurulmuş uluslararası inşaat ve yatırım geliştirme grubu</li>
            <li>60+ yıllık proje geliştirme ve taahhüt deneyimi</li>
            <li>Türkiye, Balkanlar, Orta Doğu ve Afrika'da geniş proje portföyü</li>
            <li>Hastanelerden barajlara, dev AVM'lerden veri merkezlerine uzanan mühendislik kabiliyeti</li>
            <li>Turn-key (uçtan uca) çözüm sağlayıcı</li>
          </ul>
          <ul className="content-list">
            <li>15.000 kişiye ulaşan operasyonel kapasite, 900+ teknik uzman</li>
            <li>65 yılı aşkın deneyimle uçtan uca kritik altyapı çözümleri</li>
            <li>Türkiye, Libya, Suudi Arabistan, Balkanlar'da 50+ büyük proje</li>
            <li>Hyperscaler, bankacılık ve telekomünikasyon altyapılarında referans projeler</li>
            <li>Kendi projelerini işletme deneyimi (The Plaza Hotel, Avrupa'nın en büyük AVM'si)</li>
          </ul>
        </div>
      </section>

      {/* Slayt 6 — Rakamlarla Cevahir */}
      <section className="section-block">
        <h2>Rakamlarla Cevahir</h2>
        <p className="quote-text">"Kalite ve güven, her projemizin temelinde yatar."</p>
        <div className="stats-grid four-col">
          <div className="stat-card highlight">
            <span className="stat-card-value">100+</span>
            <span className="stat-card-desc">Tamamlanan Proje</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">6M+ m²</span>
            <span className="stat-card-desc">Proje Alanı</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">3</span>
            <span className="stat-card-desc">Kıta</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">6</span>
            <span className="stat-card-desc">Aktif Veri Merkezi Projesi</span>
          </div>
        </div>
      </section>
    </div>
  );
}
