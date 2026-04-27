import { Reveal, SectionHeader } from "./Reveal";
import { Layout, Server, Database, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:bg-blue-500/10",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-violet-500 to-fuchsia-400",
    glow: "group-hover:bg-violet-500/10",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Laravel", level: 88 },
      { name: "Express", level: 90 },
      { name: "Prisma", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    color: "from-emerald-500 to-teal-400",
    glow: "group-hover:bg-emerald-500/10",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    color: "from-amber-500 to-orange-400",
    glow: "group-hover:bg-amber-500/10",
    items: [
      { name: "OpenAI API", level: 90 },
      { name: "Chatbots", level: 88 },
      { name: "Prompt Engineering", level: 85 },
      { name: "n8n / Zapier", level: 82 },
    ],
  },
  {
    icon: Workflow,
    title: "DevOps",
    color: "from-rose-500 to-pink-400",
    glow: "group-hover:bg-rose-500/10",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "VPS / Linux", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 82 },
    ],
  },
];

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="A modern, battle-tested stack"
          subtitle="The tools I reach for when building production-grade products."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
                {/* Per-card glow blob */}
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-all duration-500 ${g.glow} opacity-0 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${g.color} text-white shadow-card`}
                  >
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-5 font-display text-xl font-semibold">{g.title}</h3>

                  <ul className="space-y-3.5">
                    {g.items.map((it) => (
                      <li key={it.name}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="font-medium">{it.name}</span>
                          <span className="tabular-nums text-muted-foreground">{it.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${it.level}%` }}
                            viewport={{ once: true }}
                            transition={
                              reduced
                                ? { duration: 0 }
                                : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
                            }
                            className="h-full rounded-full bg-gradient-primary"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
