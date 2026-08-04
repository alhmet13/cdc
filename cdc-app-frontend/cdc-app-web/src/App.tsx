import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

// Sayfaları dinamik import (lazy load) ile tanımlayarak bundle boyutunu küçültüyoruz
const Anasayfa = lazy(() => import("./pages/Anasayfa"));
const Hakkimizda = lazy(() => import("./pages/Hakkimizda"));
const Cozumler = lazy(() => import("./pages/Cozumler")); // Neden Biz?
const Yetkinlikler = lazy(() => import("./pages/Yetkinlikler")); // Veri Merkezi Çözümleri
const Projeler = lazy(() => import("./pages/Projeler"));
const Haberler = lazy(() => import("./pages/Haberler"));
const Iletisim = lazy(() => import("./pages/Iletisim"));
const CerezPolitikasi = lazy(() => import("./pages/CerezPolitikasi"));
const KisiselVerilerinKorunmasi = lazy(() => import("./pages/KisiselVerilerinKorunmasi"));

// Sayfa yüklenene kadar gösterilecek loading tasarımı
const LoadingFallback = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", fontSize: "1.2rem", color: "#666" }}>
    Yükleniyor...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/neden-biz" element={<Cozumler />} />
            <Route path="/cozumler" element={<Yetkinlikler />} />
            <Route path="/yetkinliklerimiz" element={<Navigate to="/cozumler" replace />} />
            <Route path="/projeler" element={<Projeler />} />
            <Route path="/haberler" element={<Haberler />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
            <Route path="/kisisel-verilerin-korunmasi" element={<KisiselVerilerinKorunmasi />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
