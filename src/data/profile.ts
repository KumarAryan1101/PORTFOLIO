export const profile = {
  name: "Kumar Aryan",
  role: "ECE Undergrad · IoT · Web · Product",
  tagline: "Turning ideas into things that run — IoT, embedded & web.",
  college: "IIIT Nagpur '28",
  location: "Nagpur, Maharashtra",
  email: "kumararyannn55@gmail.com",
  github: "https://github.com/KumarAryan1101",
  linkedin: "https://www.linkedin.com/in/kumar-aryan-871294333",
  avatar: "https://avatars.githubusercontent.com/u/215197737?v=4",
};

export interface Project {
  name: string;
  blurb: string;
  detail: string;
  stack: string[];
  url: string;
  accent: string; // tailwind bg class
  emoji: string;
}

export const projects: Project[] = [
  {
    name: "NotesGPT",
    blurb: "AI-powered note-taking & study assistant",
    detail:
      "Turns raw lecture notes into summaries, flashcards and quiz-ready material using LLMs. Built to fix my own exam-week chaos.",
    stack: ["JavaScript", "Node.js", "OpenAI API"],
    url: "https://github.com/KumarAryan1101/NotesGPT",
    accent: "bg-vio",
    emoji: "🧠",
  },
  {
    name: "Cityzen",
    blurb: "Civic-engagement & city services platform",
    detail:
      "A web app that lets citizens report issues, track civic services and engage with their city — product-thinking applied to public infrastructure.",
    stack: ["TypeScript", "React", "Next.js"],
    url: "https://github.com/KumarAryan1101/cityzen",
    accent: "bg-sky",
    emoji: "🏙️",
  },
  {
    name: "GSC-2K26",
    blurb: "Google Solution Challenge 2026 build",
    detail:
      "Team project for the Google Solution Challenge — solving a real-world problem aligned with the UN SDGs under real deadlines.",
    stack: ["TypeScript", "React", "Firebase"],
    url: "https://github.com/KumarAryan1101/GSC-2K26",
    accent: "bg-hot",
    emoji: "🌍",
  },
  {
    name: "Sweets Shop",
    blurb: "E-commerce storefront for a sweet shop",
    detail:
      "A full storefront — catalogue, cart and checkout flow — built end-to-end with a focus on clean UX for non-technical shop owners.",
    stack: ["TypeScript", "React", "Tailwind"],
    url: "https://github.com/KumarAryan1101/SWEETS-SHOP-",
    accent: "bg-tang",
    emoji: "🍬",
  },
];

projects.push({
  name: "MessMate — PM Case Study",
  blurb: "0→1 product spec for campus mess feedback",
  detail:
    "End-to-end product management case study: interviewed 40+ IIIT Nagpur students about mess-food complaints, mapped the pain points, wrote a full PRD, and scoped an MVP — a QR-based daily meal-rating flow with a weekly insights dashboard for the mess committee. Defined north-star metric (weekly active raters), prioritized with RICE, and designed the rollout in Figma before writing a single line of code.",
  stack: ["User Research", "PRD Writing", "RICE Prioritization", "Figma", "Metrics Design"],
  url: "https://github.com/KumarAryan1101",
  accent: "bg-black",
  emoji: "📋",
});

projects.push({
  name: "The Lab — this website",
  blurb: "My interactive design playground",
  detail:
    "The site you're on right now — an experiment in motion design, generative shaders and playful interaction. Every hover, scroll and reveal here is hand-tuned. Consider it a living project: it ships a new experiment whenever curiosity strikes.",
  stack: ["Interaction Design", "Motion Design", "Creative Coding"],
  url: "https://github.com/KumarAryan1101",
  accent: "bg-vio",
  emoji: "🧪",
});

export interface Involvement {
  role: string;
  org: string;
  period: string;
  skills: string[];
  accent: string;
  emoji: string;
}

export const involvements: Involvement[] = [
  {
    role: "Sports Coordinator",
    org: "IIIT Nagpur",
    period: "2025–26",
    skills: ["Leadership", "Event Ops", "Budgeting", "Team Coordination"],
    accent: "bg-hot",
    emoji: "🏆",
  },
  {
    role: "Management Lead",
    org: "Estoria — Dramatics Club",
    period: "2025–26",
    skills: ["Production Management", "Scheduling", "Crisis Handling", "People Management"],
    accent: "bg-vio",
    emoji: "🎭",
  },
  {
    role: "Core Member",
    org: "Event Management · PR & Outreach · Marketing",
    period: "Ongoing",
    skills: ["Stakeholder Management", "Publicity Strategy", "Negotiation", "Brand Communication"],
    accent: "bg-sky",
    emoji: "📣",
  },
];

export const skills = {
  Programming: ["C", "C++", "Python", "TypeScript"],
  Frameworks: ["React", "Next.js", "Node.js", "Tailwind"],
  Hardware: ["IoT", "Embedded Systems", "Arduino", "Sensors"],
  Product: ["Product Strategy", "User Research", "Roadmapping", "MVP Scoping"],
  Tools: ["Git", "GitHub", "VS Code", "Figma"],
};
