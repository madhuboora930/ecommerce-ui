import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://ecommerce.madhuboora.online"),
  title: "Lumen | Modern E-Commerce",
  description:
    "A modern, futuristic e-commerce storefront UI — product listings, cart, and checkout flow, built with Next.js.",
  openGraph: {
    title: "Lumen | Modern E-Commerce",
    description:
      "A modern, futuristic e-commerce storefront UI built with Next.js, React, and Tailwind CSS.",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen | Modern E-Commerce",
    description:
      "A modern, futuristic e-commerce storefront UI built with Next.js, React, and Tailwind CSS.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="relative antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="animate-blob absolute -left-20 top-0 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
          <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl [animation-delay:8s]" />
        </div>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-8 sm:px-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
