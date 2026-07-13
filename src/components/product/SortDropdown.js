"use client";

import { FiChevronDown } from "react-icons/fi";

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="glass relative flex items-center rounded-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Sort products"
        className="appearance-none rounded-full bg-transparent py-2.5 pl-4 pr-9 text-sm text-slate-200 outline-none"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value} className="bg-surface text-slate-200">
            {option.label}
          </option>
        ))}
      </select>
      <FiChevronDown size={14} className="pointer-events-none absolute right-3.5 text-slate-400" />
    </div>
  );
}
