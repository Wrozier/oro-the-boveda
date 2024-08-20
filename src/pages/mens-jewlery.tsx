"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Footer } from "@/components/ui/footer";

export default function MensJewelry() {
  const [active, setActive] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = [
    {
      title: "Men's Cuban Link Chain",
      description: "A timeless piece for the modern man.",
      link: "/products/mens-cuban-link",
      thumbnail: "/images/tenmmyg.png",
    },
    {
      title: "Men's Gold Ring",
      description: "Elegance in every detail.",
      link: "/products/mens-gold-ring",
      thumbnail: "/images/oro-micro-cuban-link-chain.png",
    },
    {
      title: "Men's Gold Bracelet",
      description: "Luxury on your wrist.",
      link: "/products/mens-gold-bracelet",
      thumbnail: "/images/mensbracelet.png",
    },{
        title: "Men's Cuban Link Chain",
        description: "A timeless piece for the modern man.",
        link: "/products/mens-cuban-link",
        thumbnail: "/images/tenmmyg.png",
      },
      {
        title: "Men's Gold Ring",
        description: "Elegance in every detail.",
        link: "/products/mens-gold-ring",
        thumbnail: "/images/oro-micro-cuban-link-chain.png",
      },
      {
        title: "Men's Gold Bracelet",
        description: "Luxury on your wrist.",
        link: "/products/mens-gold-bracelet",
        thumbnail: "/images/mensbracelet.png",
      },
    
  ];

  // Extract image URLs from the products
  const productImages = products.map((product) => product.thumbnail);

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <div className={`flex justify-between items-center w-full px-4 ${isScrolled ? 'bg-gray-900 text-white' : ''}`}>
          <div className="navbar-left">
            <img src="/images/goldvault.png" alt="Logo" className="h-10" />
          </div>
          <div className="flex space-x-4">
            <MenuItem item="Products" active={active} setActive={setActive}>
              <HoveredLink href="/products">Products</HoveredLink>
            </MenuItem>
            <MenuItem item="About Us" active={active} setActive={setActive}>
              <HoveredLink href="src/pages/about-us">About Us</HoveredLink>
            </MenuItem>
            <MenuItem item="Mens" active={active} setActive={setActive}>
              <HoveredLink href="/mens">Mens</HoveredLink>
            </MenuItem>
            <MenuItem item="Women" active={active} setActive={setActive}>
              <HoveredLink href="/women">Women</HoveredLink>
            </MenuItem>
            <MenuItem item="Contact" active={active} setActive={setActive}>
              <HoveredLink href="/contact">Get in Touch</HoveredLink>
            </MenuItem>
          </div>
        </div>
      </Menu>

      {/* Banner image */}
      <div className="relative">
        <img src="/images/banner_mens.png" alt="Men's Jewelry Banner" className="w-full h-64 object-cover" />
      </div>

      {/* ParallaxScroll component */}
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <ParallaxScroll images={productImages} />

        {/* Product Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <ProductItem
              key={product.title}
              title={product.title}
              description={product.description}
              href={product.link}
              src={product.thumbnail}
            />
          ))}
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
