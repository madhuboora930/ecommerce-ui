"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { getProductById } from "@/data/products";
import useLocalStorage from "@/hooks/useLocalStorage";

const CartContext = createContext(null);

const STORAGE_KEY = "lumen:cart";

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage(STORAGE_KEY, []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { productId, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => setItems([]);

  const cartItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId);
          return product ? { ...item, product } : null;
        })
        .filter(Boolean),
    [items],
  );

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0),
    [cartItems],
  );

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
