import { Link, useParams } from "react-router-dom";
import { getCozumBySlug } from "../data/cozumler";

export default function CozumDetay() {
  const { slug } = useParams<{ slug: string }>();
  const cozum = slug ? getCozumBySlug(slug) : undefined;

  if (!cozum) {
    return (
      <div className="page-container">
        <h1 className="page-title">Çözüm bulunamadı</h1>
        <Link to="/cozumler" className="btn-secondary">
          Çözümlere Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/cozumler" className="back-link">
        ← Çözümlerimiz
      </Link>
      <h1 className="page-title">{cozum.baslik}</h1>
      <p className="page-subtitle">{cozum.ozet}</p>

      {cozum.icerik.length > 0 && (
        <section className="section-block">
          <ul className="content-list">
            {cozum.icerik.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {cozum.maddeler && cozum.maddeler.length > 0 && (
        <section className="section-block">
          <ul className="content-list detailed">
            {cozum.maddeler.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
