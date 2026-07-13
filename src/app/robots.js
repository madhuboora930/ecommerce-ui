export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ecommerce.madhuboora.online/sitemap.xml",
  };
}
