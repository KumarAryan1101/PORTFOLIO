import { profile } from "../data/profile";

export const Footer = () => (
  <footer className="relative z-10 border-t-3 border-black bg-black py-10 text-white">
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
      <p className="font-mono text-xl font-black">
        KUMAR ARYAN<span className="text-acid">.</span>
      </p>
      <p className="max-w-md text-sm text-gray-400">{profile.tagline}</p>
      <div className="flex gap-4 font-mono text-sm font-bold">
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline decoration-acid underline-offset-4 hover:text-acid">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline decoration-sky underline-offset-4 hover:text-sky">LinkedIn</a>
        <a href={`mailto:${profile.email}`} className="underline decoration-hot underline-offset-4 hover:text-hot">Email</a>
      </div>
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} Kumar Aryan · IIIT Nagpur
      </p>
    </div>
  </footer>
);
