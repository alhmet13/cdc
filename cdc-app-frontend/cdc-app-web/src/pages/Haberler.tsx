import { useEffect, useState } from "react";
import { api } from "../api/client";
import type { Haber } from "../types";

export default function Haberler() {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.haberler
      .list()
      .then(setHaberler)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Haberler</h1>
      <p className="page-subtitle">CDC Teknoloji'den güncel haberler.</p>

      {loading && <p className="status-msg">Yükleniyor...</p>}
      {error && <p className="status-msg error">Hata: {error}</p>}
      {!loading && !error && haberler.length === 0 && (
        <p className="status-msg">Henüz haber eklenmemiş.</p>
      )}

      <div className="grid-layout">
        {haberler.map((haber) => (
          <div key={haber.id} className="card">
            {haber.haberResmi && (
              <img src={haber.haberResmi} alt={haber.haberAdi} className="haber-card-img" />
            )}
            <h3>{haber.haberAdi}</h3>
            <p>{haber.haberDetayi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
