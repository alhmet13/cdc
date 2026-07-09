import { useEffect, useState } from "react";
import { api } from "../api/client";
import type { Proje } from "../types";
import { useLanguage } from "../context/useLanguage";
import type { Translations } from "../i18n/tr";

function ProjeKart({ proje, t }: { proje: Proje; t: Translations }) {
  const specs = [
    { label: t.projeler.beyazAlan, value: proje.beyazAlan },
    { label: t.projeler.sertifikasyon, value: proje.sertifikasyon },
    { label: t.projeler.itGucu, value: proje.itGucu },
    { label: t.projeler.toplamKuruluGuc, value: proje.toplamKuruluGuc },
    { label: t.projeler.pue, value: proje.pue },
    { label: t.projeler.projeSuresi, value: proje.projeSuresi },
    { label: t.projeler.insaatAlani, value: proje.toplamInsaatAlani },
  ].filter((s) => s.value);

  return (
    <div className="card proje-card">
      {proje.projeResmi && (
        <img
          src={proje.projeResmi}
          alt={proje.projeAdi}
          className="proje-card-img"
        />
      )}
      <div className="proje-card-body">
        <div className="proje-card-header">
          <h3>{proje.projeAdi}</h3>
          {proje.durum && (
            <span
              className={`durum-badge ${
                ["tamamlandı", "zamanında teslim"].some((k) =>
                  proje.durum!.toLowerCase().includes(k),
                )
                  ? "durum-yesil"
                  : "durum-sari"
              }`}
            >
              {proje.durum}
            </span>
          )}
        </div>
        {proje.projeDetayi && <p className="proje-desc">{proje.projeDetayi}</p>}
        {specs.length > 0 && (
          <dl className="spec-list">
            {specs.map((s) => (
              <div key={s.label} className="spec-row">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

export default function Projeler() {
  const [projeler, setProjeler] = useState<Proje[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    api.projeler
      .list()
      .then(setProjeler)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">{t.projeler.baslik}</h1>
      <p className="page-subtitle">{t.projeler.altBaslik}</p>
      {loading && <p className="status-msg">{t.projeler.yukleniyor}</p>}
      {error && (
        <p className="status-msg error">
          {t.projeler.hata}: {error}
        </p>
      )}
      {!loading && !error && projeler.length === 0 && (
        <p className="status-msg">{t.projeler.bos}</p>
      )}
      <div className="grid-layout">
        {projeler.map((proje) => (
          <ProjeKart key={proje.id} proje={proje} t={t} />
        ))}
      </div>
    </div>
  );
}
