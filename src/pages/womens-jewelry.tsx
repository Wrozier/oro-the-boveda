"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import SizeFilter from "@/components/ui/size-filter"; // Import the SizeFilter component

// Define the products data locally
const products = [
  {
    title: "Women's Diamond Necklace",
    description: "A stunning diamond necklace for every occasion.",
    link: "/products/womens-diamond-necklace",
    thumbnail: "/images/diamondnecklace.png",
    sizes: ["Small", "Medium", "Large"], // Example sizes
  },
  {
    title: "Women's Gold Earrings",
    description: "Elegant gold earrings to elevate your style.",
    link: "/products/womens-gold-earrings",
    thumbnail: "/images/goldearrings.png",
    sizes: ["Medium", "Large"], // Example sizes
  },
  {
    title: "Women's Silver Bracelet",
    description: "A delicate bracelet for a refined look.",
    link: "/products/womens-silver-bracelet",
    thumbnail: "/images/silverbracelet.png",
    sizes: ["Small", "Large"], // Example sizes
  },
  // Add more products as needed
];

export default function WomensJewelry() {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const filteredProducts = products.filter((product) =>
    selectedSize ? product.sizes.includes(selectedSize) : true
  );

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActive}>
        <div
          className={`flex justify-between items-center w-full px-4 py-4 ${
            isScrolled ? "bg-pink-900 text-white" : ""
          }`}
        >
          <div className="navbar-left">
            <img src="/images/goldvault.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-28">
            {["Products", "Mens", "Women", "About Us", "Contact"].map((item) => (
              <MenuItem key={item} item={item} active={active} setActive={setActive}>
                <div className="flex flex-col space-y-3">
                  {filteredProducts.slice(0, 2).map((product) => (
                    <ProductItem
                      key={product.title}
                      title={product.title}
                      description={product.description}
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
                    {filteredProducts.map((product) => (
                      <ProductItem
                        key={product.title}
                        title={product.title}
                        description={product.description}
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
          src="/images/banner_womens.png"
          alt="Women's Jewelry Banner"
          className="w-full h-60 object-cover"
        />
      </div>

      {/* Filter and 3D Cards listing products */}
      <main className="min-h-screen flex-col items-start justify-center p-8">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
          {/* Filter Sidebar */}
          <div className="w-full lg:w-1/4">
            <SizeFilter onSizeSelect={handleSizeSelect} />
          </div>

          {/* Products */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <CardContainer key={product.title} className="transition-transform duration-300 w-full max-w-xs">
                  <CardBody className="relative">
                    <CardItem
                      as="a"
                      href={product.link}
                      className="p-3 bg-transparent rounded-lg shadow-lg hover:shadow-xl"
                      translateX={0}
                      translateY={0}
                      translateZ={80}
                      rotateX={0}
                      rotateY={0}
                      rotateZ={0}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-60 object-cover rounded-lg mb-3"
                      />
                      <h3 className="text-md font-semibold mb-1">{product.title}</h3>
                      <p className="text-pink-600 text-sm">{product.description}</p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </>
  );
}
