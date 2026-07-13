"use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import ProductImagePlaceholder from "@/components/ui/ProductImagePlaceholder";
import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const hasDiscount = typeof product.originalPrice === "number";
  const discountPct = hasDiscount
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square w-full overflow-hidden">
          <ProductImagePlaceholder
            product={product}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isFeatured && <Badge tone="gold">Featured</Badge>}
            {hasDiscount && <Badge tone="rose">-{discountPct}%</Badge>}
            {!product.inStock && <Badge tone="neutral">Out of stock</Badge>}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display text-base font-semibold text-white transition-colors group-hover:text-gold">
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} reviewCount={product.reviewCount} />
        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold text-emerald">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition-all hover:bg-gradient-to-r hover:from-gold hover:to-emerald hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white/5 disabled:hover:text-slate-200"
          >
            <FiShoppingBag size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
