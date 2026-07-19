import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/product", label: "Product" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-xl border-3 border-black bg-white/90 px-4 py-3 shadow-brutal backdrop-blur">
        <NavLink to="/" className="flex items-center gap-2 font-mono text-lg font-black tracking-tight">
          <span>
            KA<span className="text-hot">.</span>dev
          </span>
          {/* the chef & the broth — always cooking something */}
          <span className="relative flex items-end" aria-hidden>
            <motion.span
              className="text-xl"
              animate={{ rotate: [0, -12, 0, 12, 0], y: [0, -1.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              🧑‍🍳
            </motion.span>
            <motion.span
              className="-ml-1 text-lg"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              🍲
            </motion.span>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute -top-1.5 right-1 text-[8px] text-gray-500"
                animate={{ y: [-1, -7], opacity: [0, 0.8, 0], x: [0, i % 2 ? 2 : -2] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.55, ease: "easeOut" }}
              >
                ~
              </motion.span>
            ))}
          </span>
        </NavLink>

        {/* desktop */}
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg border-2 border-transparent px-3 py-1.5 font-mono text-sm font-bold transition-all",
                    isActive
                      ? "border-black bg-acid shadow-brutal-sm"
                      : "hover:border-black hover:bg-gray-100"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          className="rounded-lg border-2 border-black bg-white px-3 py-1.5 font-mono text-sm font-black shadow-brutal-sm sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-5xl space-y-2 rounded-xl border-3 border-black bg-white p-4 shadow-brutal sm:hidden"
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-lg border-2 px-3 py-2 font-mono font-bold",
                      isActive
                        ? "border-black bg-acid shadow-brutal-sm"
                        : "border-transparent hover:border-black"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
