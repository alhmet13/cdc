import { useLanguage } from "../context/useLanguage";
import { LazyImage } from "../components/LazyImage";
import SEO from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

interface CozumlerMadde {
  baslik: string;
  tanim: string;
}

const degerYaratanGorseller = [
  "/lojistik_tesisi.png",
  "/risk-sozlesme-ekip.jpg",
  "/maliyet-deger-muhendisligi.jpg",
  "/zamaninda-devreye-alma.jpg",
  "/kalite-yonetimi-kadin-muhendis.jpg",
  "/bakim-isletme-operasyon-v2.jpg",
];

const isBirligiGorseller = [
  "/tasarim-bim-modelleme.jpg",
  "/satin-alma-teknik-takip.jpg",
  "/danismanlik-ekibi-v2.jpg",
  "/mep-ve-altyapi-muhendisligi.jpg",
  "/kurulum-teslimat-saha.jpg",
  "/testing-commissioning.png",
];

export default function Cozumler() {
  const { t, lang } = useLanguage();

  return (
    <div className="page-container cozumler-page">
      <SEO
        title="Bütüncül Veri Merkezi Çözümleri & EPC Liderliği"
        description="Uçtan uca proje yönetimi, derin MEP uzmanlığı ve 150M+ USD tedarik hacmi ile kesintisiz kritik altyapı çözümleri."
        keywords="veri merkezi çözümleri, Neden Biz, EPC liderliği, MEP uzmanlığı, proje yönetimi, değer mühendisliği"
      />
      <Breadcrumbs items={[{ label: lang === "en" ? "Why CDC" : "Neden CDC" }]} />
      <h1 className="page-title">{t.cozumler.baslik}</h1>
      <p className="page-subtitle">{t.cozumler.altBaslik}</p>

      {/* Hero Görsel - Construction Envelope */}
      <div className="cozumler-hero-banner">
        <LazyImage
          src="/engineering-heritage-double-exposure.png"
          alt="CDC Teknoloji - Veri Merkezi İnşaat Sahası"
          className="cozumler-hero-img"
        />
        <div className="cozumler-hero-overlay">
          <div className="cozumler-hero-text">
            <p>{t.cozumler.heroCaption}</p>
          </div>
        </div>
      </div>

      {/* Değer Önerisi - Açık Gri Arka Plan */}
      <section className="section-block bg-light-band mt-large">
        <h2 className="section-title mb-large">
          {t.cozumler.degerOnerisi.baslik}
        </h2>
        <div className="deger-onerisi-hero-wrapper mb-large">
          <LazyImage
            src="/hero-saha-ekibi.jpg"
            alt="CDC Teknoloji - Bütüncül Uzmanlıkla Kritik Altyapı Çözümleri"
            className="deger-onerisi-hero-img"
          />
        </div>
        <div className="grid-layout three-col gap-medium">
          {t.cozumler.degerOnerisi.maddeler.map(
            (item: CozumlerMadde, idx: number) => (
              <div key={idx} className="solutions-white-card">
                <h3>{item.baslik}</h3>
                <p>{item.tanim}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Değer Yaratan Yaklaşımlarımız - Beyaz Arka Plan */}
      <section className="section-block mt-large">
        <h2 className="section-title mb-large">
          {t.cozumler.degerYaratanYaklasimlar.baslik}
        </h2>
        <div className="grid-layout three-col gap-medium">
          {t.cozumler.degerYaratanYaklasimlar.maddeler.map(
            (item: CozumlerMadde, idx: number) => (
              <div key={idx} className="solutions-white-card">
                <div className="solutions-card-img-wrapper">
                  <LazyImage
                    src={degerYaratanGorseller[idx]}
                    alt={item.baslik}
                    className="solutions-card-img"
                  />
                </div>
                <h3>{item.baslik}</h3>
                <p>{item.tanim}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Tek Noktadan İş Birliği - Açık Gri Arka Plan */}
      <section className="section-block bg-light-band mt-large">
        <h2 className="section-title mb-large">
          {t.cozumler.tekNoktadanIsBirligi.baslik}
        </h2>
        <div className="grid-layout three-col gap-medium">
          {t.cozumler.tekNoktadanIsBirligi.maddeler.map(
            (item: CozumlerMadde, idx: number) => (
              <div key={idx} className="solutions-coop-card">
                <div className="solutions-card-img-wrapper">
                  <LazyImage
                    src={isBirligiGorseller[idx]}
                    alt={item.baslik}
                    className="solutions-card-img"
                  />
                </div>
                <div className="solutions-coop-content">
                  <h3>{item.baslik}</h3>
                  <p>{item.tanim}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Teknik Kadro Yetkinliği - Açık Gri Arka Plan */}
      <section className="section-block bg-light-band mt-large">
        <h2 className="section-title mb-medium">
          {t.cozumler.ekstraBilgiler[0].baslik}
        </h2>
        <p
          className="section-lead mb-large"
          style={{
            fontSize: "1.1rem",
            color: "#475569",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}
        >
          {t.cozumler.ekstraBilgiler[0].tanim}
        </p>

        {/* Kadro Görseli */}
        <div className="cozumler-kadro-image-wrapper mb-large">
          <LazyImage
            src="/muhendislik-kadromuz.jpg"
            alt="CDC Teknoloji Seçkin Mühendislik Kadrosu"
            className="cozumler-kadro-img"
          />
        </div>

        {/* Toplam Çalışan & Departman Detay Kartı */}
        <div className="solutions-kadro-container">
          <h2 className="section-title mb-large">{t.cozumler.kadro.toplam}</h2>
          <div className="grid-layout three-col gap-medium">
            {t.cozumler.kadro.liste.map((member: string, idx: number) => {
              // Parse title, stats, and experience dynamically
              const dashIndex = member.indexOf(" — ");
              let title = member;
              let rest = "";
              if (dashIndex !== -1) {
                title = member.substring(0, dashIndex).trim();
                rest = member.substring(dashIndex + 3).trim();
              }

              const parts = rest ? rest.split(",").map((p) => p.trim()) : [];
              let exp = "";
              let fieldStaff = "";
              const stats: { number: string; label: string }[] = [];

              parts.forEach((part) => {
                const clean = part.replace(/\.$/, "").trim();
                const cleanLower = clean.toLowerCase();

                if (
                  cleanLower.includes("ortalama") ||
                  cleanLower.includes("average")
                ) {
                  exp = clean;
                } else if (
                  cleanLower.includes("saha") ||
                  cleanLower.includes("field")
                ) {
                  fieldStaff = clean;
                } else {
                  const match = clean.match(/^([\d+]+\s*\+?)\s*(.*)$/);
                  if (match) {
                    stats.push({
                      number: match[1].trim(),
                      label: match[2].trim(),
                    });
                  } else {
                    stats.push({ number: "", label: clean });
                  }
                }
              });

              return (
                <div key={idx} className="solutions-kadro-grid-card">
                  <h4 className="solutions-kadro-card-title">{title}</h4>
                  <div className="solutions-kadro-stats-container">
                    {stats.map((st, sIdx) => (
                      <div key={sIdx} className="solutions-kadro-stat-badge">
                        <span className="solutions-kadro-stat-number">
                          {st.number}
                        </span>
                        <span className="solutions-kadro-stat-label">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  {(exp || fieldStaff) && (
                    <div className="solutions-kadro-exp-tag">
                      {[exp, fieldStaff]
                        .filter(Boolean)
                        .join(lang === "tr" ? " Ve " : " And ")}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
