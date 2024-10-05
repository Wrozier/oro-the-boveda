"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { FocusCards } from "@/components/ui/focus-cards"; // Import FocusCards component
import { Footer } from "@/components/ui/footer";
import { FloatingNav } from "@/components/ui/floating-navbar"; // Adjust the import based on your project structure
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";

export default function Home() {
  const products = [
    {
      title: "Vault",
      link: "/products/vault",
      thumbnail: "/images/goldvault.png",
      description: "A secure vault for your precious items.",
    },
    {
      title: "Customs",
      link: "/products/customs",
      thumbnail: "/images/product_1.png",
      description: "Custom jewelry designed just for you.",
    },
    {
      title: "Accessories",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
      description: "The latest Apple Watch with innovative features.",
    },
    // Add more products as needed...
    {
      title: "Vault",
      link: "/products/vault",
      thumbnail: "/images/goldvault.png",
      description: "A secure vault for your precious items.",
    },
    {
      title: "Customs",
      link: "/products/customs",
      thumbnail: "/images/product_1.png",
      description: "Custom jewelry designed just for you.",
    },
    {
      title: "Accessories",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
      description: "The latest Apple Watch with innovative features.",
    },
        {
      title: "Vault",
      link: "/products/vault",
      thumbnail: "/images/goldvault.png",
      description: "A secure vault for your precious items.",
    },
    {
      title: "Customs",
      link: "/products/customs",
      thumbnail: "/images/product_1.png",
      description: "Custom jewelry designed just for you.",
    },
    {
      title: "Apple Watch",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
      description: "The latest Apple Watch with innovative features.",
    },
  ];

  // Transform products to match the expected structure for FocusCards
  const cards = products.map((product) => ({
    title: product.title,
    src: product.thumbnail,
  }));

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

      <div className="flex-1 flex flex-col items-flex justify-center">
        {/* Centered HeroParallax component */}
        <div className="flex items-center justify-center w-full">
          <HeroParallax products={products} />
        </div>

        <main className="flex flex-col items-center justify-center p-34">
          <h2 className="text-3xl font-bold mb-8">Explore Our Products</h2>
          <FocusCards cards={cards} /> {/* Use FocusCards to display products */}
        </main>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
}