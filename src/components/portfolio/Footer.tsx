import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SOCIAL, useT } from "@/lib/i18n";

export function Footer() {
  const t = useT();
  const links = [
    { icon: Github, href: SOCIAL.github, label: "GitHub" },
    { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
    { icon: Mail, href: SOCIAL.email, label: "Email" },
    { icon: MessageCircle, href: SOCIAL.whatsapp, label: "WhatsApp" },
  ];
  return (
    <footer className="relative py-10">
      <div className="mx-auto w-[min(96%,1100px)]">
        <div className="glass flex flex-col items-center justify-center gap-4 rounded-2xl px-6 py-7 text-center">
          <p className="text-sm tracking-wider text-foreground">
            {t.footer.text} <span className="text-primary">{"</>"}</span>
          </p>
          <div className="flex gap-2">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:scale-110 hover:text-primary"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
