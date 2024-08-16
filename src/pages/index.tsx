"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const products = [
    {
      title: "MacBook Pro",
      link: "/products/macbook-pro",
      thumbnail: "/images/macbook.png",
    },
    {
      title: "iPhone 14",
      link: "/products/iphone-14",
      thumbnail: "/images/second-image.jpg",
    },
    {
      title: "Apple Watch",
      link: "/products/apple-watch",
      thumbnail: "/images/third-image.jpg",
    },
  ];

  // Map products to Card components
  const items = products.map((product) => (
    <Card
      key={product.title}
      card={{
        src: product.thumbnail,
        title: product.title,
        category: "Product", // Example category
        content: (
          <p>
            Some description or content related to {product.title}
          </p>
        ),
      }} index={0}    />
  ));

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <MenuItem item="Products" active={active} setActive={setActive}>
          <div className="flex flex-col space-y-4">
            <ProductItem
              title="MacBook Pro"
              description="The best for the brightest."
              href="/products/macbook-pro"
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <ProductItem
              title="iPhone 14"
              description="The ultimate iPhone."
              href="/products/iphone-14"
              src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </MenuItem>
        <MenuItem item="About Us" active={active} setActive={setActive}>
          <HoveredLink href="/about">Our Story</HoveredLink>
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
        
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-gray-300"
          />
        </div>
      </Menu>

      {/* TracingBeam component */}
      {isScrolled && <TracingBeam><></></TracingBeam>}

      {/* HeroParallax component */}
      <HeroParallax products={products} />

      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h2 className="text-3xl font-bold mb-8">Explore Our Carousel</h2>
        <Carousel items={items} />
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
