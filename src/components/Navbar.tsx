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
        <NavLink to="/" className="font-mono text-lg font-black tracking-tight">
          KA<span className="text-hot">.</span>dev
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
