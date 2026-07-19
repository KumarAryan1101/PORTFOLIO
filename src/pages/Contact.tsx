import { motion } from "framer-motion";
import {
  Page,
  BackgroundEffects,
  SectionTitle,
  TiltCard,
  BrutalButton,
} from "../components/ui";
import { profile } from "../data/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    accent: "bg-hot",
    emoji: "✉️",
  },
  {
    label: "GitHub",
    value: "@KumarAryan1101",
    href: profile.github,
    accent: "bg-black",
    emoji: "🐙",
  },
  {
    label: "LinkedIn",
    value: "/in/kumar-aryan",
    href: profile.linkedin,
    accent: "bg-sky",
    emoji: "💼",
  },
];

export const Contact = () => (
  <Page>
    <section className="relative flex min-h-screen flex-col overflow-hidden px-4 pb-24 pt-32">
      <BackgroundEffects />
      <SectionTitle>Let's Talk</SectionTitle>
      <p className="relative z-10 mx-auto mb-14 max-w-md text-center font-medium text-gray-700">
        Internships, hackathon teams, product ideas, or just IoT nerdery — my
        inbox is open.
      </p>

      <div className="relative z-10 mx-auto grid w-full max-w-4xl gap-6 sm:grid-cols-3">
        {channels.map((c, i) => (
          <TiltCard key={c.label} delay={i * 0.12} className="text-center">
            <motion.div
              className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${c.accent} text-3xl shadow-brutal-sm`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
            >
              {c.emoji}
            </motion.div>
            <h3 className="text-lg font-black">{c.label}</h3>
            <p className="mb-4 break-all font-mono text-xs font-bold text-gray-600">
              {c.value}
            </p>
            <BrutalButton href={c.href} className={`w-full ${c.accent}`}>
              OPEN →
            </BrutalButton>
          </TiltCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto mt-16 max-w-2xl rounded-xl border-3 border-black bg-acid p-8 text-center shadow-brutal-lg"
      >
        <h3 className="text-2xl font-black">
          Currently open to internships & collabs 🚀
        </h3>
        <p className="mt-2 font-medium">
          {profile.location} · remote-friendly · fast replies
        </p>
      </motion.div>
    </section>
  </Page>
);
