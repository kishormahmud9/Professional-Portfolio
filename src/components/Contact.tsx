import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";
import { IconGithub, IconLinkedin } from "./icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

const channels = [
  { icon: Mail, label: "Email", value: "hello@kishor.dev", href: "mailto:hello@kishor.dev" },
  { icon: MessageCircle, label: "WhatsApp", value: "+880 1XXX-XXXXXX", href: "https://wa.me/8801000000000" },
  { icon: IconLinkedin, label: "LinkedIn", value: "/in/kishormahmud", href: "https://linkedin.com" },
  { icon: IconGithub, label: "GitHub", value: "@kishormahmud", href: "https://github.com" },
] as const;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      budget: fd.get("budget"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent! I'll get back within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-60" />
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind? Tell me about it — I usually reply within 24 hours."
        />

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          {/* Left: channels */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
              <div>
                <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Prefer a quick chat? Pick the channel that works for you.
                </p>

                <ul className="mt-8 space-y-3">
                  {channels.map((c) => (
                    <li key={c.label}>
                      <motion.a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.18 }}
                        className="group flex items-center gap-3 rounded-2xl border border-border bg-background/50 p-3 transition-colors hover:border-primary/50"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-card">
                          <c.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-xs text-muted-foreground">{c.label}</span>
                          <span className="block text-sm font-medium group-hover:text-primary transition-colors">
                            {c.value}
                          </span>
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center gap-2 rounded-2xl border border-border bg-background/50 p-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Based in Bangladesh — working worldwide
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card/60 p-8 shadow-card backdrop-blur"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    required
                    maxLength={100}
                    className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_oklch(0.55_0.22_258_/_0.15)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                    maxLength={255}
                    className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_oklch(0.55_0.22_258_/_0.15)]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm transition-shadow duration-200 focus:outline-none focus:shadow-[0_0_0_3px_oklch(0.55_0.22_258_/_0.15)] focus:ring-0"
                  >
                    <option value="">Select a range (optional)</option>
                    <option>Under $2k</option>
                    <option>$2k – $5k</option>
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you building? Timelines, goals, constraints…"
                    required
                    maxLength={2000}
                    className="transition-shadow duration-200 focus:shadow-[0_0_0_3px_oklch(0.55_0.22_258_/_0.15)]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="mt-6 h-12 w-full rounded-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-[1.01] hover:shadow-glow active:scale-[0.99] disabled:opacity-70"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
