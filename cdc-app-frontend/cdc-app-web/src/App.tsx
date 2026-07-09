import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Cozumler from "./pages/Cozumler";
import Projeler from "./pages/Projeler";
import Haberler from "./pages/Haberler";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminProjeler from "./pages/admin/AdminProjeler";
import AdminHaberler from "./pages/admin/AdminHaberler";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/cozumler" element={<Cozumler />} />
          <Route path="/projeler" element={<Projeler />} />
          <Route path="/haberler" element={<Haberler />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="projeler" replace />} />
          <Route path="projeler" element={<AdminProjeler />} />
          <Route path="haberler" element={<AdminHaberler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
