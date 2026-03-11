import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const assetBase = import.meta.env.BASE_URL || "/";
const starImages = [
  `${assetBase}assets/artifacts/star01.png`,
  `${assetBase}assets/artifacts/star02.png`,
  `${assetBase}assets/artifacts/star03.png`,
];

interface Particle {
  id: number;
  x: number;
  y: number;
  src: string;
  size: number;
  rotation: number;
  floatX: number;
  floatY: number;
}

const SPAWN_DISTANCE = 40; // px between spawns
const MAX_PARTICLES = 18;

const StarCursor = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const distAcc = useRef(0);
  const idRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    distAcc.current += dist;
    lastPos.current = { x: e.clientX, y: e.clientY };

    if (distAcc.current >= SPAWN_DISTANCE) {
      distAcc.current = 0;
      const newParticle: Particle = {
        id: idRef.current++,
        x: e.clientX,
        y: e.clientY,
        src: starImages[Math.floor(Math.random() * starImages.length)],
        size: 12 + Math.random() * 14,
        rotation: Math.random() * 360,
        floatX: (Math.random() - 0.5) * 30,
        floatY: -(15 + Math.random() * 25),
      };
      setParticles((prev) => [...prev.slice(-MAX_PARTICLES + 1), newParticle]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.img
            key={p.id}
            src={p.src}
            alt=""
            aria-hidden
            className="absolute pointer-events-none select-none"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0.85, scale: 0.5, rotate: p.rotation }}
            animate={{
              opacity: 0,
              scale: [0.8, 1.1, 0],
              x: p.floatX,
              y: p.floatY,
              rotate: p.rotation + 90,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onAnimationComplete={() => removeParticle(p.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default StarCursor;
