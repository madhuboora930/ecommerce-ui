"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiShoppingBag, FiX, FiArrowLeft } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
];

export default function Navbar() {
  const { cartCount, openCart } = useCart();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide text-white">
          Lumen<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://madhuboora.online"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-xs text-slate-300 transition-colors hover:border-gold/40 hover:text-gold sm:flex"
          >
            <FiArrowLeft size={13} />
            Portfolio
          </a>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 transition-colors hover:text-gold"
          >
            <FiShoppingBag size={17} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-gold to-emerald px-1 text-[10px] font-semibold text-ink">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 md:hidden"
          >
            {isMobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="glass-nav border-t border-white/5 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm text-slate-300 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://madhuboora.online"
              className="flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-gold"
            >
              <FiArrowLeft size={13} />
              Back to Portfolio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
