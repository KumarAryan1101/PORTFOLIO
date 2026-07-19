import { motion } from "framer-motion";
import {
  Page,
  BackgroundEffects,
  SectionTitle,
  TiltCard,
  BrutalButton,
} from "../components/ui";
import { projects } from "../data/profile";

export const Projects = () => (
  <Page>
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32">
      <BackgroundEffects />
      <SectionTitle>Projects</SectionTitle>
      <p className="relative z-10 mx-auto mb-12 max-w-xl text-center font-medium text-gray-700">
        Pulled straight from my GitHub — each one shipped, each one taught me
        something about building for real users.
      </p>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <TiltCard key={p.name} delay={i * 0.12}>
            <motion.div
              className={`absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black ${p.accent} text-3xl shadow-brutal-sm`}
              animate={{
                rotate: [0, 10, 0, -10, 0],
                y: [0, -5, 5, -3, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: [0.76, 0, 0.24, 1] }}
            >
              {p.emoji}
            </motion.div>

            <h3 className="mb-1 text-2xl font-black">{p.name}</h3>
            <p className={`mb-3 inline-block rounded-md border-2 border-black ${p.accent} px-2 py-0.5 font-mono text-xs font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]`}>
              {p.blurb}
            </p>
            <p className="mb-4 text-sm font-medium leading-relaxed text-gray-700">
              {p.detail}
            </p>

            <div className="mb-5 space-y-2">
              {p.stack.map((t, j) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-2 rounded-md border-2 border-black bg-gray-50 p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-md border border-black ${p.accent} text-xs font-bold text-white`}
                  >
                    ✓
                  </span>
                  <span className="text-sm font-bold">{t}</span>
                </motion.div>
              ))}
            </div>

            <BrutalButton href={p.url} className={`w-full text-center ${p.accent}`}>
              VIEW ON GITHUB →
            </BrutalButton>
          </TiltCard>
        ))}
      </div>
    </section>
  </Page>
);
