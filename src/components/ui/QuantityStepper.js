"use client";

import { FiMinus, FiPlus } from "react-icons/fi";

export default function QuantityStepper({ value, onChange, min = 1, max = 99, className = "" }) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={`glass inline-flex items-center rounded-full ${className}`}
      role="group"
      aria-label="Quantity"
    >
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-200 transition-colors hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
      >
        <FiMinus size={14} />
      </button>
      <span className="w-8 text-center text-sm font-medium text-white tabular-nums">{value}</span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        aria-label="Increase quantity"
        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-200 transition-colors hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
      >
        <FiPlus size={14} />
      </button>
    </div>
  );
}
