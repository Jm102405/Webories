"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const contacts = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#1877F2">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    value: "Webories",
    href: "https://web.facebook.com/profile.php?id=61590736263312",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28">
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
      <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--primary)">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
    label: "TikTok",
    value: "@webories.site",
    href: "https://www.tiktok.com/@webories.site",
  },
  {
    icon: <Phone size={28} fill="var(--primary)" color="var(--primary)" />,
    label: "Phone",
    value: "0952 477 3195",
    href: "tel:+639524773195",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#F5F0E8",
        padding: "var(--section-y) var(--section-x)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          backgroundColor: "#E8DCC8",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.6,
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
              backgroundColor: "#E8DCC8",
              color: "var(--primary)",
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
            Get In Touch
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "var(--primary)",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s Build Your
            <br />
            Digital Home
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 17px)",
              color: "#6B6560",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Ready to create something beautiful? Reach us here.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-grid"
        >
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                padding: "32px 24px",
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(27,42,74,0.08)",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: "#F5F0E8",
                }}
              >
                {contact.icon}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "#6B6560",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {contact.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--primary)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {contact.value}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
