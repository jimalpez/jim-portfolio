"use client";

import CountUp from "react-countup";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: [50, -10, 0],
                transition: {
                  delay:
                    (index === 0 && 1.35) ||
                    (index === 1 && 1.4) ||
                    (index === 2 && 1.45) ||
                    (index === 3 && 1.5),
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}>
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
