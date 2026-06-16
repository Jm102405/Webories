"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const butterflies = [
  { id: 1, size: 28, top: "-40px", left: "10%", delay: 0, duration: 4 },
  { id: 2, size: 20, top: "-20px", left: "35%", delay: 0.8, duration: 5 },
  { id: 3, size: 24, top: "-60px", left: "55%", delay: 1.5, duration: 4.5 },
  { id: 4, size: 16, top: "-10px", left: "75%", delay: 0.3, duration: 6 },
  { id: 5, size: 22, top: "-50px", left: "20%", delay: 2, duration: 5.5 },
];

const ButterflyIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50 50 C30 30, 0 20, 5 45 C10 65, 35 60, 50 50Z"
      fill="rgba(196, 168, 130, 0.7)"
    />
    <path
      d="M50 50 C70 30, 100 20, 95 45 C90 65, 65 60, 50 50Z"
      fill="rgba(196, 168, 130, 0.7)"
    />
    <path
      d="M50 50 C35 60, 15 75, 25 85 C35 92, 48 70, 50 50Z"
      fill="rgba(196, 168, 130, 0.5)"
    />
    <path
      d="M50 50 C65 60, 85 75, 75 85 C65 92, 52 70, 50 50Z"
      fill="rgba(196, 168, 130, 0.5)"
    />
    <ellipse cx="50" cy="50" rx="2" ry="6" fill="rgba(27, 42, 74, 0.4)" />
  </svg>
);

const sparkles = [
  { id: 1, top: "0%", left: "0%", delay: 0, size: 14 },
  { id: 2, top: "50%", left: "90%", delay: 0.5, size: 10 },
  { id: 3, top: "100%", left: "20%", delay: 1, size: 12 },
  { id: 4, top: "20%", left: "60%", delay: 1.5, size: 8 },
  { id: 5, top: "-10%", left: "75%", delay: 0.8, size: 11 },
  { id: 6, top: "70%", left: "5%", delay: 1.2, size: 9 },
];

const SparkleIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
      fill="rgba(196, 168, 130, 0.9)"
    />
  </svg>
);

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
        <div style={{ position: "relative" }}>
          {/* Butterflies */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            {butterflies.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0.8, 0],
                  y: [0, -30, -60, -90, -130],
                  x: [
                    0,
                    b.id % 2 === 0 ? 20 : -20,
                    b.id % 2 === 0 ? -10 : 10,
                    b.id % 2 === 0 ? 25 : -25,
                    0,
                  ],
                  rotate: [
                    0,
                    b.id % 2 === 0 ? 15 : -15,
                    b.id % 2 === 0 ? -10 : 10,
                    b.id % 2 === 0 ? 20 : -20,
                    0,
                  ],
                }}
                transition={{
                  duration: b.duration,
                  delay: b.delay,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: b.top,
                  left: b.left,
                }}
              >
                <motion.div
                  animate={{ scaleX: [1, 0.4, 1, 0.4, 1] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ButterflyIcon size={b.size} />
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            <span style={{ position: "relative", display: "inline-block" }}>
              {/* Sparkles around Beautifully */}
              {sparkles.map((s) => (
                <motion.span
                  key={s.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    delay: s.delay,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: s.top,
                    left: s.left,
                    pointerEvents: "none",
                    zIndex: 3,
                  }}
                >
                  <SparkleIcon size={s.size} />
                </motion.span>
              ))}

              {/* Gold Shimmer Sweep */}
              <span
                style={{
                  color: "var(--gold)",
                  fontStyle: "italic",
                  position: "relative",
                  display: "inline-block",
                  overflow: "clip",
                  overflowClipMargin: "8px",
                }}
              >
                Beautifully
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />
              </span>
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          className="hero-image-wrap"
        >
          {/* Glassmorphism Card */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3 / 2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Soft glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "32px",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(196,168,130,0.15), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <motion.div
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.04, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
              style={{ width: "85%", zIndex: 1, position: "relative" }}
            >
              <Image
                src="/logoicon.png"
                alt="Webories"
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
