"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const templates = [
  {
    name: "Dark Romantic",
    category: "Event",
    desc: "Anniversary & Monthsary",
    bg: "linear-gradient(135deg, rgba(40,10,30,0.9), rgba(80,20,50,0.9))",
    accent: "#ffb0b0",
    href: "https://dark-romantic.vercel.app",
  },
  {
    name: "Light Romantic",
    category: "Event",
    desc: "Anniversary & Monthsary",
    bg: "linear-gradient(135deg, rgba(255,235,235,0.6), rgba(255,200,200,0.6))",
    accent: "#f4a0a0",
    href: "https://light-romantic.vercel.app",
  },
  {
    name: "Pastel Romantic",
    category: "Event",
    desc: "Anniversary & Monthsary",
    bg: "linear-gradient(135deg, rgba(255,200,220,0.6), rgba(255,180,200,0.6))",
    accent: "#ffcce0",
    href: "https://pastel-romantic.vercel.app",
  },
  {
    name: "Wedding Elegance",
    category: "Event",
    desc: "Classic & Elegant",
    bg: "linear-gradient(135deg, rgba(196,168,130,0.5), rgba(160,130,90,0.5))",
    accent: "#C4A882",
    href: "#",
  },
  {
    name: "Modern Minimal",
    category: "Portfolio",
    desc: "Clean & Professional",
    bg: "linear-gradient(135deg, rgba(30,77,183,0.4), rgba(20,50,130,0.4))",
    accent: "#aac4f0",
    href: "#",
  },
  {
    name: "Creative Studio",
    category: "Portfolio",
    desc: "Bold & Creative",
    bg: "linear-gradient(135deg, rgba(10,70,50,0.5), rgba(5,50,35,0.5))",
    accent: "#a0ffcc",
    href: "#",
  },
];

const filters = ["All", "Events", "Portfolio"];

export default function Templates() {
  const [active, setActive] = useState("All");

  const filtered = templates.filter((t) => {
    if (active === "All") return true;
    if (active === "Events") return t.category === "Event";
    return t.category === "Portfolio";
  });

  return (
    <section
      id="templates"
      style={{
        backgroundColor: "var(--tertiary)",
        padding: "var(--section-y) var(--section-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle bg blob */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "500px",
          height: "500px",
          backgroundColor: "var(--secondary)",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "16px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--secondary)",
                color: "var(--primary)",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "12px",
                fontFamily: "var(--font-headline)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Our Templates
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "var(--primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Select a Foundation
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
              maxWidth: "320px",
              lineHeight: 1.6,
              textAlign: "right",
            }}
            className="templates-subtitle"
          >
            Browse our curated collection — pick one, we&apos;ll do the rest
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "8px 24px",
                borderRadius: "999px",
                fontFamily: "var(--font-headline)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.03em",
                cursor: "pointer",
                border: active === f ? "none" : "1.5px solid var(--primary)",
                backgroundColor:
                  active === f ? "var(--primary)" : "transparent",
                color: active === f ? "#FFFFFF" : "var(--primary)",
                transition: "all 0.3s ease",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="templates-grid">
          {filtered.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(27,42,74,0.08)",
                backgroundColor: "var(--white)",
                boxShadow: "0 4px 24px rgba(27,42,74,0.06)",
                cursor: "pointer",
              }}
            >
              {/* Preview */}
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: "20px 20px 0 0",
                }}
              >
                {t.href !== "#" ? (
                  <iframe
                    src={t.href}
                    style={{
                      width: "200%",
                      height: "200%",
                      border: "none",
                      transform: "scale(0.5)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      height: "100%",
                      background: t.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "1.1rem",
                        color: "white",
                        fontWeight: 600,
                        textAlign: "center",
                        padding: "0 20px",
                      }}
                    >
                      {t.name}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: "20px 24px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "11px",
                    color: t.accent,
                    marginBottom: "6px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  ✦ {t.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: "6px",
                  }}
                >
                  {t.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                  }}
                >
                  {t.desc}
                </p>

                <a
                  href={t.href === "#" ? undefined : t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={
                    t.href === "#"
                      ? (e: React.MouseEvent) => e.preventDefault()
                      : undefined
                  }
                  style={{
                    display: "inline-block",
                    backgroundColor:
                      t.href === "#" ? "var(--secondary)" : "var(--primary)",
                    color: t.href === "#" ? "var(--text-muted)" : "#FFFFFF",
                    padding: "8px 20px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-headline)",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: t.href === "#" ? "not-allowed" : "pointer",
                    textDecoration: "none",
                    pointerEvents: t.href === "#" ? "none" : "auto",
                    letterSpacing: "0.03em",
                  }}
                >
                  {t.href === "#" ? "Coming Soon" : "Preview →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            textAlign: "center",
            marginTop: "56px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--text-muted)",
            }}
          >
            Don&apos;t see what you like?{" "}
            <a
              href="#contact"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-headline)",
                fontWeight: 600,
                textDecoration: "none",
                borderBottom: "1.5px solid var(--gold)",
                paddingBottom: "1px",
              }}
            >
              Let&apos;s build something custom →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
