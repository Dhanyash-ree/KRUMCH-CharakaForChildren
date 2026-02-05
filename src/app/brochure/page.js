// src/app/brochure/page.js
// import HeyzineActions from "../../components/HeyzineActions";

export default function BrochureEmbed() {
  // Your Heyzine public share URL (the one you posted)
  const embedSrc = "https://heyzine.com/flip-book/91d9a319fe.html";

  return (
    < section style={{ padding: 20 }}>
      <h2
        className="section-title"
        style={{ textAlign: "center", color: "var(--saffron)", marginBottom: 18 }}
      >
        Magazine
      </h2>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* responsive iframe wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "66.66%", // adjust aspect ratio if needed
            borderRadius: 10,
            overflow: "hidden",
            boxShadow: "0 22px 60px rgba(0,0,0,0.6)",
            background: "#000",
          }}
        >
          <iframe
            className="heyzine-iframe"
            title="Heyzine flipbook"
            src={embedSrc}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
          />
        </div>

        {/* interactive buttons live in client component */}
        {/* <HeyzineActions embedSrc={embedSrc} /> */}

      </div>
    </section>
  );
}
