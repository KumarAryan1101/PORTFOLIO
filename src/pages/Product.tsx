import { motion } from "framer-motion";
import {
  Page,
  BackgroundEffects,
  SectionTitle,
  TiltCard,
} from "../components/ui";

const principles = [
  {
    title: "User Research First",
    emoji: "🔍",
    accent: "bg-sky",
    text: "Before Cityzen had a single line of code, it had conversations — what actually stops people from reporting civic issues? Assumptions are cheap; validated ones compound.",
  },
  {
    title: "Ruthless MVP Scoping",
    emoji: "✂️",
    accent: "bg-hot",
    text: "Every project I ship starts as the smallest thing that proves the core loop. NotesGPT v1 did exactly one thing: notes in, flashcards out. Everything else waited.",
  },
  {
    title: "Metrics Over Vibes",
    emoji: "📊",
    accent: "bg-vio",
    text: "A feature isn't done when it's merged — it's done when someone uses it twice. I define the success metric before building, not after.",
  },
  {
    title: "Hardware Empathy",
    emoji: "🔌",
    accent: "bg-tang",
    text: "Coming from ECE/IoT, I think about constraints — power, latency, cost — the same way a PM thinks about trade-offs. Real products live inside real limits.",
  },
];

const process = [
  { step: "01", label: "Discover", detail: "user interviews · problem framing" },
  { step: "02", label: "Define", detail: "PRD · success metrics · scope cuts" },
  { step: "03", label: "Build", detail: "MVP · tight feedback loops" },
  { step: "04", label: "Measure", detail: "usage data · retention signals" },
  { step: "05", label: "Iterate", detail: "kill, keep, or double down" },
];

export const Product = () => (
  <Page>
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32">
      <BackgroundEffects />
      <SectionTitle>Product Thinking</SectionTitle>
      <p className="relative z-10 mx-auto mb-14 max-w-xl text-center font-medium text-gray-700">
        Engineer by training, product-minded by choice. This is how I decide{" "}
        <b>what</b> to build — not just how.
      </p>

      {/* principles */}
      <div className="relative z-10 mx-auto mb-20 grid max-w-5xl gap-6 sm:grid-cols-2">
        {principles.map((p, i) => (
          <TiltCard key={p.title} delay={i * 0.1}>
            <div
              className={`absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black ${p.accent} text-2xl shadow-brutal-sm`}
            >
              {p.emoji}
            </div>
            <h3 className="mb-2 text-xl font-black">{p.title}</h3>
            <p className="text-sm font-medium leading-relaxed text-gray-700">
              {p.text}
            </p>
          </TiltCard>
        ))}
      </div>

      {/* process timeline */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-mono text-2xl font-black"
        >
          MY LOOP ⟳
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-5">
          {process.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border-3 border-black bg-white p-4 text-center shadow-brutal"
            >
              <span className="font-mono text-3xl font-black text-gray-200">
                {s.step}
              </span>
              <p className="mt-1 font-black">{s.label}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">
                {s.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Page>
);
