"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [-50, 10, 0],
                transition: {
                  delay: 1,
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }} className="text-xl">
              Web Developer
            </motion.div>
            <h1 className="h1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [-50, 10, 0],
                  transition: {
                    delay: 1,
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}>
                Hello I'm
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [50, -10, 0],
                  transition: {
                    delay: 1.05,
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}
                className="text-accent font-secondary"
                style={{ filter: "drop-shadow(0 5px 8px #ffffff60)" }}>
                Jim Alpez
              </motion.div>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [50, -10, 0],
                transition: {
                  delay: 1.1,
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              className="max-w-[500px] mt-6 mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </motion.p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [50, -10, 0],
                  transition: {
                    delay: 1.15,
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </motion.div>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-slate-900 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
