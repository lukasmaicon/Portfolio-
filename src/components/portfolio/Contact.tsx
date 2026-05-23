import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT, WHATSAPP } from "@/lib/i18n";

export function Contact() {
  const t = useT();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Olá Lucas! Sou ${name || "..."}, ${message}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto w-[min(96%,720px)]">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="bg-gradient-to-r from-orange-700 to-orange-200 bg-clip-text text-transparent text-3xl font-semibold tracking-tight md:text-5xl">
              {t.sections.contact}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.sections.contactSub}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass-strong rounded-2xl p-8">
            <div className="space-y-5">
              <div>
                <label className="text-xs tracking-wider text-muted-foreground uppercase">
                  {t.contact.name}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="glass mt-2 w-full rounded-xl px-4 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs tracking-wider text-muted-foreground uppercase">
                  {t.contact.message}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="glass mt-2 w-full resize-none rounded-xl px-4 py-3 text-foreground outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-8px_var(--glow-teal)] transition hover:scale-[1.02]"
              >
                {t.contact.send}
                <Send size={16} className="transition group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
