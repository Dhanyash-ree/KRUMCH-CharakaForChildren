// src/app/gallery/page.js
export default function GalleryPage() {
  return (
    <section className="gallery-section">
      <h2 className="section-title">Gallery</h2>

      {/* TOP FEATURE IMAGE */}
      <div className="gallery-feature">
        <div className="gallery-card feature-card">
          <img src="/gallery/award.jpg" alt="Prize Receiving Ceremony" />
        </div>
      </div>

      {/* 2 x 2 GRID */}
      <div className="gallery-grid two-grid">
        {["newspaper1.jpg", "newspaper2.jpg"].map((img, i) => (
          <div className="gallery-card" key={i}>
            <img src={`/gallery/${img}`} alt={`Gallery image ${i + 2}`} />
          </div>
        ))}
      </div>

<div className="gallery-grid">
  {[
    { img: "mag1.jpg", text: "Board Highschool,Kundapura" },
    { img: "mag2.jpg", text: "HMM & VKR  Memorial  HighSchool, Kundapura" },
    { img: "mag3.jpg", text: "St. Mary’s School, Kundapura" },
    { img: "mag4.jpg", text: "Oakwood Indian School, Kundapura" },
  ].map((item, i) => (
    <div className="gallery-card hover-card" key={i}>
      <img src={`/gallery/${item.img}`} alt={item.text} />

      <div className="gallery-overlay">
        <span>{item.text}</span>
      </div>
    </div>
  ))}
</div>


{/* LAST GRID (8 images) */}
<div className="gallery-grid">
  {[
    { img: "img1.jpg", text: "Board Highschool,Kundapura" },
    { img: "img2.jpg", text: "HMM & VKR  Memorial  HighSchool, Kundapura" },
    { img: "img3.jpg", text: "St. Mary’s School, Kundapura" },
    { img: "img4.jpg", text: "Oakwood Indian School, Kundapura" },
    { img: "img5.jpg", text: "HMM & VKR  Memorial  HighSchool, Kundapura" },
    { img: "img6.jpg", text: "Board Highschool,Kundapura" },
    { img: "img7.jpg", text: "St. Mary’s School, Kundapura" },
    { img: "img8.jpg", text: "Oakwood Indian School, Kundapura" },
  ].map((item, i) => (
    <div className="gallery-card hover-card" key={i}>
      <img src={`/gallery/${item.img}`} alt={item.text} />

      <div className="gallery-overlay">
        <span>{item.text}</span>
      </div>
    </div>
  ))}
</div>


    </section>
  );
}
