import { FiStar } from "react-icons/fi";

export default function Rating({ value, reviewCount, size = 14, className = "" }) {
  const stars = [0, 1, 2, 3, 4];

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center" aria-hidden="true">
        {stars.map((i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
              <FiStar size={size} className="absolute inset-0 text-white/20" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <FiStar size={size} className="fill-gold text-gold" />
              </span>
            </span>
          );
        })}
      </div>
      <span className="sr-only">{value} out of 5 stars</span>
      <span className="text-xs text-slate-400">
        {value.toFixed(1)}
        {typeof reviewCount === "number" && ` (${reviewCount})`}
      </span>
    </div>
  );
}
