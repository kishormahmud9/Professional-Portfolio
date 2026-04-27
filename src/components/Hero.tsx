import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Zap, Star, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as [number, number, number, number];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "48h", label: "Avg Response" },
  { value: "5★", label: "Client Rating" },
];

const TRUST_CHIPS = [
  { icon: Zap, text: "Fast Delivery" },
  { icon: Star, text: "Top Rated" },
  { icon: Code2, text: "Clean Code" },
  { icon: Sparkles, text: "AI Specialist" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_SMOOTH },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 28 });

  const blob1X = useTransform(springX, [-1, 1], [-28, 28]);
  const blob1Y = useTransform(springY, [-1, 1], [-28, 28]);
  const blob2X = useTransform(springX, [-1, 1], [22, -22]);
  const blob2Y = useTransform(springY, [-1, 1], [-18, 18]);
  const blob3X = useTransform(springX, [-1, 1], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden min-h-screen flex flex-col pt-20"
    >
      {/* ─── Animated Background ─── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Blob 1 — top-left blue */}
        <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute -top-72 -left-72">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.22, 0.18] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="h-[700px] w-[700px] rounded-full dark:opacity-[0.12]"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, oklch(0.65 0.22 258), transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </motion.div>

        {/* Blob 2 — top-right violet */}
        <motion.div style={{ x: blob2X, y: blob2Y }} className="absolute -top-48 -right-48">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.14, 0.2, 0.14] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="h-[600px] w-[600px] rounded-full dark:opacity-[0.09]"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, oklch(0.68 0.18 290), transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </motion.div>

        {/* Blob 3 — bottom center */}
        <motion.div
          style={{ x: blob3X }}
          className="absolute -bottom-40 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.12, 0.07] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="h-[420px] w-[900px] rounded-full dark:opacity-[0.06]"
            style={{
              background: "radial-gradient(circle, oklch(0.6 0.2 258), transparent 65%)",
              filter: "blur(120px)",
            }}
          />
        </motion.div>
      </div>

      {/* ─── Main Content — flex-1 keeps it from pushing into scroll indicator ─── */}
      <div className="flex flex-1 items-center">
        <div className="container mx-auto px-6 py-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-5 py-2 text-sm font-medium text-muted-foreground backdrop-blur-md shadow-card">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for Senior &amp; Freelance Roles
                <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  Open to Hire
                </span>
              </div>
            </motion.div>

            {/* Headline — three clean lines, no rotating word */}
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-[5.5rem]">
                I Build
                <br />
                <span className="text-gradient">Web Apps &amp; AI</span>
                <br />
                Powered Products
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Helping startups and businesses turn ideas into{" "}
              <span className="font-semibold text-foreground">profitable digital products</span>{" "}
              — from MVP to scale, with engineering that ships and AI that delivers.
            </motion.p>

            {/* Trust chips */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {TRUST_CHIPS.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
                >
                  <Icon className="h-3 w-3 text-primary" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="group relative h-12 overflow-hidden rounded-full bg-gradient-primary px-8 text-base font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-glow hover:scale-[1.03] active:scale-[0.97]"
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me — Let's Talk
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 -z-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-border bg-card/60 px-8 text-base backdrop-blur transition-all duration-300 hover:bg-card hover:scale-[1.02] hover:shadow-card active:scale-[0.97]"
              >
                <a href="#projects">View Projects →</a>
              </Button>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              variants={itemVariants}
              className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {STATS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="cursor-default rounded-2xl border border-border bg-card/50 px-4 py-4 shadow-card backdrop-blur transition-colors duration-300 hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="font-display text-2xl font-bold text-foreground">{value}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Socials + location */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center gap-4 text-muted-foreground"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors duration-200 hover:border-primary/50 hover:text-foreground hover:shadow-card"
                whileHover={{ scale: 1.18, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconGithub className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors duration-200 hover:border-primary/50 hover:text-foreground hover:shadow-card"
                whileHover={{ scale: 1.18, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconLinkedin className="h-4 w-4" />
              </motion.a>
              <span className="flex items-center gap-1.5 text-xs">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Bangladesh • Remote worldwide
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator — lives at the bottom of the flex column, never overlaps content ─── */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="mb-8 flex flex-col items-center gap-1.5 self-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-border bg-card/40 px-1.5 py-1.5 backdrop-blur"
        >
          <div className="h-2 w-0.5 rounded-full bg-primary" />
        </motion.div>
      </motion.a>
    </section>
  );
}
