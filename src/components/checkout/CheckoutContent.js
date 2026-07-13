"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheckCircle, FiCreditCard, FiShoppingBag } from "react-icons/fi";
import { SiPaypal } from "react-icons/si";
import { useCart } from "@/context/CartContext";
import ProductImagePlaceholder from "@/components/ui/ProductImagePlaceholder";
import Button from "@/components/ui/Button";

const FIELDS = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "address", label: "Address", type: "text", autoComplete: "street-address" },
];

const CITY_FIELDS = [
  { name: "city", label: "City", type: "text" },
  { name: "zip", label: "ZIP Code", type: "text" },
];

export default function CheckoutContent() {
  const { cartItems, cartCount, cartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setOrderNumber(`LUM-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      clearCart();
    }, 900);
  };

  if (orderNumber) {
    return (
      <div className="glass mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl px-8 py-14 text-center">
        <FiCheckCircle size={48} className="text-emerald" />
        <h1 className="font-display text-2xl font-semibold text-white">Order Confirmed</h1>
        <p className="text-sm text-slate-400">
          This is a UI demo — no real payment was processed. Your mock order number is:
        </p>
        <p className="font-display text-lg font-semibold text-gold">{orderNumber}</p>
        <Button as={Link} href="/shop" className="mt-2">
          Continue Shopping
        </Button>
      </div>
    );
  }

  if (cartCount === 0) {
    return (
      <div className="glass mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl px-8 py-14 text-center">
        <FiShoppingBag size={40} className="text-slate-600" />
        <h1 className="font-display text-2xl font-semibold text-white">Your cart is empty</h1>
        <p className="text-sm text-slate-400">Add a few items before checking out.</p>
        <Button as={Link} href="/shop" className="mt-2">
          Start Shopping
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-8 font-display text-3xl font-semibold text-white">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} className="glass flex flex-col gap-6 rounded-3xl p-6 sm:p-8">
          <div>
            <h2 className="mb-4 font-display text-lg font-semibold text-white">
              Shipping Details
            </h2>
            <div className="flex flex-col gap-4">
              {FIELDS.map((field) => (
                <div key={field.name} className="flex flex-col gap-1.5">
                  <label htmlFor={field.name} className="text-xs text-slate-400">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold/50"
                  />
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                {CITY_FIELDS.map((field) => (
                  <div key={field.name} className="flex flex-col gap-1.5">
                    <label htmlFor={field.name} className="text-xs text-slate-400">
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-lg font-semibold text-white">Payment Method</h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  paymentMethod === "card"
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-slate-300 hover:border-white/20"
                }`}
              >
                <FiCreditCard size={16} />
                Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("paypal")}
                className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  paymentMethod === "paypal"
                    ? "border-gold/50 bg-gold/10 text-gold"
                    : "border-white/10 text-slate-300 hover:border-white/20"
                }`}
              >
                <SiPaypal size={16} />
                PayPal
              </button>
            </div>

            {paymentMethod === "card" && (
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cardNumber" className="text-xs text-slate-400">
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    placeholder="4242 4242 4242 4242"
                    required
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="expiry" className="text-xs text-slate-400">
                      Expiry
                    </label>
                    <input
                      id="expiry"
                      placeholder="MM/YY"
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cvc" className="text-xs text-slate-400">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      placeholder="123"
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Processing..." : `Place Order — $${cartTotal.toFixed(2)}`}
          </Button>
          <p className="text-center text-xs text-slate-500">
            Demo checkout — no real payment is processed.
          </p>
        </form>

        <div className="glass h-fit rounded-3xl p-6 sm:p-8">
          <h2 className="mb-5 font-display text-lg font-semibold text-white">Order Summary</h2>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.productId} className="flex items-center gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                  <ProductImagePlaceholder
                    product={item.product}
                    className="h-full w-full"
                    iconSize={16}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">{item.product.name}</p>
                  <p className="text-xs text-slate-400">Qty {item.quantity}</p>
                </div>
                <span className="text-sm text-emerald">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
            <div className="flex justify-between text-slate-400">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Shipping</span>
              <span className="text-emerald">Free</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-white/10 pt-2 font-display text-base font-semibold text-white">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
