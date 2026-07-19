import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { cn } from "../lib/utils";

/* ---------- animated number counter ---------- */
export const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(from, to, {
      duration: 1.2,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to]);
  return <span ref={nodeRef} />;
};

/* ---------- 3D-tilt neo-brutalist card ---------- */
export const TiltCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 16 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - (rect.x + rect.width / 2)) / rect.width);
        mouseY.set((e.clientY - (rect.y + rect.height / 2)) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={cn(
        "relative rounded-xl border-3 border-black bg-white p-6 shadow-brutal transition-shadow duration-200 hover:shadow-brutal-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

/* ---------- floating dots + grid backdrop ---------- */
export const BackgroundEffects = () => (
  <>
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-black/5"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, ((i * 7) % 20) - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + (i % 5) * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    <div className="pointer-events-none absolute inset-0 grid-paper" />
  </>
);

/* ---------- section heading in brutalist plate ---------- */
export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="relative z-10 mb-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <h2
        className="mb-3 inline-block rounded-xl border-4 border-black bg-gradient-to-r from-white to-gray-100 px-8 py-4 text-3xl font-black text-slate-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9),_15px_15px_15px_-3px_rgba(0,0,0,0.1)] transition-transform hover:translate-x-1 hover:translate-y-1 sm:text-4xl lg:text-5xl"
      >
        {children}
      </h2>
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-black via-gray-600 to-black"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      />
    </motion.div>
  </div>
);

/* ---------- brutalist button ---------- */
export const BrutalButton = ({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) => {
  const Comp: any = href ? motion.a : motion.button;
  return (
    <Comp
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
      className={cn(
        "inline-block cursor-pointer rounded-lg border-2 border-black bg-black px-6 py-3 font-mono text-sm font-black text-white shadow-brutal transition-shadow hover:shadow-brutal-lg active:shadow-brutal-sm",
        className
      )}
    >
      {children}
    </Comp>
  );
};

/* ---------- infinite marquee strip ---------- */
export const Marquee = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <div
    className={cn(
      "relative z-10 overflow-hidden border-y-3 border-black bg-acid py-3",
      className
    )}
  >
    <motion.div
      className="flex w-max gap-8 whitespace-nowrap font-mono text-lg font-black uppercase tracking-wider"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          {item} <span aria-hidden>✦</span>
        </span>
      ))}
    </motion.div>
  </div>
);

/* ---------- page transition wrapper ---------- */
export const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.main
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="min-h-screen"
  >
    {children}
  </motion.main>
);
