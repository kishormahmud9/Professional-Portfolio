import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";
import avatar from "@/assets/avatar.jpeg";
import { Code2, Brain, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", numeric: 6, suffix: "+" },
  { label: "Projects Completed", numeric: 80, suffix: "+" },
  { label: "Happy Clients", numeric: 40, suffix: "+" },
  { label: "Technologies", numeric: 25, suffix: "+" },
];

const pillars = [
  { icon: Code2, title: "Full Stack Mastery", text: "End-to-end ownership from database schema to pixel-perfect UI." },
  { icon: Brain, title: "AI Engineering", text: "Building chatbots, agents and automations on top of LLMs." },
  { icon: Rocket, title: "Ship Fast, Stay Clean", text: "Pragmatic architecture that scales without rewrites." },
  { icon: Users, title: "Business Mindset", text: "I think in product outcomes, not just tickets." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const val = useMotionValue(0);
  const display = useTransform(val, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(val, to, { duration: 1.8, ease: "easeOut" });
    return ctrl.stop;
  }, [inView, to, val]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="About"
          title="Engineering meets product thinking"
          subtitle="A senior full stack developer transitioning into AI-powered product development — obsessed with shipping fast, scalable systems that actually move the business."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Avatar column */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-25 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
                <img
                  src={avatar}
                  alt="Kishor Mahmud — Full Stack Developer"
                  width={768}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -right-5 rounded-2xl border border-border bg-card p-4 shadow-elegant backdrop-blur"
              >
                <p className="text-2xl font-bold text-gradient">6+ yrs</p>
                <p className="text-xs text-muted-foreground">Building products</p>
              </motion.div>
              {/* Top-left availability indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -left-5 top-6 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-card backdrop-blur"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium">Available</span>
              </motion.div>
            </div>
          </Reveal>

          {/* Content column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Kishor Mahmud</span> — a Senior Full Stack
                Developer based in Bangladesh, working with founders and teams worldwide. I've shipped SaaS
                platforms, eCommerce systems, dashboards and AI integrations that serve thousands of users daily.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Today my focus is the intersection of{" "}
                <span className="font-semibold text-foreground">scalable web engineering</span> and{" "}
                <span className="font-semibold text-foreground">AI product design</span> — turning models, APIs
                and automations into real revenue.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.07}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="group flex gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-primary/40 hover:shadow-card"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Animated stats row */}
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="cursor-default rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur transition-colors hover:border-primary/30 hover:shadow-elegant"
              >
                <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
                  <Counter to={s.numeric} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
