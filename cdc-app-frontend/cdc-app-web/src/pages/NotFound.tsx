import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import SEO from "../components/SEO";
import { ServerCrash, ArrowLeft, FolderOpen } from "lucide-react";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div 
      className="page-container" 
      style={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center", 
        padding: "60px 20px",
        background: "radial-gradient(circle at center, rgba(235, 28, 35, 0.04) 0%, transparent 60%)"
      }}
    >
      <SEO 
        title={lang === "tr" ? "404 - Sayfa Bulunamadı" : "404 - Page Not Found"} 
        description={lang === "tr" ? "Aradığınız sayfa bulunamadı." : "The page you are looking for could not be found."} 
      />
      
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <ServerCrash size={120} color="#eb1c23" strokeWidth={1} style={{ opacity: 0.08, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) scale(2.2)" }} />
        <h1 
          style={{ 
            fontSize: "8.5rem", 
            fontWeight: "900",
            margin: "0", 
            background: "linear-gradient(135deg, #eb1c23 0%, #ff4d4d 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            zIndex: 1,
            lineHeight: "1",
            letterSpacing: "-0.05em"
          }}
        >
          404
        </h1>
      </div>

      <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#0f172a", margin: "0 0 16px 0", letterSpacing: "-0.5px" }}>
        {lang === "tr" ? "Sayfa Bulunamadı" : "Page Not Found"}
      </h2>
      <p style={{ fontSize: "1.15rem", color: "#64748b", margin: "0 0 40px 0", maxWidth: "500px", lineHeight: "1.6" }}>
        {lang === "tr" 
          ? "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir. Ana sayfaya dönerek keşfetmeye devam edebilirsiniz."
          : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Return home to continue exploring."}
      </p>
      
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link 
          to="/" 
          className="btn-primary" 
          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "50px", boxShadow: "0 8px 20px rgba(235, 28, 35, 0.25)" }}
        >
          <ArrowLeft size={18} />
          {lang === "tr" ? "Ana Sayfaya Dön" : "Return Home"}
        </Link>
        <Link 
          to="/projeler" 
          className="btn-secondary" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px", 
            padding: "14px 32px", 
            borderRadius: "50px",
            backgroundColor: "transparent",
            color: "#0f172a",
            border: "1px solid #cbd5e1",
            boxShadow: "none"
          }}
        >
          <FolderOpen size={18} />
          {lang === "tr" ? "Projelerimizi İnceleyin" : "View Our Projects"}
        </Link>
      </div>
    </div>
  );
}
