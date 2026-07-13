import { products } from "@/data/products";

export const dynamic = "force-static";

const BASE_URL = "https://ecommerce.madhuboora.online";

export default function sitemap() {
  const staticRoutes = ["", "/shop", "/checkout"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${BASE_URL}/product/${product.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
