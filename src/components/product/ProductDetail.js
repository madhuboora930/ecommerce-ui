"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck, FiChevronLeft, FiShoppingBag } from "react-icons/fi";
import ProductImagePlaceholder from "@/components/ui/ProductImagePlaceholder";
import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import QuantityStepper from "@/components/ui/QuantityStepper";
import Button from "@/components/ui/Button";
import ProductGrid from "@/components/product/ProductGrid";
import { getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);
  const related = getRelatedProducts(product);

  const hasDiscount = typeof product.originalPrice === "number";
  const discountPct = hasDiscount
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div>
      <Link
        href="/shop"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-gold"
      >
        <FiChevronLeft size={14} />
        Back to Shop
      </Link>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="glass aspect-square overflow-hidden rounded-3xl">
          <ProductImagePlaceholder product={product} className="h-full w-full" iconSize={72} />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-1.5">
            {product.isFeatured && <Badge tone="gold">Featured</Badge>}
            {hasDiscount && <Badge tone="rose">-{discountPct}%</Badge>}
            {!product.inStock && <Badge tone="neutral">Out of stock</Badge>}
          </div>

          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {product.name}
          </h1>

          <Rating value={product.rating} reviewCount={product.reviewCount} size={16} />

          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-emerald">
              ${product.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-base text-slate-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-slate-400">{product.description}</p>

          {product.features?.length > 0 && (
            <ul className="flex flex-col gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <FiCheck size={15} className="shrink-0 text-emerald" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 sm:flex-none"
            >
              <FiShoppingBag size={15} />
              {justAdded ? "Added!" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 font-display text-2xl font-semibold text-white">
            You might also like
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
