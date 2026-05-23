import { GraduationCap, Brain } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";

export function Education() {
  const t = useT();
  const items = [
    { icon: GraduationCap, ...t.education.done },
    { icon: Brain, ...t.education.now },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto w-[min(96%,1100px)]">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="bg-gradient-to-r from-orange-700 to-orange-200 bg-clip-text text-transparent text-3xl font-semibold tracking-tight md:text-5xl">
              {t.sections.education}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.sections.educationSub}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className="glass relative h-full overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium tracking-wider text-primary uppercase">
                        {it.tag}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{it.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
