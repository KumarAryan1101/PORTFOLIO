import { useEffect, useRef } from "react";
import gsap from "gsap";

const FRAME_COUNT = 45;
const framePath = (i: number) =>
  `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

/**
 * Ambient auto-playing frame loop rendered on a canvas — used as a section
 * background rather than a pinned full-screen scrub. Driven by gsap.ticker
 * at a fixed 20fps step so playback is perfectly even (no scroll-jank),
 * drawn at devicePixelRatio for full quality.
 */
export const FrameSequence = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let frame = 0;
    let acc = 0;
    let visible = true;
    const FPS = 12;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      draw();
    };

    const draw = () => {
      const img = images[frame];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = framePath(i);
      if (i === 0) img.onload = () => draw();
      images.push(img);
    }

    const tick = (_t: number, delta: number) => {
      if (!visible) return;
      acc += delta;
      const step = 1000 / FPS;
      if (acc >= step) {
        frame = (frame + Math.floor(acc / step)) % FRAME_COUNT;
        acc %= step;
        draw();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    gsap.ticker.add(tick);

    // don't burn CPU/battery while the section is offscreen (mobile-friendly)
    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(tick);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};
