import { cozumler } from "../data/cozumler";
import { useLanguage } from "../context/useLanguage";

export default function Cozumler() {
  const { lang, t } = useLanguage();
  const sol = cozumler.slice(0, 4);
  const sag = cozumler.slice(4, 8);

  return (
    <div className="page-container">
      <h1 className="page-title">{t.cozumler.baslik}</h1>
      <p className="page-subtitle">{t.cozumler.altBaslik}</p>

      <div className="cozumler-grid">
        <div className="cozumler-col">
          {sol.map((cozum) => (
            <div key={cozum.slug} className="cozum-card">
              <h3 className="cozum-card-baslik">
                {lang === "en" && cozum.baslikEn
                  ? cozum.baslikEn
                  : cozum.baslik}
              </h3>
              <img
                // src={cozum.resim}
                alt={cozum.baslik}
                className="cozum-card-resim"
              />
              <p className="cozum-card-ozet">
                {lang === "en" && cozum.ozetEn ? cozum.ozetEn : cozum.ozet}
              </p>
            </div>
          ))}
        </div>
        <div className="cozumler-col">
          {sag.map((cozum) => (
            <div key={cozum.slug} className="cozum-card">
              <h3 className="cozum-card-baslik">
                {lang === "en" && cozum.baslikEn
                  ? cozum.baslikEn
                  : cozum.baslik}
              </h3>
              <img
                // src={cozum.resim}
                alt={cozum.baslik}
                className="cozum-card-resim"
              />
              <p className="cozum-card-ozet">
                {lang === "en" && cozum.ozetEn ? cozum.ozetEn : cozum.ozet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
