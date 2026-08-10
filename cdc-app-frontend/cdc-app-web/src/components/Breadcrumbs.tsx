import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items?: { label: string; path?: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbProps) => {
  const { lang } = useLanguage();

  // Home icon
  const homeText = lang === "en" ? "Home" : "Ana Sayfa";

  return (
    <nav className="breadcrumbs" aria-label="breadcrumb">
      <ol style={{ display: "flex", alignItems: "center", listStyle: "none", padding: 0, margin: "0 0 20px 0", gap: "8px", color: "#666", fontSize: "0.9rem" }}>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ color: "#eb1c23", display: "flex", alignItems: "center", textDecoration: "none", gap: "4px" }}>
            <Home size={16} />
            <span style={{ fontWeight: 500 }}>{homeText}</span>
          </Link>
        </li>

        {items && items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <ChevronRight size={16} color="#aaa" />
              {isLast || !item.path ? (
                <span style={{ color: "#333", fontWeight: 600 }}>{item.label}</span>
              ) : (
                <Link to={item.path} style={{ color: "#eb1c23", textDecoration: "none" }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
