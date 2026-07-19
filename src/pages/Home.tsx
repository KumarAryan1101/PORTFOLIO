import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RevealWaveImage } from "../components/RevealWaveImage";
import { FrameSequence } from "../components/FrameSequence";
import {
  Page,
  BackgroundEffects,
  Marquee,
  BrutalButton,
  SectionTitle,
  TiltCard,
  Counter,
} from "../components/ui";
import { profile, projects } from "../data/profile";

const stats = [
  { label: "Projects shipped", value: projects.length, accent: "bg-vio" },
  { label: "Years at IIIT Nagpur", value: 2, accent: "bg-sky" },
  { label: "Domains (IoT/Web/PM)", value: 3, accent: "bg-hot" },
];

export const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  return (
  <Page>
    {/* ================= HERO ================= */}
    <section className="relative overflow-hidden pt-28">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 inline-block rounded-lg border-2 border-black bg-acid px-3 py-1 font-mono text-xs font-black uppercase shadow-brutal-sm"
          >
            ⚡ {profile.college} · ECE · IoT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black leading-[0.95] sm:text-7xl"
          >
            KUMAR
            <br />
            <span className="text-stroke">ARYAN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-md text-lg font-medium text-gray-700"
          >
            {profile.tagline} I build across{" "}
            <b>embedded systems</b>, the <b>web</b>, and think in{" "}
            <b>product</b> — from user research to shipped MVP.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/projects">
              <BrutalButton className="bg-black text-white">
                SEE MY WORK →
              </BrutalButton>
            </Link>
            <Link to="/contact">
              <BrutalButton className="bg-white !text-black">
                HIRE ME
              </BrutalButton>
            </Link>
          </motion.div>
        </div>

        {/* WebGL dither / flashlight reveal — hover it */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <div className="mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-xl border-3 border-black bg-black shadow-brutal-xl">
            <RevealWaveImage src="/media/portrait.png" className="h-full w-full" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg border-2 border-black bg-hot px-3 py-1 font-mono text-xs font-black text-white shadow-brutal-sm">
            HOVER ME — FLASHLIGHT SHADER ✨
          </div>
        </motion.div>
      </div>

      <Marquee
        items={[
          "IoT",
          "Embedded Systems",
          "React",
          "Next.js",
          "Product Strategy",
          "User Research",
          "C / C++",
          "Python",
          "TypeScript",
        ]}
      />
    </section>

    {/* ================= STATS (frame-loop as ambient background) ================= */}
    <section className="relative overflow-hidden py-24">
      <FrameSequence className="opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="relative z-10 mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <TiltCard key={s.label} delay={i * 0.15} className="text-center">
            <div
              className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${s.accent} font-mono text-2xl font-black text-white shadow-brutal-sm`}
            >
              <Counter from={0} to={s.value} />
            </div>
            <p className="font-bold">{s.label}</p>
          </TiltCard>
        ))}
      </div>
    </section>

    {/* ================= FEATURED PROJECTS TEASER ================= */}
    <section className="relative overflow-hidden bg-white py-20 grid-paper">
      <SectionTitle>Featured Work</SectionTitle>
      <div className="relative z-10 mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2">
        {projects.slice(0, 2).map((p, i) => (
          <TiltCard key={p.name} delay={i * 0.15}>
            <div
              className={`absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black ${p.accent} text-2xl shadow-brutal-sm`}
            >
              {p.emoji}
            </div>
            <h3 className="mb-2 text-xl font-black">{p.name}</h3>
            <p className="mb-4 text-sm font-medium text-gray-700">{p.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border-2 border-black bg-gray-50 px-2 py-0.5 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
      <div className="relative z-10 mt-10 text-center">
        <Link to="/projects">
          <BrutalButton className="bg-vio">ALL PROJECTS →</BrutalButton>
        </Link>
      </div>
    </section>

    {/* ================= VIDEO ================= */}
    <section className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 font-mono text-3xl font-black text-white sm:text-4xl"
        >
          THE <span className="text-acid">SHOWREEL</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl border-3 border-white shadow-[8px_8px_0px_0px_rgba(195,255,0,0.9)]"
        >
          <video
            ref={videoRef}
            src="/media/showreel.mp4"
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <button
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              v.muted = !v.muted;
              setSoundOn(!v.muted);
            }}
            className="absolute bottom-4 right-4 rounded-lg border-2 border-black bg-acid px-4 py-2 font-mono text-xs font-black shadow-brutal-sm transition-transform hover:scale-105"
          >
            {soundOn ? "🔊 SOUND ON" : "🔇 TAP FOR SOUND"}
          </button>
        </motion.div>
        <p className="mt-4 font-mono text-xs text-gray-400">
          "i told you" — a small story about building anyway.
        </p>
      </div>
    </section>
  </Page>
  );
};
