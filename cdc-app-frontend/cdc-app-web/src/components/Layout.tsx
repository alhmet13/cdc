import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";

export default function Layout() {
  const navigate = useNavigate();
  const { lang, t, setLang } = useLanguage();
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <div className="site-wrapper">
      <div className="navbar-bg">
        <header className="navbar">
          <div
            className="logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img src="/image102.jpg" alt="CDC Logo" />
          </div>

          {/* Masaüstü nav */}
          <nav className="nav-links desktop-nav">
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t.nav.hakkimizda}
            </NavLink>
            <NavLink
              to="/cozumler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t.nav.cozumler}
            </NavLink>
            <NavLink
              to="/projeler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t.nav.projeler}
            </NavLink>
            <NavLink
              to="/haberler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t.nav.haberler}
            </NavLink>
            <span
              className={`lang-selector ${lang === "tr" ? "" : "muted"}`}
              onClick={() => setLang("tr")}
              style={{ cursor: "pointer" }}
            >
              TR
            </span>
            <span
              className={`lang-selector ${lang === "en" ? "" : "muted"}`}
              onClick={() => setLang("en")}
              style={{ cursor: "pointer" }}
            >
              EN
            </span>
          </nav>

          {/* Hamburger butonu */}
          <button
            className="hamburger"
            onClick={() => setMenuAcik(!menuAcik)}
            aria-label="Menü"
          >
            <span className={`hamburger-line ${menuAcik ? "open" : ""}`} />
            <span className={`hamburger-line ${menuAcik ? "open" : ""}`} />
            <span className={`hamburger-line ${menuAcik ? "open" : ""}`} />
          </button>
        </header>

        {/* Mobil menü */}
        {menuAcik && (
          <nav className="mobile-nav">
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuAcik(false)}
            >
              {t.nav.hakkimizda}
            </NavLink>
            <NavLink
              to="/cozumler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuAcik(false)}
            >
              {t.nav.cozumler}
            </NavLink>
            <NavLink
              to="/projeler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuAcik(false)}
            >
              {t.nav.projeler}
            </NavLink>
            <NavLink
              to="/haberler"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={() => setMenuAcik(false)}
            >
              {t.nav.haberler}
            </NavLink>
            <div className="mobile-lang">
              <span
                className={`lang-selector ${lang === "tr" ? "" : "muted"}`}
                onClick={() => {
                  setLang("tr");
                  setMenuAcik(false);
                }}
                style={{ cursor: "pointer" }}
              >
                TR
              </span>
              <span
                className={`lang-selector ${lang === "en" ? "" : "muted"}`}
                onClick={() => {
                  setLang("en");
                  setMenuAcik(false);
                }}
                style={{ cursor: "pointer" }}
              >
                EN
              </span>
            </div>
          </nav>
        )}
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-contact-info">
            <p className="contact-item">📍 {t.footer.adres}</p>
            <p className="contact-item">
              ✉️{" "}
              <a href="mailto:info@cdcteknoloji.com.tr">
                info@cdcteknoloji.com.tr
              </a>
            </p>
            <p className="contact-item">📞 +90 212 502 3810</p>
            <p className="contact-item">
              🌐{" "}
              <a
                href="https://www.cdcteknoloji.com.tr"
                target="_blank"
                rel="noreferrer"
              >
                www.cdcteknoloji.com.tr
              </a>
            </p>
            <p className="footer-policies">{t.footer.politika}</p>
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
