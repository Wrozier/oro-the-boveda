"use client";

import React, { useState } from "react";
import CartItem from "@/components/ui/CartItem"; // Ensure this path is correct
import CheckoutForm from "@/components/ui/CheckoutForm";
import OrderTracking from "@/components/ui/OrderTracking";
import PostalSelection from "@/components/ui/PostalSelection";
import PaymentOptions from "@/components/ui/PaymentOptions";
import { FloatingNav } from "@/components/ui/floating-navbar"; // Ensure this path is correct
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react"; // Use valid icons
import { Timeline } from "@/components/ui/timeline"; // Import your Timeline component

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gold Necklace", price: 100, quantity: 1, thumbnail: "/images/las-villas-cuban-link-bracelet-10mm-solid-cuban-link-bracelet-in-18k-yellow-gold-14327469703240_283x283_v=1587285217.png" },
    { id: 2, name: "Diamond Ring", price: 200, quantity: 2, thumbnail: "/images/tenmmyg.png" },
  ]);

  const [selectedPostal, setSelectedPostal] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0); // Track the current step in the timeline

  const handleAddItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Define navigation items for FloatingNav
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome /> },
    { name: "About Us", link: "/about-us", icon: <IconInfoCircle /> },
    { name: "Men's Jewelry", link: "/mens-jewelry", icon: <IconUser /> },
    { name: "Women's Jewelry", link: "/womens-jewelry", icon: <IconUser /> },
    { name: "Contact", link: "/contact", icon: <IconMail /> },
    { name: "Cart", link: "/cart", icon: <IconPaperBag /> },
  ];

  // Steps for the checkout timeline
  const steps = [
    { title: "Cart", content: <CartItemsSection cartItems={cartItems} onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} /> },
    { title: "Shipping", content: <PostalSelection setSelectedPostal={setSelectedPostal} /> },
    { title: "Payment", content: <PaymentOptions setPaymentMethod={setPaymentMethod} /> },
    { title: "Review", content: <CheckoutForm /> },
    { title: "Tracking", content: <OrderTracking /> },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Checkout Process</h1>

        {/* Timeline Component */}
        <Timeline data={steps} />

        {/* Render the current step's content */}
        <div className="mt-6">
          {steps[currentStep]?.content}
        </div>
      </div>
    </>
  );
};

// Separate component for displaying cart items
interface CartItemsSectionProps {
  cartItems: { id: number; name: string; price: number; quantity: number; thumbnail: string; }[];
  onAddItem: (id: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartItemsSection: React.FC<CartItemsSectionProps> = ({ cartItems, onAddItem, onRemoveItem }) => (
  <div className="flex flex-col gap-6 mb-6">
    {cartItems.map((item) => (
      <CartItem
        key={item.id}
        item={item}
        onAdd={() => onAddItem(item.id)}
        onRemove={() => onRemoveItem(item.id)}
      />
    ))}
  </div>
);

export default Cart;