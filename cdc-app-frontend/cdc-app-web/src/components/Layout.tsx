import { NavLink, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/cozumler", label: "Çözümlerimiz" },
  { to: "/projeler", label: "Projeler" },
  { to: "/haberler", label: "Haberler" },
];

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div className="site-wrapper">
      <div className="navbar-bg">
        <header className="navbar">
          <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <img src="/image102.jpg" alt="CDC Logo" />
          </div>
          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.label}
              </NavLink>
            ))}
            <span className="lang-selector">TR</span>
            <span className="lang-selector muted">EN</span>
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-contact-info">
            <p className="contact-item">
              📍 Bağlar Mah. Yalçın Koreş Cad. No:16, 34212 Güneşli / İstanbul
            </p>
            <p className="contact-item">
              ✉️{" "}
              <a href="mailto:info@cdcteknoloji.com.tr">info@cdcteknoloji.com.tr</a>
            </p>
            <p className="contact-item">📞 +90 212 502 3810</p>
            <p className="contact-item">
              🌐{" "}
              <a href="https://www.cdcteknoloji.com.tr" target="_blank" rel="noreferrer">
                www.cdcteknoloji.com.tr
              </a>
            </p>
            <p className="footer-policies">Aydınlatma Metni / Çerez Politikası</p>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Instagram">
              📸
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
