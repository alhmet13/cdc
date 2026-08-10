import { useLanguage } from "../context/useLanguage";
import { LazyImage } from "../components/LazyImage";
import SEO from "../components/SEO";

export default function Hakkimizda() {
  const { t } = useLanguage();

  return (
    <div className="page-container hakkimizda-page">
      <SEO
        title="Hakkımızda - Mühendislik Mirası & Sektörel Uzmanlık"
        description="Veri merkezi sektöründe çeyrek asrı aşan mühendislik tecrübesi, Uptime ATD sertifikalı uzman kadromuz ve kurumsal vizyonumuz hakkında bilgi edinin."
        keywords="hakkımızda, CDC Teknoloji, Cevahir Yapı, mühendislik mirası, Uptime ATD, veri merkezi uzmanlığı"
      />
      {/* Sayfa Başlığı ve Açıklaması */}
      <h1 className="page-title">{t.hakkimizda.baslik}</h1>
      <p className="page-subtitle">{t.hakkimizda.altBaslik}</p>

      {/* Heritage Timeline Visual Block */}
      <section className="section-block heritage-timeline-section mt-large">
        <figure className="heritage-timeline-figure">
          <LazyImage
            className="heritage-timeline-img"
            src="/heritage-timeline-1.png"
            alt={
              t.hakkimizda.heritageTimelineAlt ||
              "Cevahir Yapı 65 Yıllık Mühendislik Dönüşümü"
            }
          />
          <figcaption className="heritage-timeline-caption">
            <span className="heritage-year-tag">
              {t.hakkimizda.heritageTimelineTag || "1959'dan bugüne"}
            </span>
            <span className="heritage-caption-text">
              {t.hakkimizda.heritageTimelineText ||
                "Aynı mühendislik disiplini, aynı güven — bugün veri merkezlerinin kritik altyapısında"}
            </span>
          </figcaption>
        </figure>
      </section>

      {/* 3. Resim: Tanıtım Yazısı ve Uçtan Uca Uzmanlık Görsel Bloğu */}
      <section className="section-block bg-light-band mt-large">
        <div className="about-intro-flex">
          <div className="about-intro-container max-width-text">
            <p className="about-lead">{t.hakkimizda.aciklama2}</p>
          </div>
          <figure className="about-intro-visual">
            <LazyImage
              src="/end-to-end-expertise.png"
              alt={
                t.hakkimizda.endToEndAlt ||
                "Planlamadan işletmeye uçtan uca mühendislik yetkinliği"
              }
            />
            <figcaption>
              {t.hakkimizda.endToEndCaption ||
                "Planlamadan işletmeye: uçtan uca mühendislik yetkinliği"}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Rakamlarla Cevahir */}
      <section className="section-block mt-large">
        <h2 className="section-title mb-large">{t.hakkimizda.rakamlar.baslik}</h2>
        <div className="stats-grid four-col">
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.rakamlar.calisan}</span>
            <span className="stat-card-value">~15.000</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.rakamlar.projeler}</span>
            <span className="stat-card-value">100+</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.rakamlar.alan}</span>
            <span className="stat-card-value">6M+ m²</span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.rakamlar.veriMerkezi}</span>
            <span className="stat-card-value">5</span>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon - Kırmızı sol çerçeveli, temiz beyaz kartlar */}
      <section className="section-block bg-light-band mt-large">
        <div className="grid-layout two-col gap-medium">
          <div className="card about-card-modern">
            <h2>{t.hakkimizda.misyon.baslik}</h2>
            <h3>{t.hakkimizda.misyon.vurgu}</h3>
            <p>{t.hakkimizda.misyon.aciklama}</p>
          </div>
          <div className="card about-card-modern">
            <h2>{t.hakkimizda.vizyon.baslik}</h2>
            <h3>{t.hakkimizda.vizyon.vurgu}</h3>
            <p>{t.hakkimizda.vizyon.aciklama}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
