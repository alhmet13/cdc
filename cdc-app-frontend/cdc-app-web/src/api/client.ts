import type { Haber, Proje } from "../types";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4101";

async function request<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? "İstek başarısız");
  }

  const text = await res.text();
  if (!text || text === "OK") return undefined as T;
  try {
    return JSON.parse(text);
  } catch {
    return undefined as T;
  }
}

export const api = {
  projeler: {
    list: () => request<Proje[]>("/v1/projects/our-projects"),
    get: (id: string) => request<Proje>(`/v1/projects/find/${id}`),
  },
  haberler: {
    list: () => request<Haber[]>("/v1/news/our-news"),
    get: (id: string) => request<Haber>(`/v1/news/find/${id}`),
  },
};
