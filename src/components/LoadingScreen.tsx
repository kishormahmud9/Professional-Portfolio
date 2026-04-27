import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <span className="absolute inset-0 animate-ping rounded-2xl bg-primary/30" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary font-display text-2xl font-bold text-primary-foreground shadow-glow">
              K
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
