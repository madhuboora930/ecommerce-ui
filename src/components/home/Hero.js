"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl py-16 sm:py-24">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-full px-4 py-1.5 text-xs tracking-wide text-gold"
        >
          NEW SEASON COLLECTION
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Curated goods, <span className="text-gradient">quietly luxurious.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg text-base text-slate-400 sm:text-lg"
        >
          Electronics, fashion, home, and beauty essentials — chosen for quality, styled with
          restraint.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button as={Link} href="/shop">
            Shop Collection
            <FiArrowRight size={15} />
          </Button>
          <Button as={Link} href="/shop" variant="ghost">
            Browse Categories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
