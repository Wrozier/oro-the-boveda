"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import CartItem from "@/components/ui/CartItem";
import CheckoutForm from "@/components/ui/CheckoutForm";
import OrderTracking from "@/components/ui/OrderTracking";
import PostalSelection from "@/components/ui/PostalSelection";
import PaymentOptions from "@/components/ui/PaymentOptions";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gold Necklace", price: 100, quantity: 1, thumbnail: "/images/las-villas-cuban-link-bracelet-10mm-solid-cuban-link-bracelet-in-18k-yellow-gold-14327469703240_283x283_v=1587285217.png" },
    { id: 2, name: "Diamond Ring", price: 200, quantity: 2, thumbnail: "/images/tenmmyg.png" },
  ]);

  const [selectedPostal, setSelectedPostal] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleAddItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Menu setActive={setActiveMenu}>
        {["Home", "About Us", "Men's Jewelry", "Women's Jewelry", "Contact"].map((item) => (
          <MenuItem key={item} setActive={setActiveMenu} active={activeMenu} item={item}>
            <ProductItem
              title={item}
              description={`Explore our ${item.toLowerCase()}.`}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              src="/images/sample.png" // Update with actual image paths
            />
          </MenuItem>
        ))}
      </Menu>

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

        <div className="flex flex-col gap-6 mb-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={() => handleAddItem(item.id)}
              onRemove={() => handleRemoveItem(item.id)}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <CheckoutForm />
          <OrderTracking />
        </div>

        <div className="mt-6">
          <PostalSelection setSelectedPostal={setSelectedPostal} />
          <PaymentOptions setPaymentMethod={setPaymentMethod} />
        </div>
      </div>
    </>
  );
};

export default Cart;
