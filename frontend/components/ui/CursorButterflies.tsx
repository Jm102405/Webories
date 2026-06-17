"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = [
  "rgba(196,168,130,0.85)",
  "rgba(196,168,130,0.6)",
  "rgba(27,42,74,0.3)",
  "rgba(232,220,200,0.9)",
];

const ButterflyIcon = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M50 50 C30 30, 0 20, 5 45 C10 65, 35 60, 50 50Z" fill={color} />
    <path d="M50 50 C70 30, 100 20, 95 45 C90 65, 65 60, 50 50Z" fill={color} />
    <path
      d="M50 50 C35 60, 15 75, 25 85 C35 92, 48 70, 50 50Z"
      fill={color}
      opacity="0.6"
    />
    <path
      d="M50 50 C65 60, 85 75, 75 85 C65 92, 52 70, 50 50Z"
      fill={color}
      opacity="0.6"
    />
    <ellipse cx="50" cy="50" rx="2" ry="6" fill="rgba(27,42,74,0.4)" />
  </svg>
);

interface Butterfly {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  driftX: number;
  rotate: number;
}

let idCounter = 0;

export default function CursorButterflies() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const throttle = useRef(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (throttle.current) return;
      throttle.current = true;
      setTimeout(() => {
        throttle.current = false;
      }, 80);

      const dx = Math.abs(e.clientX - lastPos.current.x);
      const dy = Math.abs(e.clientY - lastPos.current.y);
      if (dx < 8 && dy < 8) return;

      lastPos.current = { x: e.clientX, y: e.clientY };

      const id = idCounter++;
      const size = Math.random() * 14 + 12;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const offsetX = (Math.random() - 0.5) * 24;
      const driftX = (Math.random() - 0.5) * 60;
      const rotate = (Math.random() - 0.5) * 40;

      setButterflies((prev) => [
        ...prev,
        {
          id,
          x: e.clientX + offsetX,
          y: e.clientY,
          size,
          color,
          driftX,
          rotate,
        },
      ]);

      setTimeout(() => {
        setButterflies((prev) => prev.filter((b) => b.id !== id));
      }, 1200);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {butterflies.map((b) => (
        <div
          key={b.id}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            transform: "translate(-50%, -50%)",
            animation: "butterflyFloat 1.2s ease-out forwards",
            ["--drift-x" as string]: `${b.driftX}px`,
            ["--rotate" as string]: `${b.rotate}deg`,   
          }}
        >
          <ButterflyIcon size={b.size} color={b.color} />
        </div>
      ))}
    </div>
  );
}
