import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import { useAuth } from "./context/useAuth";
import { api } from "./api/client";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import {
  LayoutDashboard,
  FolderKanban,
  Newspaper,
  Mail,
  Globe,
  LogOut,
  KeyRound,
} from "lucide-react";
import ChangePassword from "./pages/ChangePassword";

function AdminLayout() {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.auth.logout();
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="admin-container">
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
            <LayoutDashboard size={19} strokeWidth={2} />
            <span>Kontrol Paneli</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FolderKanban size={19} strokeWidth={2} />
            <span>Projeler</span>
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Newspaper size={19} strokeWidth={2} />
            <span>Haberler</span>
          </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Mail size={19} strokeWidth={2} />
            <span>Mesaj Kutusu</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="sidebar-link"
          >
            <Globe size={19} strokeWidth={2} />
            <span>Siteyi Görüntüle</span>
          </a>
          <NavLink
            to="/change-password"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <KeyRound size={19} strokeWidth={2} />
            <span>Şifre Değiştir</span>
          </NavLink>
          <button className="sidebar-link logout-link" onClick={handleLogout}>
            <LogOut size={19} strokeWidth={2} />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
