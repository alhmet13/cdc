export interface Proje {
  id: string;
  projeAdi: string;
  projeDetayi?: string | null;
  projeResmi?: string | null;
  beyazAlan?: string | null;
  sertifikasyon?: string | null;
  itGucu?: string | null;
  toplamKuruluGuc?: string | null;
  pue?: string | null;
  projeSuresi?: string | null;
  toplamInsaatAlani?: string | null;
  durum?: string | null;
  createdAt: string;
}

export interface Haber {
  id: string;
  haberAdi: string;
  haberDetayi: string;
  haberResmi: string;
  createdAt: string;
}

export interface Cozum {
  slug: string;
  baslik: string;
  ozet: string;
  icerik: string[];
  maddeler?: string[];
}

export type ProjeFormData = Omit<Proje, "id" | "createdAt">;

export type HaberFormData = Omit<Haber, "id" | "createdAt">;
