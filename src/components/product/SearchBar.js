"use client";

import { FiSearch, FiX } from "react-icons/fi";

export default function SearchBar({ value, onChange, placeholder = "Search products..." }) {
  return (
    <div className="glass flex flex-1 items-center gap-2.5 rounded-full px-4 py-2.5">
      <FiSearch size={16} className="shrink-0 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="shrink-0 text-slate-400 transition-colors hover:text-gold"
        >
          <FiX size={15} />
        </button>
      )}
    </div>
  );
}
