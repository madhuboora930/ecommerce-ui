import { Suspense } from "react";
import ShopContent from "@/components/product/ShopContent";

export const metadata = {
  title: "Shop | Lumen",
  description: "Browse the full Lumen collection across electronics, fashion, home, and beauty.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
