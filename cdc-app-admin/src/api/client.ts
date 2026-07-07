import type { Haber, Proje } from "../types";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4101";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? "İstek başarısız");
  }

  if (res.status === 204 || res.headers.get("content-length") === "0") {
    return undefined as T;
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
    create: (data: Partial<Proje>) =>
      request<void>("/v1/projects/create", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    update: (id: string, data: Partial<Proje>) =>
      request<void>(`/v1/projects/update/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    delete: (id: string) =>
      request<void>(`/v1/projects/delete/${id}`, { method: "DELETE" }),
  },
  haberler: {
    list: () => request<Haber[]>("/v1/news/our-news"),
    get: (id: string) => request<Haber>(`/v1/news/find/${id}`),
    create: (data: Partial<Haber>) =>
      request<void>("/v1/news/create", {
        method: "POST",
        body: JSON.stringify(data),
      }),
    update: (id: string, data: Partial<Haber>) =>
      request<void>(`/v1/news/update/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      }),
    delete: (id: string) =>
      request<void>(`/v1/news/delete/${id}`, { method: "DELETE" }),
  },
};
