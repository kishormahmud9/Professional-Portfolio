import { Reveal, SectionHeader } from "./Reveal";
import { Zap, Sparkles, Layers, MessageSquare, Briefcase, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Zap, title: "Fast Delivery", desc: "Aggressive timelines without cutting quality." },
  { icon: Sparkles, title: "Clean Code", desc: "Readable, typed, tested — easy to hand over." },
  { icon: Layers, title: "Scalable Architecture", desc: "Designed to grow from MVP to millions of users." },
  { icon: MessageSquare, title: "Strong Communication", desc: "Daily updates, clear scope, no surprises." },
  { icon: Briefcase, title: "Business Mindset", desc: "I build for outcomes, not just acceptance criteria." },
  { icon: LifeBuoy, title: "Long-term Support", desc: "Maintenance, iteration and growth after launch." },
];

export function WhyHireMe() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Work With Me"
          title="A senior partner, not just a coder"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40 hover:shadow-card"
              >
                {/* Subtle top-corner number */}
                <span className="absolute right-5 top-4 text-xs font-bold tabular-nums text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-card">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
