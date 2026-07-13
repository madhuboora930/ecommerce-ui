"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { sortProducts } from "@/lib/sortProducts";
import CategoryFilter from "@/components/product/CategoryFilter";
import SortDropdown from "@/components/product/SortDropdown";
import SearchBar from "@/components/product/SearchBar";
import ProductGrid from "@/components/product/ProductGrid";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const byCategoryAndSearch = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = !query || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    return sortProducts(byCategoryAndSearch, sortBy);
  }, [category, search, sortBy]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-white">Shop</h1>
        <p className="mt-1 text-sm text-slate-400">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mb-8">
        <CategoryFilter active={category} onChange={setCategory} />
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
