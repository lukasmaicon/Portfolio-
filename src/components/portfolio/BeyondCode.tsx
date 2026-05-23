import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";
import mapImg from "@/assets/map.jpg";
import mapLight from "@/assets/map-light.jpg";
import { useState, useEffect } from "react";

const interests = [
  { labelKey: 0, g: "from-orange-500 to-orange-300" },
  { labelKey: 1, g: "from-orange-500 to-orange-300" },
  { labelKey: 2, g: "from-orange-500 to-orange-300" },
  { labelKey: 3, g: "from-orange-500 to-orange-300" },
  { labelKey: 4, g: "from-orange-500 to-orange-300" },
  { labelKey: 5, g: "from-orange-500 to-orange-300" },
];

export function BeyondCode() {
  const t = useT();
  const translatedInterests = t.sections.interests;
  const [isDark, setIsDark] = useState(false);
  const mapImage = isDark ? mapImg : mapLight;

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme(); // primeira vez

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="relative py-24">
      <div className="mx-auto grid w-[min(99%,1100px)] grid-cols-1 gap-5 lg:grid-cols-2">
        <Reveal>
          <div
            className="glass group h-full rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,140,0,0.18)] hover:border-primary/30"
            style={{
              boxShadow: "0 10px 35px rgba(249,115,22,0.28)",
            }}
          >
            <h2 className="bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent text-3xl font-semibold tracking-tight md:text-5xl leading-normal">
              {t.sections.beyond}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.sections.beyondText}</p>
            <div className="mt-9 flex flex-wrap gap-10.5">
              {interests.map((it) => (
                <span
                  key={it.labelKey}
                  className={`rounded-full bg-gradient-to-br ${it.g} border border-white/40 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-700/10 transition hover:scale-110 hover:shadow-xl`}
                >
                  {translatedInterests[it.labelKey]}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            className={`group relative h-full min-h-[320px] overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(255,140,0,0.20)] ${
              isDark ? "border-white/10 bg-black" : "border-orange-200/60 bg-white"
            }`}
            style={{
              boxShadow: "0 10px 35px rgba(249,115,22,0.28)",
            }}
          >
            <img
              src={mapImage}
              alt="Poços de Caldas - MG"
              loading="lazy"
              width={800}
              height={800}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ease-out group-hover:scale-105"
            />

            {}
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  : "bg-transparent"
              }`}
            />

            {}
            <div className="relative flex h-full flex-col justify-end p-8">
              <div className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs text-primary transition group-hover:scale-105">
                <MapPin size={12} />
              </div>

              <h3
                className={`mt-3 text-2xl font-semibold ${isDark ? "text-white" : "text-zinc-700"}`}
              >
                {t.sections.locationTitle}
              </h3>

              <p className={`mt-1 text-sm ${isDark ? "text-zinc-400" : "text-zinc-700"}`}>
                {t.sections.locationSubtitle}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
