import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-wrapper">
      <header className="admin-header">
        <h1>CDC Admin Panel</h1>
        <nav className="admin-nav">
          <NavLink to="/admin/projeler">Projeler</NavLink>
          <NavLink to="/admin/haberler">Haberler</NavLink>
          <a href="/" target="_blank" rel="noreferrer">
            Siteyi Aç →
          </a>
        </nav>
      </header>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
