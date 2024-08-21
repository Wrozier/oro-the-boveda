"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Footer } from "@/components/ui/footer";

export default function Home() {
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
      title: "Vault",
      link: "/products/vault",
      thumbnail: "/images/goldvault.png",
    },
    {
      title: "Customs",
      link: "/products/customs",
      thumbnail: "/images/product_1.png",
    },
    {
      title: "Apple Watch",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
    },
    {
      title: "MacBook Pro",
      link: "/products/macbook-pro",
      thumbnail: "/images/goldvault.png",
    },
    {
      title: "iPhone 14",
      link: "/products/iphone-14",
      thumbnail: "/images/product_1.png",
    },
    {
      title: "Apple Watch",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
    },
    {
      title: "MacBook Pro",
      link: "/products/macbook-pro",
      thumbnail: "/images/goldvault.png",
    },
    {
      title: "iPhone 14",
      link: "/products/iphone-14",
      thumbnail: "/images/product_1.png",
    },
    {
      title: "Apple Watch",
      link: "/products/apple-watch",
      thumbnail: "/images/oromm-cuban.png",
    },
  ];

  // Map products to Card components
  const items = products.map((product) => (
    <Card
      key={product.title}
      card={{
        src: product.thumbnail,
        title: product.title,
        category: "Product",
        content: <p>Some description or content related to {product.title}</p>,
      }}
      index={0}
    />
  ));

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <div
          className={`flex justify-between items-center w-full px-4 py-4 ${
            isScrolled ? "bg-gray-900 text-white" : ""
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
            <MenuItem item="Products" active={active} setActive={setActive}>
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
            <MenuItem item="About Us" active={active} setActive={setActive}>
              <HoveredLink href="/about-us">About Us</HoveredLink>
            </MenuItem>
            <MenuItem item="Mens" active={active} setActive={setActive}>
              <HoveredLink href="/mens-jewlery">Men's Jewlery</HoveredLink>
            </MenuItem>
            <MenuItem item="Women" active={active} setActive={setActive}>
              <HoveredLink href="/womens-jewlery">Women's Jewlery</HoveredLink>
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
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 p-4 bg-white shadow-md">
              <MenuItem item="Products" active={active} setActive={setActive}>
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
              <MenuItem item="About Us" active={active} setActive={setActive}>
                <HoveredLink href="/about-us">About Us</HoveredLink>
              </MenuItem>
              <MenuItem item="Mens" active={active} setActive={setActive}>
                <HoveredLink href="/mens-jewelry">Men's Jewelry</HoveredLink>
              </MenuItem>
              <MenuItem item="Women" active={active} setActive={setActive}>
                <HoveredLink href="/womens-jewelry">Women's Jewelry</HoveredLink>
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
                  className="px-4 py-2 rounded-full border border-gray-300 w-full"
                />
              </div>
            </div>
          </div>
        )}
      </Menu>

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