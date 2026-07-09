import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

export default function Anasayfa() {
  const { t } = useLanguage();

  return (
    <>
      <section className="main-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>{t.anasayfa.baslik}</h1>
            <Link to="/hakkimizda" className="btn-primary">
              {t.anasayfa.devami}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-global">
        <div className="global-container">
          <div className="global-text-side">
            <h2>{t.anasayfa.sirketBaslik}</h2>
            <p>{t.anasayfa.sirketAciklama}</p>
            <div className="hero-stats">
              <div className="stat-pill">
                <strong>5</strong> {t.anasayfa.aktifProje}
              </div>
              <div className="stat-pill">
                <strong>~20 MW+</strong> {t.anasayfa.toplamGuc}
              </div>
              <div className="stat-pill">
                <strong>Tier-III & LEED</strong> Standartları
              </div>
            </div>
            <Link to="/cozumler" className="btn-secondary">
              {t.anasayfa.cozumlerimiz}
            </Link>
          </div>
          <div className="global-image-side">
            <img
              src="https://picsum.photos/id/1051/600/350"
              alt="CDC Veri Merkezi"
            />
          </div>
        </div>
      </section>
    </>
  );
}
