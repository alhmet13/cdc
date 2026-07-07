import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import News from "./pages/News";

function AdminLayout() {
  return (
    <div className="admin-container">
      {/* Sidebar navigation */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img
            src="/image102.jpg"
            alt="CDC Logo"
            className="sidebar-logo-img"
          />
          <div className="sidebar-logo-texts">
            <span className="sidebar-logo-title">CDC</span>
            <span className="sidebar-logo-subtitle">Admin Panel</span>
          </div>
        </div>

        <nav className="sidebar-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            end
          >
            <span style={{ fontSize: "1.2rem" }}>📊</span>
            <span>Kontrol Paneli</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span style={{ fontSize: "1.2rem" }}>📁</span>
            <span>Projeler</span>
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <span style={{ fontSize: "1.2rem" }}>📰</span>
            <span>Haberler</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="view-site-btn"
          >
            <span>🌐</span>
            <span>Siteyi Görüntüle</span>
          </a>
        </div>
      </aside>

      {/* Main content display */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AdminLayout />
    </BrowserRouter>
  );
}
