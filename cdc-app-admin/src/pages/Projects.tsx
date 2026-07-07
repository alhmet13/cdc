import { useEffect, useState, type FormEvent } from "react";
import { api } from "../api/client";
import type { Proje } from "../types";

const emptyForm = {
  projeAdi: "",
  projeDetayi: "",
  projeResmi: "",
  beyazAlan: "",
  sertifikasyon: "",
  itGucu: "",
  toplamKuruluGuc: "",
  pue: "",
  projeSuresi: "",
  toplamInsaatAlani: "",
  durum: "",
};

export default function Projects() {
  const [projects, setProjects] = useState<Proje[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.projeler
      .list()
      .then(setProjects)
      .catch((e) => setMessage({ type: "error", text: e.message }))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);

    try {
      if (editingId) {
        // Düzenleme modunda filtreleme yapma, tüm alanları gönder
        await api.projeler.update(editingId, form);
        setMessage({ type: "success", text: "Proje başarıyla güncellendi." });
      } else {
        // Sadece yeni eklerken boşları çıkar
        const payload = Object.fromEntries(
          Object.entries(form).filter(([, v]) => v.trim() !== ""),
        );
        await api.projeler.create(payload);
        setMessage({ type: "success", text: "Proje başarıyla eklendi." });
      }
      setForm(emptyForm);
      setEditingId(null);
      load();
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err instanceof Error ? err.message : "İşlem sırasında hata oluştu",
      });
    }
  };

  const handleEdit = (proje: Proje) => {
    setEditingId(proje.id);
    setForm({
      projeAdi: proje.projeAdi ?? "",
      projeDetayi: proje.projeDetayi ?? "",
      projeResmi: proje.projeResmi ?? "",
      beyazAlan: proje.beyazAlan ?? "",
      sertifikasyon: proje.sertifikasyon ?? "",
      itGucu: proje.itGucu ?? "",
      toplamKuruluGuc: proje.toplamKuruluGuc ?? "",
      pue: proje.pue ?? "",
      projeSuresi: proje.projeSuresi ?? "",
      toplamInsaatAlani: proje.toplamInsaatAlani ?? "",
      durum: proje.durum ?? "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;
    try {
      await api.projeler.delete(id);
      setMessage({ type: "success", text: "Proje başarıyla silindi." });
      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }
      load();
    } catch (err) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Silme hatası oluştu",
      });
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Projeler</h1>
          <p className="page-subtitle">
            CDC projelerini buradan ekleyebilir veya güncelleyebilirsiniz.
          </p>
        </div>
      </div>

      {message && (
        <div className={`alert alert-${message.type}`}>{message.text}</div>
      )}

      <div className="form-card">
        <h3 style={{ marginBottom: "20px", fontFamily: "var(--font-display)" }}>
          {editingId ? "Projeyi Düzenle" : "Yeni Proje Ekle"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Proje Adı *</label>
              <input
                className="form-control"
                value={form.projeAdi}
                onChange={(e) => setForm({ ...form, projeAdi: e.target.value })}
                required
                placeholder="Ör: Gebze Veri Merkezi"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Görsel URL</label>
              <input
                className="form-control"
                value={form.projeResmi}
                onChange={(e) =>
                  setForm({ ...form, projeResmi: e.target.value })
                }
                placeholder="Ör: /assets/proje1.jpg veya https://..."
              />
            </div>
            <div className="form-group form-full-width">
              <label className="form-label">Açıklama / Detay</label>
              <textarea
                className="form-control"
                value={form.projeDetayi}
                onChange={(e) =>
                  setForm({ ...form, projeDetayi: e.target.value })
                }
                placeholder="Projenin detaylı açıklaması..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">Beyaz Alan (m²)</label>
              <input
                className="form-control"
                value={form.beyazAlan}
                onChange={(e) =>
                  setForm({ ...form, beyazAlan: e.target.value })
                }
                placeholder="Ör: 4.500 m²"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Sertifikasyon</label>
              <input
                className="form-control"
                value={form.sertifikasyon}
                onChange={(e) =>
                  setForm({ ...form, sertifikasyon: e.target.value })
                }
                placeholder="Ör: Tier III Design & Facility"
              />
            </div>
            <div className="form-group">
              <label className="form-label">IT Gücü</label>
              <input
                className="form-control"
                value={form.itGucu}
                onChange={(e) => setForm({ ...form, itGucu: e.target.value })}
                placeholder="Ör: 10 MW"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Toplam Kurulu Güç</label>
              <input
                className="form-control"
                value={form.toplamKuruluGuc}
                onChange={(e) =>
                  setForm({ ...form, toplamKuruluGuc: e.target.value })
                }
                placeholder="Ör: 18 MVA"
              />
            </div>
            <div className="form-group">
              <label className="form-label">PUE</label>
              <input
                className="form-control"
                value={form.pue}
                onChange={(e) => setForm({ ...form, pue: e.target.value })}
                placeholder="Ör: 1.25"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Proje Süresi</label>
              <input
                className="form-control"
                value={form.projeSuresi}
                onChange={(e) =>
                  setForm({ ...form, projeSuresi: e.target.value })
                }
                placeholder="Ör: 14 Ay"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Toplam İnşaat Alanı</label>
              <input
                className="form-control"
                value={form.toplamInsaatAlani}
                onChange={(e) =>
                  setForm({ ...form, toplamInsaatAlani: e.target.value })
                }
                placeholder="Ör: 12.000 m²"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Durum</label>
              <input
                className="form-control"
                value={form.durum}
                onChange={(e) => setForm({ ...form, durum: e.target.value })}
                placeholder="Ör: Tamamlandı veya Aktif"
              />
            </div>
          </div>

          <div className="form-buttons">
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setEditingId(null);
                  setForm(emptyForm);
                }}
              >
                İptal
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {editingId ? "Kaydet" : "Ekle"}
            </button>
          </div>
        </form>
      </div>

      <div className="card-table-wrap">
        <div className="table-header">
          <span className="table-header-title">Mevcut Projeler</span>
        </div>
        <div className="table-container">
          {loading ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "var(--text-secondary)",
              }}
            >
              Yükleniyor...
            </div>
          ) : projects.length === 0 ? (
            <div
              style={{
                padding: "30px",
                textAlign: "center",
                color: "var(--text-secondary)",
              }}
            >
              Kayıtlı proje bulunamadı.
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Görsel</th>
                  <th>Proje Adı</th>
                  <th>IT Gücü</th>
                  <th>Durum</th>
                  <th style={{ width: "150px" }}>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.id}>
                    <td>
                      {p.projeResmi ? (
                        <img
                          className="cell-image"
                          src={p.projeResmi}
                          alt={p.projeAdi}
                        />
                      ) : (
                        <div
                          className="cell-image"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.8rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          Yok
                        </div>
                      )}
                    </td>
                    <td style={{ fontWeight: 600 }}>{p.projeAdi}</td>
                    <td>{p.itGucu ?? "—"}</td>
                    <td>
                      <span
                        className={`cell-badge ${p.durum?.toLowerCase().includes("tamam") ? "badge-success" : "badge-warning"}`}
                      >
                        {p.durum ?? "Belirtilmemiş"}
                      </span>
                    </td>
                    <td>
                      <div className="table-actions">
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleEdit(p)}
                        >
                          Düzenle
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(p.id)}
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
