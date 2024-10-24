"use client";

import Link from "next/link";
import { socials } from "@/lib/data";
import { motion } from "framer-motion";

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [50, -10, 0],
            transition: {
              delay:
                (index === 0 && 1.2) ||
                (index === 1 && 1.25) ||
                (index === 2 && 1.3),
              duration: 0.6,
              ease: "easeInOut",
            },
          }}>
          <Link href={social.path} target="_blank" className={iconStyles}>
            {social.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
