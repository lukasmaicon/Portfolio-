import { Code2, Palette, Brain, GitBranch } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";

export function Skills() {
  const t = useT();

  const cards: Array<{
    icon: typeof Code2;
    title: string;
    desc: string;
    tags: string[];
    featured?: boolean;
  }> = [
    {
      icon: Code2,
      ...t.skills.c1,
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
    },

    {
      icon: Palette,
      ...t.skills.c2,
      tags: ["Figma", "UI Design", "Prototipagem"],
    },

    {
      icon: Brain,
      ...t.skills.c3,
      tags: ["Cursor", "ChatGPT", "Copilot", "Claude"],
      featured: true,
    },

    {
      icon: GitBranch,
      ...t.skills.c4,
      tags: ["Git", "GitHub", "SQL"],
    },
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto w-[min(96%,1100px)]">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="bg-gradient-to-r from-orange-700 to-orange-200 bg-clip-text text-transparent text-3xl font-semibold tracking-tight md:text-5xl">
              {t.sections.skills}
            </h2>

            <p className="mt-3 text-muted-foreground">{t.sections.skillsSub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((c, i) => {
            const Icon = c.icon;

            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass group relative h-full overflow-hidden rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
                  {c.featured && (
                    <span className="absolute top-4 right-4 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                      Uso Contínuo
                    </span>
                  )}

                  <div className="glass mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>

                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
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
