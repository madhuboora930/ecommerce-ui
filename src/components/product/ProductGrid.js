import ProductCard from "./ProductCard";

export default function ProductGrid({ products, emptyMessage = "No products found." }) {
  if (products.length === 0) {
    return (
      <div className="glass flex flex-col items-center gap-2 rounded-2xl px-6 py-16 text-center">
        <p className="font-display text-lg text-white">{emptyMessage}</p>
        <p className="text-sm text-slate-400">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
