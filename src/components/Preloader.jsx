"use client";

import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="h-screen w-screen fixed top-0 left-0 ring-0 pointer-events-none z-40">
        <motion.div
          animate={{
            opacity: [1, 0],
            transition: { delay: 0.5, duration: 0.8 },
          }}
          className="bg-slate-900 h-full w-full grid place-content-center">
          Loading...
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Preloader;
