import { getCategoryById } from "@/data/categories";
import CategoryIcon from "./CategoryIcon";

export default function ProductImagePlaceholder({ product, className = "", iconSize = 48 }) {
  const category = getCategoryById(product.category);
  const [from, to] = category?.gradient ?? ["#10b981", "#d4af37"];
  const gradientId = `grad-${product.id}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} stopOpacity="0.55" />
            <stop offset="100%" stopColor={to} stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id={`${gradientId}-glow`} cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor={from} stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0b0d0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="#13160f" />
        <rect width="400" height="400" fill={`url(#${gradientId})`} />
        <rect width="400" height="400" fill={`url(#${gradientId}-glow)`} />
        <circle cx="80" cy="320" r="120" fill={to} opacity="0.08" />
        <circle cx="340" cy="60" r="90" fill={from} opacity="0.1" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm"
          style={{ width: iconSize * 2, height: iconSize * 2 }}
        >
          <CategoryIcon icon={category?.icon} size={iconSize} className="text-white/70" />
        </div>
      </div>
    </div>
  );
}
