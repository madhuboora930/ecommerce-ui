import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-10">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-display text-2xl font-semibold text-white">Featured Products</h2>
        <Link href="/shop" className="text-sm text-slate-400 transition-colors hover:text-gold">
          View all
        </Link>
      </div>

      <ProductGrid products={featured} />
    </section>
  );
}
