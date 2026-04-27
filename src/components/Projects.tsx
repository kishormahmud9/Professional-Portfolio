import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { IconGithub } from "./icons";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Cat = "All" | "SaaS" | "AI" | "Dashboard" | "eCommerce";

const projects: {
  title: string;
  image: string;
  cat: Cat[];
  stack: string[];
  result: string;
  description: string;
}[] = [
  {
    title: "AI eCommerce Chatbot",
    image: p1,
    cat: ["AI", "eCommerce"],
    stack: ["Next.js", "OpenAI", "Postgres"],
    result: "+38% conversion lift",
    description: "Conversational shopping assistant that recommends products and recovers carts.",
  },
  {
    title: "Multi-Vendor SaaS Platform",
    image: p2,
    cat: ["SaaS", "eCommerce"],
    stack: ["Laravel", "React", "MySQL"],
    result: "1.2k+ vendors onboarded",
    description: "Marketplace with vendor dashboards, payouts and subscription tiers.",
  },
  {
    title: "Meal Management SaaS",
    image: p3,
    cat: ["SaaS"],
    stack: ["Next.js", "Prisma", "Stripe"],
    result: "Used by 30+ messes",
    description: "Subscription meal planning with billing and member analytics.",
  },
  {
    title: "Realtime Admin Dashboard",
    image: p4,
    cat: ["Dashboard"],
    stack: ["React", "Node", "Socket.io"],
    result: "<200ms live updates",
    description: "Operational dashboard with realtime KPIs, alerts and role-based access.",
  },
  {
    title: "Booking Automation System",
    image: p5,
    cat: ["SaaS", "AI"],
    stack: ["Next.js", "OpenAI", "Twilio"],
    result: "70% less manual ops",
    description: "AI assistant that books, confirms and reschedules appointments end-to-end.",
  },
  {
    title: "CRM + Lead Tracking Tool",
    image: p6,
    cat: ["Dashboard", "SaaS"],
    stack: ["React", "Express", "Postgres"],
    result: "3x sales pipeline visibility",
    description: "Pipeline CRM with lead scoring, automations and team analytics.",
  },
];

const filters: Cat[] = ["All", "SaaS", "AI", "Dashboard", "eCommerce"];

export function Projects() {
  const [filter, setFilter] = useState<Cat>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.cat.includes(filter));

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects with real outcomes"
          subtitle="A selection of products I've built — engineered for scale, designed for users."
        />

        {/* Filter tabs */}
        <Reveal>
          <LayoutGroup id="filters">
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                    filter === f
                      ? "border-transparent text-primary-foreground"
                      : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-primary shadow-card"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </Reveal>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -8 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="group h-full overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition-colors hover:border-primary/40 hover:shadow-elegant"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {p.result}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                    {/* Stack tags */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="group/btn inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:shadow-elegant"
                      >
                        <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:scale-110" />
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-accent"
                      >
                        <IconGithub className="h-3 w-3" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
