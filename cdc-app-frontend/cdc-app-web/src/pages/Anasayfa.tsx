import { Link } from "react-router-dom";

export default function Anasayfa() {
  return (
    <>
      <section className="main-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Dijital Vatan'ın Temelini Biz Atıyoruz</h1>
            <Link to="/hakkimizda" className="btn-primary">
              Devamı
            </Link>
          </div>
        </div>
      </section>

      <section className="section-global">
        <div className="global-container">
          <div className="global-text-side">
            <h2>CDC Teknoloji — Veri Merkezi Çözümleri</h2>
            <p>
              Veri merkezi kurulumunda uçtan uca uzmanlık. Tasarım, inşaat, elektrik-mekanik
              altyapı, beyaz alan kurulumu ve devreye almadan işletmeye kadar tüm süreci tek
              çatı altında yöneten, Türkiye'nin anahtar teslim veri merkezi teknoloji
              şirketidir.
            </p>
            <div className="hero-stats">
              <div className="stat-pill">
                <strong>5</strong> Aktif Proje
              </div>
              <div className="stat-pill">
                <strong>~20 MW+</strong> Toplam Güç
              </div>
              <div className="stat-pill">
                <strong>Tier-III & LEED</strong> Standartları
              </div>
            </div>
            <Link to="/cozumler" className="btn-secondary">
              Çözümlerimiz
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
