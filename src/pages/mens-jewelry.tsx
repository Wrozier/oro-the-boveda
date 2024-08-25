"use client";

import React, { useState, useEffect } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import SizeFilter from "@/components/ui/size-filter";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconInfoCircle,
  IconUser,
  IconMail,
  IconPaperBag,
} from "@/components/icons"; // Assuming these icons exist

// Define the products data locally
const products = [
  {
    title: "Men's Gold Chain",
    description: "A classic gold chain to complement your style.",
    link: "/products/mens-gold-chain",
    thumbnail: "/images/goldchain.png",
    sizes: ["Small", "Medium", "Large"], // Example sizes
  },
  {
    title: "Men's Silver Ring",
    description: "An elegant silver ring for any occasion.",
    link: "/products/mens-silver-ring",
    thumbnail: "/images/silverring.png",
    sizes: ["Medium", "Large"], // Example sizes
  },
  {
    title: "Men's Leather Bracelet",
    description: "A stylish leather bracelet for the modern man.",
    link: "/products/mens-leather-bracelet",
    thumbnail: "/images/leatherbracelet.png",
    sizes: ["Small", "Large"], // Example sizes
  },
  // Add more products as needed
];

export default function MensJewelry() {
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
      {/* Sidebar component */}
      <Sidebar>
        <SidebarBody>
          {[
            { label: "Home", href: "/", icon: <IconHome /> },
            { label: "About Us", href: "/about-us", icon: <IconInfoCircle /> },
            { label: "Men's Jewelry", href: "/mens-jewelry", icon: <IconUser /> },
            { label: "Women's Jewelry", href: "/womens-jewelry", icon: <IconUser /> },
            { label: "Contact", href: "/contact", icon: <IconMail /> },
            { label: "Cart", href: "/cart", icon: <IconPaperBag /> },
          ].map((link) => (
            <SidebarLink key={link.label} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      <div className="container mx-auto px-4">
        {/* Banner image */}
        <div className="mt-6">
          <img
            src="/images/mens_banner.png"
            alt="Men's Jewelry Banner"
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
                  <CardContainer
                    key={product.title}
                    className="transition-transform duration-300 w-full max-w-xs"
                  >
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
      </div>

      {/* Footer component */}
      <Footer />
    </>
  );
}
