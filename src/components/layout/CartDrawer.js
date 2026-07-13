"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import QuantityStepper from "@/components/ui/QuantityStepper";
import ProductImagePlaceholder from "@/components/ui/ProductImagePlaceholder";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const { cartItems, cartCount, cartTotal, isCartOpen, closeCart, updateQuantity, removeFromCart } =
    useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="glass-nav fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-white/10"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-white">
                Your Cart{cartCount > 0 && ` (${cartCount})`}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 hover:text-gold"
              >
                <FiX size={17} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <FiShoppingBag size={36} className="text-slate-600" />
                <p className="text-sm text-slate-400">Your cart is empty.</p>
                <Button as={Link} href="/shop" variant="outline" onClick={closeCart}>
                  Start Shopping
                </Button>
              </div>
            ) : (
              <>
                <div className="scrollbar-none flex-1 space-y-4 overflow-y-auto px-5 py-4">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex gap-3">
                      <Link
                        href={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="h-20 w-20 shrink-0 overflow-hidden rounded-xl"
                      >
                        <ProductImagePlaceholder
                          product={item.product}
                          className="h-full w-full"
                          iconSize={20}
                        />
                      </Link>
                      <div className="flex flex-1 flex-col gap-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/product/${item.productId}`}
                            onClick={closeCart}
                            className="text-sm font-medium text-white hover:text-gold"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.productId)}
                            aria-label={`Remove ${item.product.name}`}
                            className="shrink-0 text-slate-500 hover:text-rose"
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                        <span className="text-xs text-emerald">
                          ${item.product.price.toFixed(2)}
                        </span>
                        <QuantityStepper
                          value={item.quantity}
                          onChange={(qty) => updateQuantity(item.productId, qty)}
                          className="mt-1 scale-90 origin-left"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 px-5 py-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-slate-400">Subtotal</span>
                    <span className="font-display text-lg font-semibold text-white">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <Button as={Link} href="/checkout" onClick={closeCart} className="w-full">
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
