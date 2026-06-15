"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = ["services", "contact"];
      const isInDarkSection = darkSections.some((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 70 && rect.bottom >= 70;
        }
        return false;
      });

      const templatesSection = document.getElementById("templates");
      let isIn70OfTemplates = false;
      if (templatesSection) {
        const rect = templatesSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolledInto = -rect.top;
        const percentage = scrolledInto / sectionHeight;
        isIn70OfTemplates = percentage >= 0.7;
      }

      setScrolled(isInDarkSection || isIn70OfTemplates);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled
            ? "rgba(27,42,74,0.97)"
            : "rgba(249,246,241,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(27,42,74,0.08)",
          transition: "all 0.4s ease",
        } as React.CSSProperties
      }
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "18px var(--section-x)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "22px",
            fontWeight: 700,
            color: scrolled ? "#FFFFFF" : "var(--primary)",
            transition: "color 0.4s ease",
            letterSpacing: "-0.3px",
          }}
        >
          Webories
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="desktop-nav"
          style={{ display: "flex", gap: "36px", alignItems: "center" }}
        >
          {["services", "templates", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="nav-link"
              style={{
                color: scrolled
                  ? "rgba(255,255,255,0.85)"
                  : "var(--text-secondary)",
                fontFamily: "var(--font-headline)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "capitalize",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="#contact"
            style={{
              backgroundColor: scrolled ? "#FFFFFF" : "var(--primary)",
              color: scrolled ? "var(--primary)" : "#FFFFFF",
              padding: "10px 24px",
              borderRadius: "999px",
              fontFamily: "var(--font-headline)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Get Started
          </a>
        </motion.div>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: scrolled ? "#FFFFFF" : "var(--primary)",
            padding: "8px",
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: scrolled
                ? "rgba(27,42,74,0.98)"
                : "rgba(249,246,241,0.98)",
              borderTop: "1px solid rgba(27,42,74,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px var(--section-x)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {["services", "templates", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById(item)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  style={{
                    padding: "14px 0",
                    fontFamily: "var(--font-headline)",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: scrolled
                      ? "rgba(255,255,255,0.85)"
                      : "var(--text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(27,42,74,0.06)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: "12px",
                  backgroundColor: "var(--primary)",
                  color: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  fontFamily: "var(--font-headline)",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
