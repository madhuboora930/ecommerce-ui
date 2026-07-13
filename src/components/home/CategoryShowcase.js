import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";

export default function CategoryShowcase() {
  return (
    <section className="py-10">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-semibold text-white">Shop by Category</h2>
        <Link href="/shop" className="text-sm text-slate-400 transition-colors hover:text-gold">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.id}`}
            className="group glass relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className="absolute inset-0 -z-10 opacity-20 transition-opacity duration-300 group-hover:opacity-35"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${category.gradient[0]}, transparent 70%)`,
              }}
            />
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <CategoryIcon icon={category.icon} size={24} className="text-gold" />
            </div>
            <span className="font-display text-sm font-medium text-white">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
