export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F5F0E8",
        padding: "24px var(--section-x)",
        borderTop: "1px solid rgba(27,42,74,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "#6B6560",
          }}
        >
          © 2026 Webories. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
