import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { WhyHireMe } from "@/components/WhyHireMe";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kishor Mahmud — Full Stack Developer & AI Product Builder" },
      {
        name: "description",
        content:
          "Senior Full Stack Developer based in Bangladesh, building scalable SaaS, eCommerce and AI-powered products for startups and businesses worldwide.",
      },
      { property: "og:title", content: "Kishor Mahmud — Full Stack Developer & AI Product Builder" },
      {
        property: "og:description",
        content:
          "Helping startups and businesses turn ideas into profitable digital products. SaaS, AI automation, web apps and scalable systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kishor Mahmud — Full Stack Developer & AI Product Builder" },
      {
        name: "twitter:description",
        content: "Senior Full Stack Developer · AI Product Builder · Building SaaS & AI products that ship.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <WhyHireMe />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
      <Toaster richColors position="top-center" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kishor Mahmud",
            jobTitle: "Full Stack Developer & AI Product Builder",
            url: "https://kishor.dev",
            address: { "@type": "PostalAddress", addressCountry: "BD" },
            sameAs: ["https://github.com", "https://linkedin.com"],
          }),
        }}
      />
    </ThemeProvider>
  );
}
