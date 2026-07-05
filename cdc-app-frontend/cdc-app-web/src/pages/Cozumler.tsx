import { Link } from "react-router-dom";
import { cozumler } from "../data/cozumler";

export default function Cozumler() {
  return (
    <div className="page-container">
      <h1 className="page-title">Çözümlerimiz</h1>
      <p className="page-subtitle">
        Veri merkezi ihtiyaçlarınız için uçtan uca hizmetler ve disiplinler arası uzmanlık.
      </p>
      <div className="grid-layout">
        {cozumler.map((cozum) => (
          <Link key={cozum.slug} to={`/cozumler/${cozum.slug}`} className="card card-link">
            <h3>{cozum.baslik}</h3>
            <p>{cozum.ozet}</p>
            <span className="card-arrow">Detay →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
