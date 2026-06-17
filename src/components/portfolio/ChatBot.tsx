import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useT, SOCIAL, WHATSAPP } from "@/lib/i18n";

type Msg = {
  from: "bot" | "user";
  text: string;
  link?: string;
};

export function ChatBot() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: t.chat.hi }]);

  useEffect(() => {
    setMsgs([{ from: "bot", text: t.chat.hi }]);
  }, [t.chat.hi]);

  const handle = (q: 1 | 2 | 3) => {
    const userText = q === 1 ? t.chat.q1 : q === 2 ? t.chat.q2 : t.chat.q3;
    const botText = q === 1 ? t.chat.a1 : q === 2 ? t.chat.a2 : t.chat.a3;
    setMsgs((m) => [...m, { from: "user", text: userText }]);
    setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: botText }]), 400);
    if (q === 3) setTimeout(() => window.open(`https://wa.me/${WHATSAPP}`, "_blank"), 600);
    if (q === 2) {
      setTimeout(
        () =>
          setMsgs((m) => [
            ...m,
            {
              from: "bot",
              text: "LinkedIn",
              link: SOCIAL.linkedin,
            },
            {
              from: "bot",
              text: "GitHub",
              link: SOCIAL.github,
            },
          ]),
        700,
      );
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        onClick={() => setOpen((v) => !v)}
        className="animate-pulse-glow fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-110"
        aria-label="Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="m"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong fixed right-5 bottom-24 z-50 flex h-[460px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="relative">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <MessageCircle size={14} />
                </div>
                <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-background" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.chat.assistantName}</p>

                <p className="text-[10px] text-muted-foreground">{t.chat.status}</p>
              </div>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto px-4 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                      m.from === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass text-foreground"
                    }`}
                  >
                    {m.link ? (
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                      >
                        {m.text} →
                      </a>
                    ) : (
                      m.text
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 border-t border-white/10 p-3">
              <button
                onClick={() => handle(1)}
                className="glass w-full rounded-xl px-3 py-2 text-left text-xs text-foreground transition hover:border-primary/40"
              >
                {t.chat.q1}
              </button>
              <button
                onClick={() => handle(2)}
                className="glass w-full rounded-xl px-3 py-2 text-left text-xs text-foreground transition hover:border-primary/40"
              >
                {t.chat.q2}
              </button>
              <button
                onClick={() => handle(3)}
                className="glass w-full rounded-xl px-3 py-2 text-left text-xs text-foreground transition hover:border-primary/40"
              >
                {t.chat.q3}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
