"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <header key={pathname} className="py-8 xl:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [-60, 30, -10, 0],
            transition: {
              delay: 1,
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="container max-auto flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"} className="font-secondary text-2xl">
            Alpez.<span className="text-sm text-accent">site</span>
          </Link>

          {/* desktop nav & hire me button */}
          <div className="hidden xl:flex gap-8 items-center">
            <Nav />
            <Link href={"/contact"}>
              <Button>Hire me</Button>
            </Link>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </motion.div>
      </header>
    </AnimatePresence>
  );
};

export default Header;
