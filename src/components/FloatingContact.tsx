import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3"
        >
          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground shadow-card backdrop-blur transition-colors hover:border-primary/50 hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>

          {/* Contact CTA */}
          <motion.a
            href="#contact"
            aria-label="Contact me"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-shadow hover:shadow-glow"
          >
            <MessageCircle className="h-6 w-6" />
            {/* Ping ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
