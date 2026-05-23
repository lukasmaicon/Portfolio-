import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export function Projects() {
  const t = useT();

  const projectImages: Record<number, string> = {
    0: p1, // Card 1 -> WoodModern
    1: p2, // Card 2 -> SushiTech
    2: p3, // Card 3 -> Aura
    3: p4, // Card 4 -> HubControl
    4: p5, // Card 5 -> Finans
    5: p6, // Card 6 -> Spotifi Clone
  };

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto w-[min(96%,1100px)]">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="bg-gradient-to-r from-orange-700 to-orange-200 bg-clip-text text-transparent text-3xl font-semibold tracking-tight md:text-5xl">
              {t.sections.projects}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.sections.projectsSub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projectList.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article
                className="glass-card group relative h-full overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/30"
                style={{
                  boxShadow: "0 8px 30px rgba(249,115,22,0.30)",
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[i] || p1}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] tracking-wide text-primary uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground transition hover:text-primary"
                    >
                      <ExternalLink size={14} /> Deploy
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground transition hover:text-primary"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
