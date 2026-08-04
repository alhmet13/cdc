import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

interface AnasayfaMadde {
  baslik: string;
  tanim: string;
}

const serviceImages = [
  "/tasarim-muhendislik.jpg",
  "/insaat.jpg",
  "/mep-ve-altyapi-muhendisligi.jpg",
  "/beyaz-alan-devreye-alma.jpg",
  "/isletme-donanim-temini.jpg",
];

export default function Anasayfa() {
  const { t } = useLanguage();

  return (
    <div className="home-page">
      {/* Hero Section - Devasa Banner */}
      <section className="main-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{t.anasayfa.baslik}</h1>
            <p className="hero-subtext">{t.anasayfa.aciklama}</p>
            <div className="hero-actions">
              <Link to="/cozumler" className="btn-primary">
                {t.anasayfa.ctaHizmetler}
              </Link>
              <Link to="/projeler" className="btn-secondary">
                {t.anasayfa.ctaProjeler}
              </Link>
              <Link to="/iletisim" className="btn-outline">
                {t.anasayfa.ctaIletisim}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Sayısal Göstergeler */}
      <section className="section-global stats-section">
        <div className="global-container">
          <div className="stats-grid three-col">
            <div className="stat-card">
              <span className="stat-card-value">5</span>
              <span className="stat-card-desc">
                {t.anasayfa.stats.aktifProje}
              </span>
            </div>
            <div className="stat-card">
              <span className="stat-card-value">~20 MW+</span>
              <span className="stat-card-desc">{t.anasayfa.stats.itGucu}</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-value">Tier-III & LEED</span>
              <span className="stat-card-desc">
                {t.anasayfa.stats.standartlar}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Neden CDC Teknoloji? */}
      <section className="section-global why-us-section bg-light">
        <div className="global-container why-us-container">
          <div className="why-us-header">
            <span className="why-us-subtitle">LİDERLİK & GÜVENCE</span>
            <h2 className="why-us-title">{t.anasayfa.nedenCdc.baslik}</h2>
          </div>
          <div className="why-us-main-layout">
            {/* Sol Taraf: 2x2 Numaralandırılmış Kart Grid'i */}
            <div className="why-us-grid">
              {t.anasayfa.nedenCdc.maddeler.map(
                (item: AnasayfaMadde, idx: number) => (
                  <div key={idx} className="card why-us-card">
                    <div className="why-us-number">0{idx + 1}</div>
                    <h3>{item.baslik}</h3>
                    <p>{item.tanim}</p>
                  </div>
                ),
              )}
            </div>
            {/* Sağ Taraf: Kartlarla Aynı Yükseklikte Görsel */}
            <div className="why-us-image-side">
              <div className="why-us-image-wrapper">
                <img
                  src="/data_center_engineer_with_logo.png"
                  alt="CDC Teknoloji Veri Merkezi Mühendisi"
                />
                <div className="image-overlay-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary Section - Veri Merkezi Çözümlerimiz */}
      <section className="section-global services-summary-section">
        <div className="global-container services-summary-container">
          {/* Başlık - En üstte, Neden CDC Teknoloji gibi kırmızı çizgili */}
          <div className="services-summary-header">
            <h2>{t.anasayfa.hizmetAlanlari.baslik}</h2>
          </div>
          {/* Kartlar - Yan yana 5 tane */}
          <div className="services-summary-grid-block">
            {t.anasayfa.hizmetAlanlari.maddeler.map(
              (item: AnasayfaMadde, idx: number) => (
                <div key={idx} className="card services-summary-card">
                  <div className="services-summary-card-image">
                    <img src={serviceImages[idx]} alt={item.baslik} />
                  </div>
                  <div className="services-summary-card-content">
                    <h3>{item.baslik}</h3>
                    <p>{item.tanim}</p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Projects Summary Section - Projelerimiz Özet */}
      <section className="section-global projects-summary-section bg-light">
        <div className="global-container">
          <div className="projects-summary-header">
            <h2 className="section-title">
              {t.anasayfa.projelerSummary.baslik}
            </h2>
            <p className="section-lead mt-medium">
              {t.anasayfa.projelerSummary.aciklama}
            </p>
          </div>
          <div className="projects-showcase-container mt-large">
            <img
              src="/projelerimiz-koleksiyon.jpg"
              alt="Projelerimiz Koleksiyon"
              className="projects-showcase-img"
            />
          </div>
          <div className="projects-summary-action text-center mt-large">
            <Link to="/projeler" className="btn-secondary">
              {t.anasayfa.projelerSummary.link}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
