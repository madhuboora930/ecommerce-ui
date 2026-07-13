import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
    </div>
  );
}
