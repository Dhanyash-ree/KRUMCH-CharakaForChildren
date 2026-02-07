// src/components/MobileSidebar.js
"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";


export default function MobileSidebar({ links = [] }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      // focus first link for keyboard users
      setTimeout(() => firstLinkRef.current?.focus(), 60);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // close when click outside sidebar (on backdrop)
  function onBackdropClick(e) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  return (
    <>
      {/* Hamburger button - visible only on mobile via CSS */}
      <button
        className="mobile-hamburger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Backdrop + Sidebar */}
      {open && (
        <div className="mobile-sidebar-backdrop" onClick={onBackdropClick} role="dialog" aria-modal="true">
          <aside className="mobile-sidebar" ref={sidebarRef}>
            <div className="mobile-sidebar-top">
              <div className="mobile-logo-wrap">
                <img src="/logo.jpg" alt="logo" className="mobile-logo-img" />
                <div className="mobile-site-title">
                  <div className="mobile-title-main">KRUMCH</div>
                  <div className="mobile-title-sub">Kundapura Rural Ayurveda Medical College</div>
                </div>
              </div>

              <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <nav className="mobile-nav" aria-label="Mobile navigation">
              {links.map((l, idx) => (
                <a
                  key={idx}
                  href={l.href}
                  ref={idx === 0 ? firstLinkRef : null}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>

          <div className="mobile-sidebar-footer">
  <p style={{ color: "#ffdca8", fontWeight: 700, marginBottom: 8 }}>
    Follow Us
  </p>

  <div className="mobile-social-row">
    <a
      href="https://www.instagram.com/kundapura_rural_ayurveda"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-social-icon"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://youtube.com/@kundapuraruralayurveda"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-social-icon"
      aria-label="YouTube"
    >
      <FaYoutube />
    </a>
  </div>
</div>

          </aside>
        </div>
      )}
    </>
  );
}
