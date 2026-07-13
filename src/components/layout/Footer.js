import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="glass-nav mt-16 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-display text-lg font-semibold text-white">
            Lumen<span className="text-gold">.</span>
          </Link>
          <p className="mt-2 max-w-xs text-sm text-slate-400">
            A modern storefront UI concept — product listings, cart, and checkout flow.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-6">
          <Link href="/shop" className="transition-colors hover:text-gold">
            Shop
          </Link>
          <a
            href="https://madhuboora.online"
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <FiArrowLeft size={13} />
            Back to Portfolio
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 py-4 text-center text-xs text-slate-500 sm:px-8">
        Built by Madhu Boora — design concept, no real transactions.
      </div>
    </footer>
  );
}
