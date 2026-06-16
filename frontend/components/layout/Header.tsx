"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      style={
        {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "rgba(249,246,241,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(27,42,74,0.08)",
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
        className="navbar-inner"
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
            color: "var(--primary)",
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
                color: "var(--text-secondary)",
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
            color: "var(--primary)",
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
              backgroundColor: "rgba(249,246,241,0.98)",
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
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(27,42,74,0.06)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
