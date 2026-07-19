import { motion } from "framer-motion";
import {
  Page,
  BackgroundEffects,
  SectionTitle,
  TiltCard,
} from "../components/ui";
import { RevealWaveImage } from "../components/RevealWaveImage";
import { profile, skills, involvements } from "../data/profile";

const accents = ["bg-vio", "bg-sky", "bg-hot", "bg-tang", "bg-black"];

export const About = () => (
  <Page>
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32">
      <BackgroundEffects />
      <SectionTitle>About Me</SectionTitle>

      <div className="relative z-10 mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* portrait with the shader treatment */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="min-w-0 overflow-hidden rounded-xl border-3 border-black bg-black shadow-brutal-xl"
        >
          <RevealWaveImage src={profile.avatar} className="h-[380px] w-full" />
        </motion.div>

        <div className="min-w-0 space-y-6">
          <TiltCard>
            <h3 className="mb-2 text-xl font-black">The short version</h3>
            <p className="text-sm font-medium leading-relaxed text-gray-700">
              I'm <b>Kumar Aryan</b>, a B.Tech ECE student at{" "}
              <b>IIIT Nagpur</b> (batch of '28) specializing in <b>IoT</b>,
              based in Nagpur, Maharashtra. I live at the intersection of
              hardware and software — comfortable soldering a sensor rig in the
              morning and shipping a Next.js app by night. Lately I've been
              leaning into <b>product management</b>: user research, MVP
              scoping, and figuring out what's actually worth building.
            </p>
          </TiltCard>

          <TiltCard delay={0.1}>
            <h3 className="mb-3 font-mono text-lg font-black">
              $ neofetch --me
            </h3>
            <pre className="overflow-x-auto rounded-lg border-2 border-black bg-black p-4 font-mono text-xs leading-relaxed text-acid">
{`OS ............. Windows, Linux
Uptime ......... 21 years
Host ........... IIIT Nagpur
Kernel ......... B.Tech ECE — IoT Specialization
Languages ...... C, C++, Python, TypeScript
Real ........... English, Hindi
Interests ...... IoT · Embedded · Web · Product`}
            </pre>
          </TiltCard>
        </div>
      </div>

      {/* leadership & campus involvement */}
      <div className="relative z-10 mx-auto mt-16 max-w-5xl">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-center font-mono text-2xl font-black"
        >
          BEYOND THE CLASSROOM 🎪
        </motion.h3>
        <p className="mx-auto mb-8 max-w-xl text-center text-sm font-medium text-gray-700">
          Where I learned the things no lecture teaches — running teams,
          rooms, budgets and last-minute chaos.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {involvements.map((v, i) => (
            <TiltCard key={v.role} delay={i * 0.1}>
              <div
                className={`absolute -right-4 -top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-black ${v.accent} text-2xl shadow-brutal-sm`}
              >
                {v.emoji}
              </div>
              <h4 className="text-lg font-black leading-tight">{v.role}</h4>
              <p className="mt-1 text-sm font-bold text-gray-700">{v.org}</p>
              <p className="mb-3 font-mono text-xs font-bold text-gray-500">
                {v.period}
              </p>
              <div className="flex flex-wrap gap-2">
                {v.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border-2 border-black bg-gray-50 px-2 py-0.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* skills */}
      <div className="relative z-10 mx-auto mt-16 max-w-5xl">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-mono text-2xl font-black"
        >
          THE TOOLKIT 🧰
        </motion.h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items], i) => (
            <TiltCard key={group} delay={i * 0.08}>
              <span
                className={`mb-3 inline-block rounded-md border-2 border-black ${accents[i % accents.length]} px-3 py-1 font-mono text-xs font-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]`}
              >
                {group.toUpperCase()}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    className="rounded-md border-2 border-black bg-gray-50 px-2 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  </Page>
);
