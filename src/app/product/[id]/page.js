import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";
import ProductDetail from "@/components/product/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product Not Found | Lumen" };
  }

  return {
    title: `${product.name} | Lumen`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
