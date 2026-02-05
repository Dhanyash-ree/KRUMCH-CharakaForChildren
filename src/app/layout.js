"use client"
import "./globals.css";
import MobileSidebar from "../components/MobileSidebar"; // mobile sidebar component (client)
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const metadata = {
  title: "KUNDAPURA Rural Ayurveda Medical College",
  description: "Event landing and pages",
};

export default function RootLayout({ children }) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/brochure", label: "Brochure" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <html lang="en">
      <body>
        <header className="site-nav">
          <div className="nav-inner">
            <div className="logo-wrap">
              <img src="/logo.jpg" alt="logo" className="logo-img" />
              <div className="site-title">
                <div className="title-main">KRUMCH</div>
                <div className="title-sub">
                  {" "}
                  Kundapura Rural Ayurveda Medical College
                </div>
              </div>
            </div>

            <nav className="top-links" aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/team">Team</a>
              <a href="/gallery">Gallery</a>
              <a href="/brochure">Magazine</a>
              <a href="/#contact">Contact</a>
            </nav>

            {/* Mobile sidebar hamburger + drawer */}
            <MobileSidebar links={navLinks} />
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer site-footer-global">
          <div className="footer-inner">
            <div className="footer-col">
              <section style={{ marginTop: 18 }}>
                <h3 className="section-title">Quick Links</h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  <a className="btn btn-ghost" href="/about">
                    About
                  </a>
                  <a className="btn btn-ghost" href="/gallery">
                    Gallery
                  </a>
                  <a className="btn btn-ghost" href="/team">
                    Meet Team 
                  </a>
                </div>
              </section>
            </div>

            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>kramch100@gmail.com</p>
              <p>089513 80555</p>
            </div>

            <div className="footer-col">
              <h4>Address</h4>
              <p>
                #1-57/3, Prafulla Enclave, Halady Rd, Koteshwara, Kundapura Tq.,
                Udupi Dist., Karnataka, India – 576222
              </p>
            </div>

            <div className="footer-col social-col">
              <h4>Follow Us</h4>

              <div className="social-row" role="list" aria-label="Social links">
                <a
                  className="social-link"
                  href="https://www.instagram.com/kundapura_rural_ayurveda?igsh=MWpkMGlqN3lwd29zcQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram (new tab)"
                  role="listitem"
                >
                  <FaInstagram className="social-icon-svg" />
                </a>

                <a
                  className="social-link"
                  href="https://youtube.com/@kundapuraruralayurveda?si=YWOFIrWqNsiJ2Sjq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open YouTube (new tab)"
                  role="listitem"
                >
                  <FaYoutube className="social-icon-svg" />
                </a>
              </div>

              <p style={{ marginTop: 12, opacity: 0.9 }}>
                Follow for updates, event reels & livestreams.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                maxWidth: 1100,
                margin: "0 auto",
              }}
            >
              <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} KUNDAPURA Rural Ayurveda Medical
                College
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
