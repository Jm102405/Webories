export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0D1A30",
        padding: "32px var(--section-x)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.3px",
          }}
        >
          Webories
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          © {new Date().getFullYear()} Webories. All rights reserved.
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "24px" }}>
          {["Services", "Templates", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.35)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
