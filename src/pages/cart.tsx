"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"; // Import components from navbar-menu
import CartItem from "@/components/ui/CartItem";
import CheckoutForm from "@/components/ui/CheckoutForm";
import OrderTracking from "@/components/ui/OrderTracking";
import PostalSelection from "@/components/ui/PostalSelection";
import PaymentOptions from "@/components/ui/PaymentOptions";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gold Necklace", price: 100, quantity: 1, thumbnail: "/images/goldnecklace.png" },
    { id: 2, name: "Diamond Ring", price: 200, quantity: 2, thumbnail: "/images/diamondring.png" },
  ]);

  const [selectedPostal, setSelectedPostal] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
            <CartItem key={item.id} item={item} />
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
