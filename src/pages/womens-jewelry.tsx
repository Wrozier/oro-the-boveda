"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import SizeFilter from "@/components/ui/size-filter";
import { IconDiamond, IconHeart, IconGift } from "@tabler/icons-react";

// Define the products data locally
const products = [
  {
    title: "Women's Diamond Necklace",
    description: "Sparkle and shine with elegance.",
    link: "/products/womens-diamond-necklace",
    thumbnail: "/images/diamond-necklace.png",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Women's Gold Earrings",
    description: "Timeless beauty in every detail.",
    link: "/products/womens-gold-earrings",
    thumbnail: "/images/gold-earrings.png",
    sizes: ["Medium", "Large"],
  },
  {
    title: "Women's Bracelet",
    description: "Grace on your wrist.",
    link: "/products/womens-bracelet",
    thumbnail: "/images/bracelet.png",
    sizes: ["Small", "Large"],
  },
  // Add more products as needed...
];

const sidebarLinks = [
  { label: "Products", href: "/products", icon: <IconDiamond /> },
  { label: "Mens", href: "/mens-jewelry", icon: <IconHeart /> },
  { label: "Women", href: "/womens-jewelry", icon: <IconGift /> },
  { label: "About Us", href: "/about-us", icon: <IconHeart /> },
  { label: "Contact", href: "/contact", icon: <IconGift /> },
];

export default function WomensJewelry() {
  const [active, setActive] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
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
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

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
                      <p className="text-brown-600 text-sm">{product.description}</p>
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
