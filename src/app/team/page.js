// src/app/team/page.js

import React from "react";

export default function TeamPage() {
  // Professors
  const professors = [
    { img: "/team/prof1.jpg", name: "Dr Nikitha Alewor", role: "Project Head" },
    { img: "/team/prof2.jpg", name: "Dr SUVARSHA ", role: "Project Manager" },
    { img: "/team/prof3.jpg", name: "Dr Deekshitha Hebbar A", role: "Project Co-Ordinator" },
  ];

  // Students — 50 placeholders
  const students = [
  { img: "/team/student1.jpg", name: "ROSHAN JAMEER BANI", role: "TEAM HEAD" },
  { img: "/team/student2.jpg", name: "VAISHNAVI", role: "VICE HEAD" },
  { img: "/team/student3.jpg", name: "SWATHI KHARVI", role: "REPORT MAKING HEAD " },
  { img: "/team/student4.jpg", name: "SAFREEN BHANU", role: "REPORT MAKING VICE HEAD" },
  { img: "/team/student5.jpg", name: "SANJANA RATHOD", role: "DATA ENTRY HEAD" },

  { img: "/team/student6.jpg",  name: "AKHILA G.M",  role: "DATA ENTRY VICE HEAD" },
  { img: "/team/student7.jpg",  name: "NISARGA .S",  role: "PUBLICITY  HEAD" },
  { img: "/team/student8.jpg",  name: "LAKSHMI SAGAR",  role: "PUBLICITY VICE HEAD" },
  { img: "/team/student9.jpg",  name: "ROSHINI N GOTAGI",  role: "SURVEY HEAD" },
   { img: "/team/student20.jpg",  name: "YASHASWINI I.Y",  role: "SURVEY VICE  HEAD" },
  { img: "/team/student10.jpg", name: "LIKHITH M.H", role: "FINANCE HEAD" },
  { img: "/team/student11.jpg", name: "NAVEEN  M  GADDER", role: "FINANCE VICE HEAD" },
  { img: "/team/student12.jpg", name: "G SUPRIYA", role: "PUBLICATION HEAD" },
  { img: "/team/student13.jpg", name: "DHANYATHA T", role: "PUBLICATION VICE HEAD" },
  { img: "/team/student14.jpg", name: "MAHESHWARI", role: "DATA COLLECTION HEAD" },
  { img: "/team/student15.jpg", name: "BHAVANI BASAVARAJ SONNAD", role: "DATA COLLECTION VICE HEAD" },
  { img: "/team/student16.jpg", name: "KARTHIK P B", role: "PHOTO VIDEO DOCUMENTATION HEAD" },
  { img: "/team/student17.jpg", name: "NITESH R", role: "PHOTO VIDEO DOCUMENTATION VICE HEAD" },
  { img: "/team/student18.jpg", name: "JASWANTH BASAVARAJ", role: "TRANSPORT HEAD" },
  { img: "/team/student19.jpg", name: "MOHAMMED ISMAIL NS", role: "TRANSPORT VICE HEAD" },
  { img: "/team/student21.jpg", name: "SACHIN L.R", role: "Volunteer" },
  { img: "/team/student22.jpg", name: "MEGHANA .N", role: "Volunteer" },
  { img: "/team/student23.jpg", name: "MAYURESH PRAJAPATI", role: "Volunteer" },
  { img: "/team/student24.jpg", name: "SRUSHTI MORAB", role: "Volunteer" },
  { img: "/team/student25.jpg", name: "MAYURI L", role: "Volunteer" },
  { img: "/team/student26.jpg", name: "SAKSHI GIRHE", role: "Volunteer" },
  { img: "/team/student27.jpg", name: "MANGESH B", role: "Volunteer" },
  { img: "/team/student28.jpg", name: "NAMRATA KALYAN WARE", role: "Volunteer" },
  { img: "/team/student29.jpg", name: "PAVAN KUMAR V", role: "Volunteer" },
  { img: "/team/student30.jpg", name: "RANJITHA DEVADIGA", role: "Volunteer" },
  { img: "/team/student31.jpg", name: "Vaishnavi Kesapnatti", role: "Volunteer" },
  { img: "/team/student32.jpg", name: "SACHIN KALAL", role: "Volunteer" },
  { img: "/team/student33.jpg", name: "SIDDHI SUBHASH KAMBLE", role: "Volunteer" },
  { img: "/team/student34.jpg", name: "ADVAITH  V ADIGA", role: "Volunteer" },
  { img: "/team/student35.jpg", name: "VAISHNAVI YOGESH PAWAR", role: "Volunteer" },
  { img: "/team/student36.jpg", name: "SHAHEEN KOUSAR", role: "Volunteer" },
  { img: "/team/student37.jpg", name: "DEVAPPA", role: "Volunteer" },
  { img: "/team/student38.jpg", name: "SAMPREET KALAKOTI", role: "Volunteer" },
  { img: "/team/student39.jpg", name: "MANJUNATH", role: "Volunteer" },
  { img: "/team/student40.jpg", name: "VISHWA V HANCHINAMANI", role: "Volunteer" },
  { img: "/team/student41.jpg", name: "RASIKA GHADGE", role: "Volunteer" },
  { img: "/team/student42.jpg", name: "KAILASH", role: "Volunteer" },
  { img: "/team/student43.jpg", name: "SHYAMBHAVI SUBHAS HALLEPPANAVAR", role: "Volunteer" },
  { img: "/team/student44.jpg", name: "AARJU AJIM MANER", role: "Volunteer" },
  { img: "/team/student45.jpg", name: "HARSHINI N.K", role: "Volunteer" },
  { img: "/team/student46.jpg", name: "JAMEERAHMED.S.B", role: "Volunteer" },
  { img: "/team/student47.jpg", name: "AKSHATHA.C.INDI", role: "Volunteer" },
  { img: "/team/student48.jpg", name: "BINDUSHREE.C", role: "Volunteer" },
  { img: "/team/student49.jpg", name: "TEJASWINI A.T", role: "Volunteer" },
  { img: "/team/student50.jpg", name: "RAJESH .A", role: "Volunteer" },
];


  return (
    <section style={{ padding: "18px 0" }}>
      <h2 className="section-title" style={{ marginBottom: 18 }}>Team</h2>

      {/* PROFESSORS SECTION */}
      <div className="team-block">
        <h3 className="team-block-title">Professors</h3>

        <div className="prof-grid">
          {professors.map((p, idx) => (
            <article key={idx} className="member-card prof-card">
              <div className="card-frame">
                <div className="photo-wrap">
                  <img src={p.img} alt={p.name} className="member-photo" />

                  <div className="overlay">
                    <div className="overlay-inner">
                      <div className="member-name">{p.name}</div>
                      <div className="member-role">{p.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* STUDENTS SECTION */}
      <div className="team-block" style={{ marginTop: 32 }}>
        <h3 className="team-block-title">Students</h3>

        <div className="student-grid">
          {students.map((s, idx) => (
            <article key={idx} className="member-card student-card">
              <div className="card-frame">
                <div className="photo-wrap">
                  <img src={s.img} alt={s.name} className="member-photo" />

                  <div className="overlay">
                    <div className="overlay-inner">
                      <div className="member-name">{s.name}</div>
                      <div className="member-role">{s.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
