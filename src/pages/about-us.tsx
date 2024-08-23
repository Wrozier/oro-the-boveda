"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ImagesSlider } from "@/components/ui/images-slider"; // Import the ImageSlider component

const AboutUs: React.FC = () => {
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

  const images = [
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
  ];

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <div
          className={`flex justify-between items-center w-full px-4 py-4 ${
            isScrolled ? "bg-brown-900 text-green" : ""
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
            <MenuItem item="Mens" active={active} setActive={setActive}>
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

      {/* ImageSlider component */}
      <ImagesSlider images={images} overlayClassName="bg-black/60">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
          <h2 className="text-3xl font-bold">Welcome to Oro Boveda</h2>
        </div>
      </ImagesSlider>

      

      {/* ParallaxScroll component with images */}
      <div className="mt-8">
        <ParallaxScroll images={images} />
      </div>
    </>
  );
};

export default AboutUs;
