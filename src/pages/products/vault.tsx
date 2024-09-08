// /pages/products/vault.tsx

"use client";

import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Carousel, Card as CarouselCard } from '@/components/ui/apple-cards-carousel'; // Ensure this path is correct
import { Spotlight } from '@/components/ui/spotlight';
import { Footer } from '@/components/ui/footer';
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";

// Sample product data
const products = [
  { id: 1, title: "Men's Cuban Link Chain", description: "A timeless piece for the modern man.", category: "Men", thumbnail: "/images/tenmmyg.png" },
  { id: 2, title: "Men's Gold Ring", description: "Elegance in every detail.", category: "Men", thumbnail: "/images/goldvault.png" },
  { id: 3, title: "Men's Gold Bracelet", description: "Luxury on your wrist.", category: "Men", thumbnail: "/images/oroboveda.png" },
  { id: 4, title: "Women's Diamond Necklace", description: "Shine bright with this stunning piece.", category: "Women", thumbnail: "/images/diamondnecklace.png" },
  { id: 5, title: "Women's Gold Earrings", description: "Elegance for every occasion.", category: "Women", thumbnail: "/images/goldearrings.png" },
];

// Navigation items for FloatingNav
const navItems = [
  { name: "Home", link: "/", icon: <IconHome /> },
  { name: "About Us", link: "/about-us", icon: <IconInfoCircle /> },
  { name: "Men's Jewelry", link: "/mens-jewelry", icon: <IconUser /> },
  { name: "Women's Jewelry", link: "/womens-jewelry", icon: <IconUser /> },
  { name: "Contact", link: "/contact", icon: <IconMail /> },
  { name: "Cart", link: "/cart", icon: <IconPaperBag /> },
];

const VaultPage = () => {
  // Create card elements for the carousel
  const items = products.map((product) => (
    <CarouselCard
      key={product.id}
      card={{
        src: product.thumbnail,
        title: product.title,
        category: product.category,
        content: <p>{product.description}</p>,
      }}
      index={product.id} // Use the product id as the index
    />
  ));

  return (
    <div className="flex flex-col min-h-screen bg-green-800 text-gold">
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

      {/* Spotlight Component */}
      <Spotlight />

      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Vault Jewelry Collection</h1>

        {/* Carousel for Products */}
        <Carousel items={items} />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default VaultPage;