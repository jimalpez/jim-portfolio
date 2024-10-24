"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const PreloaderTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 ring-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        <motion.div
          className="h-screen w-screen fixed bg-slate-900 top-0 pointer-events-none z-10"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default PreloaderTransition;
