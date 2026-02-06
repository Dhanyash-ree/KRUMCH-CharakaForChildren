"use client";

import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/brochure", label: "Magazine" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <div className="logo-wrap">
          <img src="/logo.jpg" alt="logo" className="logo-img" />
          <div className="site-title">
            <div className="title-main">KRUMCH</div>
            <div className="title-sub">
              Kundapura Rural Ayurveda Medical College
            </div>
          </div>
        </div>

        <nav className="top-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <MobileSidebar links={navLinks} />
      </div>
    </header>
  );
}
