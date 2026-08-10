import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schema?: object;
}

const DEFAULT_TITLE = "Cevahir Data Center (CDC) | Veri Merkezi Mühendisliği & EPC Çözümleri";
const DEFAULT_DESCRIPTION =
  "Cevahir Data Center (CDC Teknoloji); Uptime sertifikalı uzman kadrosuyla Tier-III / Tier-IV veri merkezi tasarımı, inşaat, MEP mühendisliği ve anahtar teslim EPC çözümleri sunar.";
const DEFAULT_IMAGE = "https://www.cevahirdatacenter.com/anasayfa-banner.jpg";
const SITE_URL = "https://www.cevahirdatacenter.com";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = "Cevahir Data Center, CDC, CDC Teknoloji, Cevahir Veri Merkezi, veri merkezi, data center, EPC contractor, Tier III, MEP mühendisliği, hassas iklimlendirme, beyaz alan",
  image = DEFAULT_IMAGE,
  url,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    const fullTitle = title ? `${title} | CDC - Cevahir Data Center` : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper function to set or create meta tags
    const setMetaTag = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);

    // 3. OpenGraph Tags
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:url", url || window.location.href);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "Cevahir Data Center (CDC)");

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", url || `${SITE_URL}${window.location.pathname}`);

    // 6. JSON-LD Schema
    let scriptTag = document.getElementById("json-ld-schema") as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "json-ld-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, image, url, schema]);

  return null;
}
