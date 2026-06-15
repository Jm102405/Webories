"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--tertiary)",
        paddingTop: "80px",
        paddingLeft: "var(--section-x)",
        paddingRight: "var(--section-x)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "clamp(280px, 40vw, 560px)",
          height: "clamp(280px, 40vw, 560px)",
          backgroundColor: "var(--secondary)",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 6vw, 96px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              marginBottom: "28px",
            }}
          >
            <Star size={12} />
            Event &amp; Portfolio Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(38px, 5.5vw, 72px)",
              fontWeight: 700,
              color: "var(--primary)",
              lineHeight: 1.15,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Your Special Moments,{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Beautifully
            </span>{" "}
            Crafted
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px, 1.8vw, 18px)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            We design stunning event pages for weddings, anniversaries, and
            birthdays — or build a modern portfolio that gets you noticed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#templates"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "999px",
                fontFamily: "var(--font-headline)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              className="btn-primary"
            >
              View Templates <ArrowRight size={16} />
            </a>

            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                color: "var(--primary)",
                padding: "14px 32px",
                borderRadius: "999px",
                fontFamily: "var(--font-headline)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                border: "1.5px solid var(--primary)",
                transition: "all 0.3s ease",
              }}
              className="btn-outline"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Right — Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: "relative" }}
          className="hero-image-wrap"
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              aspectRatio: "4/5",
              backgroundColor: "var(--secondary)",
              boxShadow: "0 24px 80px rgba(27,42,74,0.12)",
            }}
          >
            {/* Placeholder visual */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, var(--secondary) 0%, var(--secondary-dark) 50%, var(--primary) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "40px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                Every moment deserves a beautiful page
              </div>
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  borderRadius: "2px",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "center",
                }}
              >
                Weddings · Anniversaries · Portfolios
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-20px",
              width: "160px",
              height: "160px",
              backgroundColor: "var(--secondary)",
              borderRadius: "20px",
              zIndex: -1,
              opacity: 0.6,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
