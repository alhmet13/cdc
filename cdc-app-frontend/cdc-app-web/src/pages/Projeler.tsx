import { useEffect, useState } from "react";
import { api } from "../api/client";
import type { Proje } from "../types";

function ProjeKart({ proje }: { proje: Proje }) {
  const specs = [
    { label: "Beyaz Alan", value: proje.beyazAlan },
    { label: "Sertifikasyon", value: proje.sertifikasyon },
    { label: "IT Gücü", value: proje.itGucu },
    { label: "Toplam Kurulu Güç", value: proje.toplamKuruluGuc },
    { label: "PUE", value: proje.pue },
    { label: "Proje Süresi", value: proje.projeSuresi },
    { label: "İnşaat Alanı", value: proje.toplamInsaatAlani },
  ].filter((s) => s.value);

  return (
    <div className="card proje-card">
      {proje.projeResmi && (
        <img src={proje.projeResmi} alt={proje.projeAdi} className="proje-card-img" />
      )}
      <div className="proje-card-body">
        <div className="proje-card-header">
          <h3>{proje.projeAdi}</h3>
          {proje.durum && <span className="durum-badge">{proje.durum}</span>}
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

  useEffect(() => {
    api.projeler
      .list()
      .then(setProjeler)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Referanslarımız</h1>
      <p className="page-subtitle">Tamamlanan ve devam eden veri merkezi projelerimiz.</p>

      {loading && <p className="status-msg">Yükleniyor...</p>}
      {error && <p className="status-msg error">Hata: {error}</p>}
      {!loading && !error && projeler.length === 0 && (
        <p className="status-msg">Henüz proje eklenmemiş. Admin panelden ekleyebilirsiniz.</p>
      )}

      <div className="grid-layout">
        {projeler.map((proje) => (
          <ProjeKart key={proje.id} proje={proje} />
        ))}
      </div>
    </div>
  );
}
