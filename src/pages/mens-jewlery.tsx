"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Footer } from "@/components/ui/footer";

export default function MensJewelry() {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    },
  ];

  // Extract image URLs from the products
  const productImages = products.map((product) => product.thumbnail);

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <div
          className={`flex justify-between items-center w-full px-4 py-4 ${
            isScrolled ? "bg-brown-900 text-white" : ""
          }`}
        >
          <div className="navbar-left">
            <img src="/images/goldvault.png" alt="Logo" className="h-10" />
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-28">
            {["Products", "Mens", "Women", "About Us", "Contact"].map((item) => (
              <MenuItem key={item} item={item} active={active} setActive={setActive}>
                <div className="flex flex-col space-y-3">
                  {products.slice(0, 2).map((product) => (
                    <ProductItem
                      key={product.title}
                      title={product.title}
                      description={`Description for ${product.title}`}
                      href={product.link}
                      src={product.thumbnail}
                    />
                  ))}
                </div>
              </MenuItem>
            ))}
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
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 p-4 bg-white shadow-md">
              {["Products", "Mens", "Women", "About Us", "Contact"].map((item) => (
                <MenuItem key={item} item={item} active={active} setActive={setActive}>
                  <div className="flex flex-col space-y-4">
                    {products.map((product) => (
                      <ProductItem
                        key={product.title}
                        title={product.title}
                        description={`Description for ${product.title}`}
                        href={product.link}
                        src={product.thumbnail}
                      />
                    ))}
                  </div>
                </MenuItem>
              ))}
              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="px-4 py-2 rounded-full border border-gray-300 w-full"
                />
              </div>
            </div>
          </div>
        )}
      </Menu>

      {/* Banner image */}
      <div className="mt-6">
        <img
          src="/images/banner_mens.png"
          alt="Men's Jewelry Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* ParallaxScroll component */}
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <ParallaxScroll images={productImages} />

        {/* Product Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div key={product.title} className="product-item">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <a
                  href={product.link}
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
