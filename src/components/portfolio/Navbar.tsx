import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check, Sun, Moon } from "lucide-react";
import { useT, useLang, type Lang } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export function Navbar() {
  const t = useT();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: "light" | "dark" =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[min(96%,1100px)] -translate-x-1/2"
    >
      <div
        className={`glass-strong flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-[0_8px_40px_-12px_oklch(0_0_0/0.6)]" : ""
        }`}
      >
        {/* Left: empty for cleanness, just a subtle dot */}
        <div className="flex h-7 w-7 items-center justify-center">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow-teal)]" />
        </div>

        {/* Center menu */}
        <nav className="hidden items-center gap-2 md:flex md:translate-x-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right: language */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-9 w-9 items-center justify-center rounded-full glass md:hidden"
          >
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="glass flex h-8 w-8 items-center justify-center rounded-full text-foreground transition hover:text-primary"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={14} />
              ) : (
                <Moon size={14} />
              )
            ) : (
              <span className="h-[14px] w-[14px]" />
            )}
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-foreground transition hover:border-primary/40"
            >
              <span className="text-base leading-none">{current.flag}</span>
              <span className="hidden uppercase tracking-wider sm:inline">{current.code}</span>
              <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="glass-strong absolute right-0 mt-2 w-44 overflow-hidden rounded-xl p-1"
                >
                  {LANGS.map((l) => (
                    <li key={l.code}>
                      <button
                        onClick={() => {
                          setLang(l.code);
                          setOpen(false);
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-foreground/5"
                      >
                        <span>{l.flag}</span>
                        <span className="flex-1 text-left">{l.label}</span>
                        {lang === l.code && <Check size={14} className="text-primary" />}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="glass-strong mt-3 overflow-hidden rounded-2xl border border-white/10 p-2 shadow-[0_10px_40px_-12px_oklch(0_0_0/.6)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l, index) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileMenu(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                  }}
                  className="group relative overflow-hidden rounded-xl px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:text-foreground"
                >
                  <span className="relative z-10">{l.label}</span>

                  {/* Glow hover */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Linha animada */}
                  <span className="absolute bottom-0 left-4 h-px w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-300 group-hover:w-[70%]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
