import { useEffect, useState } from "react";
import { api } from "../api/client";
import type { Haber } from "../types";
import { useLanguage } from "../context/useLanguage";

export default function Haberler() {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    api.haberler
      .list()
      .then(setHaberler)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">{t.haberler.baslik}</h1>
      <p className="page-subtitle">{t.haberler.altBaslik}</p>
      {loading && <p className="status-msg">{t.haberler.yukleniyor}</p>}
      {error && (
        <p className="status-msg error">
          {t.haberler.hata}: {error}
        </p>
      )}
      {!loading && !error && haberler.length === 0 && (
        <p className="status-msg">{t.haberler.bos}</p>
      )}
      <div className="grid-layout">
        {haberler.map((haber) => (
          <div key={haber.id} className="card">
            {haber.haberResmi && (
              <img
                src={haber.haberResmi}
                alt={haber.haberAdi}
                className="haber-card-img"
              />
            )}
            <h3>{haber.haberAdi}</h3>
            <p>{haber.haberDetayi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
