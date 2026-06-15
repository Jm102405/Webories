"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Calendar, Briefcase, Menu, X } from "lucide-react";

export default function Home() {
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
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* Navbar */}
      <nav
        style={
          {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            backgroundColor: scrolled
              ? "rgba(10,22,40,0.95)"
              : "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid #E8E0CC",
            transition: "all 0.4s ease",
            "--nav-color": scrolled ? "#FFFFFF" : "#0A1628",
          } as React.CSSProperties
        }
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "24px",
              fontWeight: 700,
              color: scrolled ? "#FFFFFF" : "#0A1628",
              transition: "color 0.4s ease",
            }}
          >
            Webories
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="desktop-nav"
          >
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#templates" className="nav-link">
              Templates
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </motion.div>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled ? "#FFFFFF" : "#0A1628" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: scrolled
                  ? "rgba(10,22,40,0.98)"
                  : "rgba(245,235,220,0.98)",
                borderTop: "1px solid #E8E0CC",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "16px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <a
                  href="#services"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  style={{ fontSize: "16px", padding: "8px 0" }}
                >
                  Services
                </a>
                <a
                  href="#templates"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById("templates")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  style={{ fontSize: "16px", padding: "8px 0" }}
                >
                  Templates
                </a>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={() => {
                    setMenuOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  style={{ fontSize: "16px", padding: "8px 0" }}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden hero-section"
        style={{
          backgroundColor: "#F0E6D3",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
        }}
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-[#1E4DB7] text-sm mb-8"
          >
            <Star size={14} />
            Event & Portfolio Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-title"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              color: "#0A1628",
              lineHeight: 1.2,
              marginBottom: "24px",
              fontSize: "72px",
            }}
          >
            Your Special Moments,{" "}
            <span className="text-[#1E4DB7]">Beautifully</span> Crafted
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-desc"
            style={{
              textAlign: "center",
              color: "#0A1628",
              maxWidth: "600px",
              margin: "0 auto 48px auto",
              lineHeight: "1.75",
              fontSize: "20px",
            }}
          >
            We design stunning event pages for weddings, anniversaries, and
            birthdays — or build a modern portfolio that gets you noticed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <a href="#templates" className="btn-primary">
              View Templates <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div
          className="services-blob"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#1E4DB7",
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="services-blob"
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "#2E60D3",
            bottom: "10%",
            right: "5%",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-title"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          What We Offer
        </motion.h2>
        <p className="services-subtitle">
          Two powerful services, beautifully crafted for you
        </p>
        <div className="zigzag-wrap">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zigzag-step left"
          >
            <div className="zigzag-text">
              <h3>Event Pages</h3>
              <p>
                Wedding, anniversary, monthsary, birthday, or any special
                occasion — we craft beautiful event pages tailored to your
                special occasion. Choose from our curated templates or go fully
                custom.
              </p>
            </div>
            <div className="zigzag-icon">
              <Calendar size={48} />
              <h4>Events</h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zigzag-step right"
          >
            <div className="zigzag-text" style={{ textAlign: "right" }}>
              <h3>Portfolio Design</h3>
              <p>
                Modern, professional portfolios built to impress. We design
                stunning showcase pages that highlight your work and get you
                noticed by clients worldwide.
              </p>
            </div>
            <div className="zigzag-icon">
              <Briefcase size={48} />
              <h4>Portfolio</h4>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="zigzag-step left"
          >
            <div className="zigzag-text">
              <h3>Custom Builds</h3>
              <p>
                Have something unique in mind? We build fully custom websites
                from scratch — your vision, your brand, your way. No templates,
                no limits.
              </p>
            </div>
            <div className="zigzag-icon">
              <Star size={48} />
              <h4>Custom</h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Templates Section */}
      <section
        id="templates"
        style={{
          position: "relative",
          padding: "80px 24px",
          background: "linear-gradient(to bottom, #F0E6D3, #0A1628)",
          overflow: "hidden",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            color: "#0A1628",
            marginBottom: "12px",
          }}
        >
          Our Templates
        </motion.h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#4A5568",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Browse our curated collection — pick one, we&apos;ll do the rest
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {[
            { label: "All", active: true },
            { label: "Events", active: false },
            { label: "Portfolio", active: false },
          ].map((tab) => (
            <button
              key={tab.label}
              style={{
                padding: "8px 24px",
                borderRadius: "999px",
                fontSize: "14px",
                cursor: "pointer",
                border: tab.active ? "none" : "1px solid #0A1628",
                background: tab.active ? "#0A1628" : "transparent",
                color: tab.active ? "white" : "#0A1628",
                transition: "all 0.3s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="templates-grid">
          {[
            {
              name: "Wedding Elegance",
              category: "Event",
              desc: "Classic & Elegant",
              bg: "rgba(196,168,130,0.35)",
              accent: "#C4A882",
            },
            {
              name: "Modern Minimal",
              category: "Portfolio",
              desc: "Clean & Professional",
              bg: "rgba(30,77,183,0.35)",
              accent: "#aac4f0",
            },
            {
              name: "Sweet Celebration",
              category: "Event",
              desc: "Fun & Vibrant",
              bg: "rgba(100,60,180,0.35)",
              accent: "#c4b0ff",
            },
            {
              name: "Anniversary Love",
              category: "Event",
              desc: "Romantic & Warm",
              bg: "rgba(180,100,100,0.35)",
              accent: "#ffb0b0",
            },
            {
              name: "Creative Studio",
              category: "Portfolio",
              desc: "Bold & Creative",
              bg: "rgba(10,70,50,0.45)",
              accent: "#a0ffcc",
            },
            {
              name: "Monthsary Bliss",
              category: "Event",
              desc: "Sweet & Playful",
              bg: "rgba(30,77,183,0.3)",
              accent: "#aac4f0",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: t.bg,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: 600,
                    textAlign: "center",
                    padding: "0 16px",
                  }}
                >
                  {t.name}
                </span>
              </div>
              <div style={{ padding: "16px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    color: t.accent,
                    marginBottom: "4px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ {t.category}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {t.name}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "12px",
                  }}
                >
                  {t.desc}
                </p>
                <button
                  style={{
                    background: "rgba(30,77,183,0.85)",
                    color: "white",
                    border: "none",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Preview →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            color: "rgba(255,255,255,0.6)",
            fontSize: "14px",
          }}
        >
          <p>
            Don&apos;t see what you like?{" "}
            <a
              href="#contact"
              style={{
                color: "#C4A882",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Let&apos;s build something custom →
            </a>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          background: "#0A1628",
          padding: "80px 24px",
          textAlign: "center",
          marginTop: "-2px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "12px",
          }}
        >
          Get In Touch
        </motion.h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            marginBottom: "48px",
            fontSize: "1rem",
          }}
        >
          Ready to create something beautiful? Reach us here.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-grid"
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="#1877F2">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              ),
              label: "Facebook",
              value: "Webories",
              href: "https://web.facebook.com/profile.php?id=61590736263312",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <defs>
                    <radialGradient id="ig-grad" r="150%" cx="30%" cy="107%">
                      <stop stopColor="#fdf497" offset="0" />
                      <stop stopColor="#fd5949" offset="0.45" />
                      <stop stopColor="#d6249f" offset="0.6" />
                      <stop stopColor="#285AEB" offset="1" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#ig-grad)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                  />
                </svg>
              ),
              label: "Instagram",
              value: "@webories.site",
              href: "https://www.instagram.com/webories.site",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              ),
              label: "TikTok",
              value: "@webories.site",
              href: "https://www.tiktok.com/@webories.site",
            },
            {
              icon: "📞",
              label: "Phone",
              value: "0952 477 3195",
              href: "tel:+639524773195",
            },
          ].map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="contact-card"
            >
              <span
                style={{
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {contact.icon}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {contact.label}
              </span>
              <span
                style={{ color: "#C4A882", fontSize: "13px", fontWeight: 600 }}
              >
                {contact.value}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#060E1A",
          padding: "24px",
          textAlign: "center",
          color: "rgba(255,255,255,0.3)",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} Webories. All rights reserved.
      </footer>
    </main>
  );
}
