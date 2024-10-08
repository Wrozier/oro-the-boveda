"use client";

import React, { useState } from "react";
import { Footer } from "@/components/ui/footer";
import SizeFilter from "@/components/ui/size-filter";
import Lamp from "@/components/ui/lamp"; // Import LampDemo component
import { FloatingNav } from "@/components/ui/floating-navbar"; // Adjust the import based on your project structure
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";
import { CardDemo } from "@/components/ui/cards"; // Import CardDemo component

// Define the products data locally
const products = [
  {
    title: "Men's Cuban Link Chain",
    description: "A timeless piece for the modern man.",
    link: "/products/mens-cuban-link",
    thumbnail: "/images/tenmmyg.png",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Men's Gold Ring",
    description: "Elegance in every detail.",
    link: "/products/mens-gold-ring",
    thumbnail: "/images/goldvault.png",
    sizes: ["Medium", "Large"],
  },
  {
    title: "Men's Gold Bracelet",
    description: "Luxury on your wrist.",
    link: "/products/mens-gold-bracelet",
    thumbnail: "/images/oroboveda.png",
    sizes: ["Small", "Large"],
  },
  // More product entries here...
  {
    title: "Men's Cuban Link Chain",
    description: "A timeless piece for the modern man.",
    link: "/products/mens-cuban-link",
    thumbnail: "/images/tenmmyg.png",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Men's Gold Ring",
    description: "Elegance in every detail.",
    link: "/products/mens-gold-ring",
    thumbnail: "/images/goldvault.png",
    sizes: ["Medium", "Large"],
  },
  {
    title: "Men's Gold Bracelet",
    description: "Luxury on your wrist.",
    link: "/products/mens-gold-bracelet",
    thumbnail: "/images/oroboveda.png",
    sizes: ["Small", "Large"],
  },
  {
    title: "Men's Cuban Link Chain",
    description: "A timeless piece for the modern man.",
    link: "/products/mens-cuban-link",
    thumbnail: "/images/tenmmyg.png",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Men's Gold Ring",
    description: "Elegance in every detail.",
    link: "/products/mens-gold-ring",
    thumbnail: "/images/goldvault.png",
    sizes: ["Medium", "Large"],
  },
  {
    title: "Men's Gold Bracelet",
    description: "Luxury on your wrist.",
    link: "/products/mens-gold-bracelet",
    thumbnail: "/images/oroboveda.png",
    sizes: ["Small", "Large"],
  },
];

export default function MensJewelry() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const filteredProducts = products.filter((product) =>
    selectedSize ? product.sizes.includes(selectedSize) : true
  );

  // Define navigation items for FloatingNav
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome /> },
    { name: "About Us", link: "/about-us", icon: <IconInfoCircle /> },
    { name: "Men's Jewelry", link: "/mens-jewelry", icon: <IconUser /> },
    { name: "Women's Jewelry", link: "/womens-jewelry", icon: <IconUser /> },
    { name: "Contact", link: "/contact", icon: <IconMail /> },
    { name: "Cart", link: "/cart", icon: <IconPaperBag /> },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

      <div className="flex-1 flex flex-col">
        {/* LampDemo component replacing Banner image */}
        <Lamp /> {/* Replaces banner image with LampEffect demo */}

        {/* Filter and Card listing products */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-1/4">
              <SizeFilter onSizeSelect={handleSizeSelect} />
            </div>

            {/* Products */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <CardDemo
                    key={product.title}
                    title={product.title}
                    src={product.thumbnail}
                    description={product.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}