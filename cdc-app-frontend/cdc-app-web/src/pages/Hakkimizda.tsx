import { useLanguage } from "../context/useLanguage";

const timelineTR = [
  {
    year: "1959",
    text: "Kuruluş — Okul, hastane, konut, otel ve AVM'lerden köprü, baraj ve arıtma tesislerine uzanan kapsamlı inşaat portföyüyle sektöre giriş.",
  },
  {
    year: "1975",
    text: "Uluslararası Genişleme: Libya & Suudi Arabistan — Büyük ölçekli alt ve üst yapı ihaleleri.",
  },
  {
    year: "1990",
    text: "Proje Geliştirme & İşletme Dönemi — Tasarım, yatırım, inşaat, işletme ve pazarlamanın tamamını kapsayan entegre model.",
  },
  {
    year: "1994",
    text: "Büyük İstanbul Otogarı — Türkiye'nin ve Avrupa'nın en büyük otogarı.",
  },
  { year: "1995", text: "The Plaza Hotel — Turizm & Otelcilik yatırımı." },
  { year: "2005", text: "Avrupa'nın En Büyük AVM'si." },
  {
    year: "2020",
    text: "Balkanlardaki en büyük Türk özel sektör yatırımı — 280.000 m².",
  },
  {
    year: "2023",
    text: "TOKİ Deprem Konutları — Adıyaman ve Hatay, 7500+ bağımsız bölüm.",
  },
  { year: "2024", text: "İFM Faz-3 Projesi — 100.000+ m²." },
  {
    year: "2025",
    text: "Kritik Altyapı & Veri Merkezi — Tier-3 ve LEED sertifikalı veri merkezi projeleri.",
  },
];

const timelineEN = [
  {
    year: "1959",
    text: "Foundation — Market entry with a broad construction portfolio spanning schools, hospitals, residences, hotels, malls, bridges, dams and treatment plants.",
  },
  {
    year: "1975",
    text: "International Expansion: Libya & Saudi Arabia — Large-scale infrastructure tenders.",
  },
  {
    year: "1990",
    text: "Project Development & Operations Era — Integrated model covering design, investment, construction, operations and marketing.",
  },
  {
    year: "1994",
    text: "Grand Istanbul Bus Terminal — The largest bus terminal in Turkey and Europe.",
  },
  { year: "1995", text: "The Plaza Hotel — Tourism & hospitality investment." },
  { year: "2005", text: "Europe's Largest Shopping Mall." },
  {
    year: "2020",
    text: "Largest Turkish private sector investment in the Balkans — 280,000 m².",
  },
  {
    year: "2023",
    text: "TOKI Earthquake Housing — Adıyaman and Hatay, 7,500+ independent units.",
  },
  { year: "2024", text: "IFM Phase-3 Project — 100,000+ m²." },
  {
    year: "2025",
    text: "Critical Infrastructure & Data Centers — Tier-3 and LEED certified data center projects.",
  },
];

const cevahirListTR = [
  [
    "1959 yılında Türkiye'de kurulmuş uluslararası inşaat ve yatırım geliştirme grubu",
    "60+ yıllık proje geliştirme ve taahhüt deneyimi",
    "Türkiye, Balkanlar, Orta Doğu ve Afrika'da geniş proje portföyü",
    "Hastanelerden barajlara, dev AVM'lerden veri merkezlerine uzanan mühendislik kabiliyeti",
    "Turn-key (uçtan uca) çözüm sağlayıcı",
  ],
  [
    "15.000 kişiye ulaşan operasyonel kapasite, 900+ teknik uzman",
    "65 yılı aşkın deneyimle uçtan uca kritik altyapı çözümleri",
    "Türkiye, Libya, Suudi Arabistan, Balkanlar'da 50+ büyük proje",
    "Hyperscaler, bankacılık ve telekomünikasyon altyapılarında referans projeler",
    "Kendi projelerini işletme deneyimi (The Plaza Hotel, Avrupa'nın en büyük AVM'si)",
  ],
];

const cevahirListEN = [
  [
    "International construction and investment development group founded in Turkey in 1959",
    "60+ years of project development and contracting experience",
    "Broad project portfolio across Turkey, the Balkans, the Middle East and Africa",
    "Engineering capability spanning hospitals, dams, mega malls and data centers",
    "Turnkey (end-to-end) solution provider",
  ],
  [
    "Operational capacity of up to 15,000 people, 900+ technical experts",
    "End-to-end critical infrastructure solutions with 65+ years of experience",
    "50+ major projects in Turkey, Libya, Saudi Arabia and the Balkans",
    "Reference projects in hyperscaler, banking and telecoms infrastructure",
    "Experience operating own projects (The Plaza Hotel, Europe's largest shopping mall)",
  ],
];

export default function Hakkimizda() {
  const { lang, t } = useLanguage();

  const timeline = lang === "tr" ? timelineTR : timelineEN;
  const cevahirList = lang === "tr" ? cevahirListTR : cevahirListEN;

  return (
    <div className="page-container hakkimizda-page">
      <h1 className="page-title">{t.hakkimizda.baslik}</h1>

      <section className="section-block">
        <h2>{t.hakkimizda.bizKimiz}</h2>
        <div className="stats-grid four-col">
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.kurulus}</span>
            <span className="stat-card-value">1959</span>
            <span className="stat-card-desc">
              {t.hakkimizda.kurulusAciklama}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.uluslararasi}</span>
            <span className="stat-card-value">
              4+ {lang === "tr" ? "Ülke" : "Countries"}
            </span>
            <span className="stat-card-desc">
              {t.hakkimizda.uluslararasiAciklama}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">{t.hakkimizda.calisan}</span>
            <span className="stat-card-value">~15.000</span>
            <span className="stat-card-desc">
              {t.hakkimizda.calisanAciklama}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-card-label">
              {t.hakkimizda.anahtarTeslim}
            </span>
            <span className="stat-card-value">
              {lang === "tr" ? "Uçtan Uca" : "End-to-End"}
            </span>
            <span className="stat-card-desc">
              {t.hakkimizda.anahtarTeslimAciklama}
            </span>
          </div>
        </div>
        <p className="section-lead">{t.hakkimizda.sectionLead}</p>
      </section>

      <section className="section-block">
        <h2>{t.hakkimizda.tarihce}</h2>
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

      <section className="section-block">
        <h2>{t.hakkimizda.cevahir}</h2>
        <p className="section-lead">{t.hakkimizda.cevahirBaslik}</p>
        <div className="two-col-text">
          {cevahirList.map((col, i) => (
            <ul key={i} className="content-list">
              {col.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>{t.hakkimizda.rakamlar}</h2>
        <p className="quote-text">{t.hakkimizda.alinti}</p>
        <div className="stats-grid four-col">
          <div className="stat-card highlight">
            <span className="stat-card-value">100+</span>
            <span className="stat-card-desc">
              {t.hakkimizda.tamamlananProje}
            </span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">6M+ m²</span>
            <span className="stat-card-desc">{t.hakkimizda.projeAlani}</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">3</span>
            <span className="stat-card-desc">{t.hakkimizda.kita}</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-card-value">6</span>
            <span className="stat-card-desc">{t.hakkimizda.aktifVeri}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
