import { useLanguage } from "../context/useLanguage";
import { LazyImage } from "../components/LazyImage";
import SEO from "../components/SEO";
import { Breadcrumbs } from "../components/Breadcrumbs";

const yetkinliklerGorseller = [
  "/tr_capabilities_1.png",
  "/hero-saha-muhendisi.jpg",
  "/electrical-redundancy.png",
  "/resim.png",
  "/white-space-installation.png",
  "/akilli-isletim-dcim.jpg",
];

interface YetkinlikMaddesi {
  baslik: string;
  tanim: string;
}

export default function Yetkinlikler() {
  const { t, lang } = useLanguage();

  const maddeler = t.yetkinlikler.maddeler;
  const rows = [];
  for (let i = 0; i < maddeler.length; i += 2) {
    rows.push(maddeler.slice(i, i + 2));
  }

  return (
    <div className="page-container yetkinlikler-page">
      <SEO
        title="Veri Merkezi Yetkinlikleri: Tasarım, İklimlendirme, MEP"
        description="Mimari strüktür, hassas iklimlendirme, kesintisiz güç dağıtımı, beyaz alan kurulumu ve L0-L5 test-devreye alma yetkinliklerimizi inceleyin."
        keywords="veri merkezi yetkinlikleri, iklimlendirme, MEP, beyaz alan kurulumu, kesintisiz güç, L0-L5 test ve devreye alma"
      />
      <Breadcrumbs items={[{ label: lang === "en" ? "Solutions" : "Çözümlerimiz" }]} />
      <h1 className="page-title">{t.yetkinlikler.baslik}</h1>
      <p className="page-subtitle">{t.yetkinlikler.altBaslik}</p>

      {/* Hero Görsel - Datacenter Exterior */}
      <section className="section-block solutions-hero-section mt-large">
        <figure className="solutions-hero-figure">
          <LazyImage
            src="/hero-exterior-v2.jpg"
            alt="CDC Teknoloji - Tamamlanmış modern veri merkezi dış cephesi"
            className="solutions-hero-img"
          />
        </figure>
      </section>

      {/* Two-column split grid rows with alternating background bands */}
      {rows.map((rowItems: YetkinlikMaddesi[], rowIdx: number) => {
        // Top Hero image is Block 1 (White). Row 0 is Block 2 (Grey), Row 1 is Block 3 (White), Row 2 is Block 4 (Grey)
        const isGreyRow = rowIdx === 0 || rowIdx === 2;
        return (
          <section
            key={rowIdx}
            className={`section-block split-grid-row-section ${
              isGreyRow ? "bg-light-band" : "section-white-band"
            }`}
          >
            <div className="split-grid-layout">
              {rowItems.map((item: YetkinlikMaddesi, colIdx: number) => {
                const idx = rowIdx * 2 + colIdx;
                // Mobile: Top Hero (White). idx 0 (Grey), 1 (White), 2 (Grey), 3 (White), 4 (Grey), 5 (Grey)
                const isItemGreyOnMobile = idx % 2 === 0 || idx === maddeler.length - 1;
                return (
                  <div
                    key={idx}
                    className={`split-grid-item ${
                      colIdx === 0 ? "left-item" : "right-item"
                    } ${isItemGreyOnMobile ? "mobile-bg-grey" : "mobile-bg-white"}`}
                  >
                    <h3 className="split-block-title">{item.baslik}</h3>
                    <div className="split-block-image">
                      <LazyImage
                        src={yetkinliklerGorseller[idx]}
                        alt={item.baslik}
                      />
                    </div>
                    <p className="split-block-detail">{item.tanim}</p>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
