"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Star } from "lucide-react";

const services = [
  {
    icon: <Calendar size={32} />,
    label: "Events",
    title: "Event Pages",
    desc: "Wedding, anniversary, monthsary, birthday, or any special occasion — we craft beautiful event pages tailored to your special occasion. Choose from our curated templates or go fully custom.",
  },
  {
    icon: <Briefcase size={32} />,
    label: "Portfolio",
    title: "Portfolio Design",
    desc: "Modern, professional portfolios built to impress. We design stunning showcase pages that highlight your work and get you noticed by clients worldwide.",
  },
  {
    icon: <Star size={32} />,
    label: "Custom",
    title: "Custom Builds",
    desc: "Have something unique in mind? We build fully custom websites from scratch — your vision, your brand, your way. No templates, no limits.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--primary)",
        padding: "var(--section-y) var(--section-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          backgroundColor: "var(--primary-light)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "250px",
          height: "250px",
          backgroundColor: "var(--gold)",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.12,
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
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(232,220,200,0.12)",
              color: "var(--secondary)",
              padding: "6px 16px",
              borderRadius: "999px",
              fontSize: "12px",
              fontFamily: "var(--font-headline)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            What We Offer
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Curated Digital Services
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Two powerful services, beautifully crafted for you
          </p>
        </motion.div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "clamp(28px, 4vw, 40px)",
                transition: "all 0.3s ease",
              }}
              className="service-card"
            >
              {/* Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(232,220,200,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--secondary)",
                  marginBottom: "24px",
                }}
              >
                {s.icon}
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "10px",
                }}
              >
                ✦ {s.label}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(14px, 1.4vw, 15px)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                }}
              >
                {s.desc}
              </p>

              {/* Link */}

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-headline)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--secondary)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
