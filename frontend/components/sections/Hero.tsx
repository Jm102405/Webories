"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        backgroundColor: "#F5F0E8",
        paddingTop: "clamp(70px, 6vh, 80px)",
        paddingBottom: "clamp(40px, 5vh, 64px)",
        paddingLeft: "var(--section-x)",
        paddingRight: "var(--section-x)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
              backgroundColor: "#E8DCC8",
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
            <Star size={12} />
            Event &amp; Portfolio Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              fontWeight: 700,
              color: "var(--primary)",
              lineHeight: 1.15,
              marginBottom: "14px",
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
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "#6B6560",
              lineHeight: 1.75,
              marginBottom: "24px",
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
          </motion.div>
        </div>

        {/* Right — Image */}
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
              height: "clamp(320px, 55vh, 480px)",
              backgroundColor: "#EDE3D0",
              boxShadow: "0 24px 80px rgba(27,42,74,0.14)",
              border: "1px solid rgba(27,42,74,0.08)",
              position: "relative",
            }}
          >
            <Image
              src="/logoicon.png"
              alt="Webories"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Decorative corner block */}
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-16px",
              width: "120px",
              height: "120px",
              backgroundColor: "#E8DCC8",
              borderRadius: "16px",
              zIndex: -1,
              opacity: 0.7,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
