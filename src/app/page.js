// src/app/page.js
"use client";
import React from "react";
import ContactForm from "../components/ContactForm";


export default function Home() {
  const sponsors = [
    "/sponsors/sponsor1.jpg",
    "/sponsors/sponsor2.jpg",
    "/sponsors/sponsor3.jpg",
    "/sponsors/sponsor4.jpg",
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
            
              <span className="big">KUNDAPURA</span>
              <span className="big">Rural Ayurveda</span>
              <span className="big">Medical College</span>
            </h1>
           
          </div>

          <div className="hero-right">
            <div className="main-logo-wrap small">
              <img src="/logo.jpg" alt="main logo" className="main-logo" />
              <div className="logo-glow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="sponsors-section">
       
        <div className="sponsors-row">
          {sponsors.map((s, i) => (
            <div className="sponsor-item" key={i}>
              <img src={s} alt={`sponsor-${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* KINETIC TYPOGRAPHY */}
    <div className="kinetic-wrap">
  <div className="kinetic-track">
    <span className="kinetic-text">CHARAKA FOR CHILDREN</span>
    <span className="kinetic-text">CHARAKA FOR CHILDREN</span>
  </div>
</div>


      {/* FEATURE BLUE CARD (recreated in code - dummy content) */}
     {/* FEATURE BLUE CARD — Charaka for Children Project */} 
<section className="feature-card-wrap">
  <div className="feature-card">
    
    {/* LEFT CONTENT */}
    <div className="feature-left">
      <h2 className="feature-title">Charaka for Children – A Mission in Action</h2>

      <p className="feature-desc">
        Charaka for Children (CFC) is a national-level Ayurveda outreach initiative
        led by the students of Kundapura Rural Ayurveda Medical College and Hospital.
        The project focuses on introducing the timeless principles of Acharya Charaka
        and Ayurveda to school children through structured, child-friendly health
        education programs.
      </p>

      <p className="feature-desc">
        In January 2026, the CFC–2025 Project Magazine was officially submitted to
        participating schools, documenting the team’s work, achievements, and
        statistical outcomes. The initiative received wide appreciation from school
        authorities and earned a <strong>3rd Prize at the National Level</strong>,
        marking a significant milestone for the student team.
      </p>

      <a
        className="btn btn-primary"
        href="/about"
        style={{ marginTop: 12, display: "inline-block" }}
      >
        About the Project
      </a>

      {/* SMALL STATS */}
      <div className="stat-row small">
        <div className="stat">
          <div className="stat-num">4</div>
          <div className="stat-label">Partner Schools</div>
        </div>

        <div className="stat">
          <div className="stat-num">2026</div>
          <div className="stat-label">Submission Year</div>
        </div>

        <div className="stat">
          <div className="stat-num">3rd</div>
          <div className="stat-label">National Prize</div>
        </div>

        <div className="stat">
          <div className="stat-num">1</div>
          <div className="stat-label">Project Magazine</div>
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="feature-right">
      <div className="feature-graphic">
        <div className="graphic-ring" />
        <div className="feature-image-placeholder">
  <img src="/additional/img2.jpg" alt="CFC Project" />
</div>
</div>

      {/* BIG STAT GRID */}
      <div className="stat-grid">
        {/* Image Placeholder */}


        <div className="stat-col">
          <div className="stat-num big">4</div>
          <div className="stat-label">Schools Impacted</div>
        </div>

        <div className="stat-col">
          <div className="stat-num big">100+</div>
          <div className="stat-label">Students Reached</div>
        </div>

        <div className="stat-col">
          <div className="stat-num big">1</div>
          <div className="stat-label">National Recognition</div>
        </div>

        <div className="stat-col">
          <div className="stat-num big">CFC</div>
          <div className="stat-label">Charaka for Children</div>
        </div>
      </div>
    </div>

  </div>
</section>



      {/* QUICK LINKS */}
   

      {/* CONTACT */}
      <section id="contact" style={{ marginTop: 26 }}>
        <h3 className="section-title">Contact</h3>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div style={{ minWidth: 260, background: "rgba(255,255,255,0.02)", padding: 14, borderRadius: 10 }}>
            <h4 style={{ color: "var(--saffron)" }}>Event Office</h4>
            <p>
kramch100@gmail.com</p>
            <p>089513 80555</p>
          </div>

        <ContactForm />
        </div>
      </section>
    </>
  );
}
