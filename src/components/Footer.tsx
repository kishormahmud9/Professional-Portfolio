import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin, IconTwitterX } from "./icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: IconGithub, href: "https://github.com", label: "GitHub" },
  { icon: IconLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: IconTwitterX, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Mail, href: "mailto:hello@kishor.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Soft gradient divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-card">
              K
            </span>
            Kishor Mahmud
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground hover:shadow-card"
              >
                <s.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Kishor Mahmud. Crafted with care in Bangladesh.</p>
          <p>Full Stack Developer · AI Product Builder</p>
        </div>
      </div>
    </footer>
  );
}
