export default function Badge({ children, tone = "neutral", className = "" }) {
  const tones = {
    neutral: "border-white/10 bg-white/5 text-slate-200",
    gold: "border-gold/30 bg-gold/10 text-gold",
    emerald: "border-emerald/30 bg-emerald/10 text-emerald",
    rose: "border-rose/30 bg-rose/10 text-rose",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
