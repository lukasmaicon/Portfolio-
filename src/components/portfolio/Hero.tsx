import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Hero() {
  const t = useT();

  const baseWords = t.hero.title.split(" ");
  const rotating = ["React", "TypeScript", "UI/UX"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center pt-32 pb-20"
    >
      <div className="mx-auto w-[min(96%,1100px)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center md:p-14"
        >
          {/* decorative glow */}
          <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-wider text-primary uppercase"
          >
            <Sparkles size={12} /> {t.hero.role}
          </motion.div>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
            {baseWords.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.35 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.25em] inline-block"
              >
                {w}
              </motion.span>
            ))}
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating[idx]}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  {rotating[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_0_30px_-4px_var(--glow-orange)] transition hover:scale-[1.03] hover:shadow-[0_0_50px_0px_var(--glow-orange)]"
            >
              {t.hero.cta}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-white/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-md transition hover:border-primary hover:text-primary hover:shadow-[0_0_25px_-6px_var(--glow-orange)]"
            >
              <MessageCircle size={16} /> {t.hero.ctaAlt}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
