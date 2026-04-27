import { Reveal, SectionHeader } from "./Reveal";
import { Code2, Layers, Bot, Plug, BarChart3, Gauge } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    desc: "End-to-end web apps with Next.js, Node and modern databases — production-ready from day one.",
  },
  {
    icon: Layers,
    title: "SaaS MVP Development",
    desc: "Ship investor-ready MVPs in weeks: auth, billing, dashboards, multi-tenant — done right.",
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    desc: "Custom GPT chatbots, RAG over your docs, and AI agents wired into your product.",
  },
  {
    icon: Plug,
    title: "API Development",
    desc: "REST & GraphQL APIs with clean contracts, versioning, rate limits and great docs.",
  },
  {
    icon: BarChart3,
    title: "Dashboard Systems",
    desc: "Realtime admin & analytics dashboards your team will actually love using.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Core Web Vitals, database tuning and infra hardening to make slow apps fast.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-50" />
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title="What I can build for you"
          subtitle="From idea to launch — and beyond. I work as a long-term technical partner, not just a freelancer."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-7 backdrop-blur transition-colors hover:border-primary/40 hover:shadow-elegant"
              >
                {/* Hover glow blob */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-25" />

                <div className="relative">
                  {/* Number badge */}
                  <span className="mb-5 block text-xs font-semibold tabular-nums text-primary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-card transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
