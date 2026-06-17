"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function TemplatesPage() {
  const [active, setActive] = useState("All");
  const router = useRouter();

  const filtered = templates.filter((t) => {
    if (active === "All") return true;
    if (active === "Events") return t.category === "Event";
    return t.category === "Portfolio";
  });

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#F5F0E8" }}>
      {/* ── STICKY HEADER ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(245,240,232,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(27,42,74,0.08)",
          padding: "16px var(--section-x)",
        }}
      >
        {/* Row: Back Button + Title + Filters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => router.back()}
            className="back-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid rgba(27,42,74,0.12)",
              borderRadius: "999px",
              padding: "10px 20px",
              fontFamily: "var(--font-headline)",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--primary)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
          >
            <ArrowLeft size={15} /> Back to Home
          </motion.button>

          {/* Center: Title + Subtitle + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(18px, 2vw, 28px)",
                fontWeight: 700,
                color: "var(--primary)",
                letterSpacing: "-0.02em",
              }}
            >
              All Templates
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "#6B6560",
              }}
            >
              Browse our full collection — pick one, we&apos;ll do the rest
            </p>
            {/* Filter Tabs */}
            <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "999px",
                    fontFamily: "var(--font-headline)",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    cursor: "pointer",
                    border:
                      active === f ? "none" : "1.5px solid rgba(27,42,74,0.2)",
                    backgroundColor:
                      active === f ? "var(--primary)" : "#FFFFFF",
                    color: active === f ? "#FFFFFF" : "var(--primary)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLLABLE GRID ── */}
      <div style={{ padding: "40px var(--section-x) var(--section-y)" }}>
        <motion.div layout className="templates-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(27,42,74,0.08)",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(27,42,74,0.08)",
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
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
