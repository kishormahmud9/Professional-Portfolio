import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Daniel Roberts", role: "CTO, Northwind SaaS", text: "Kishor shipped our MVP in 6 weeks and rebuilt our entire billing layer. Senior level execution end to end." },
  { name: "Amelia Chen", role: "Founder, Bloomly", text: "The AI chatbot he integrated paid for itself in two weeks. Clear communication, zero hand-holding required." },
  { name: "Marcus Müller", role: "Head of Product, Ledgr", text: "Best full stack hire we've made remotely. Clean code, calm under pressure and genuinely cares about the product." },
  { name: "Priya Patel", role: "COO, MealMate", text: "From idea to 30+ paying customers. Kishor architected it so we never had to rewrite a single module." },
  { name: "Tom Whitaker", role: "Founder, OpsKit", text: "He understood the business problem before touching code — that's rare. Highly recommended." },
  { name: "Sara Lindqvist", role: "PM, FinSpark", text: "A true partner. Our dashboards are now snappier than competitors with 10x the engineering team." },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-80 shrink-0 flex-col rounded-3xl border border-border bg-card/70 p-6 backdrop-blur shadow-card">
      <Quote className="mb-3 h-6 w-6 text-primary/50" />
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
        "{t.text}"
      </blockquote>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <figcaption>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </figcaption>
        <div className="flex gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-3 w-3 fill-current" />
          ))}
        </div>
      </div>
    </figure>
  );
}

function Marquee({
  children,
  duration = 36,
  reverse = false,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-5 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {/* Duplicated content creates the seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by founders & teams"
          subtitle="What clients say about working with me."
        />
      </div>

      <div className="space-y-5">
        {/* Row 1 — scrolls left */}
        <Marquee duration={38}>
          {row1.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>

        {/* Row 2 — scrolls right */}
        <Marquee duration={42} reverse>
          {row2.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
