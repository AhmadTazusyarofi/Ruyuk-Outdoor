// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// IMPORT logo dari assets
import logoUrl from "@/assets/logo.png";

// Helper untuk set/replace <link rel="icon"> dan lainnya
function setLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {}
) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
  Object.entries(attrs).forEach(([k, v]) => link!.setAttribute(k, v));
}

// Set favicon (tab icon) pakai assets
setLink("icon", logoUrl, { type: "image/png" });
// (opsional) Apple touch icon
setLink("apple-touch-icon", logoUrl);

// (opsional) ganti juga og/twitter *HANYA* untuk runtime browser (crawler sosmed tidak jalan JS)
const setMeta = (selector: string, content: string) => {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute("content", content);
};
setMeta('meta[property="og:image"]', window.location.origin + logoUrl);
setMeta('meta[name="twitter:image"]', window.location.origin + logoUrl);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
