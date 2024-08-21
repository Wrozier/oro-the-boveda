"use client";

import React, { useState } from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

const WomensJewelry = () => {
  const [activeItem, setActiveItem] = useState("Women");

  const products = [
    {
      title: "Gold Earrings",
      description: "Elegant gold earrings to complement any outfit.",
      image: "/images/oroboveda.png",
    },
    {
      title: "Diamond Necklace",
      description: "A stunning diamond necklace for special occasions.",
      image: "/images/oromm-cuban.png",
    },
    {
      title: "Silver Bracelet",
      description: "A chic silver bracelet with intricate designs.",
      image: "/images/las-villas-cuban-link-bracelet-10mm-solid-cuban-link-bracelet-in-10k-yellow-gold-14328587092040_283x283_v=1587389892.png",
    },
    {
      title: "Pearl Ring",
      description: "A classic pearl ring that exudes timeless elegance.",
      image: "/images/las-villas-jewelry-cuban-link-chain-choose-your-miami-cuban-link-chain-28242425348168_283x283_v=1628111460.png",
    },
  ];

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={setActiveItem}>
        <div className="flex justify-between items-center bg-white shadow-md p-4">
          <HoveredLink href="/">
            <Image src="/images/goldvault.png" alt="Logo" width={150} height={40} />
          </HoveredLink>
          <div className="hidden md:flex space-x-6">
            {["Home", "About Us", "Men", "Women", "Contact"].map((item) => (
              <MenuItem key={item} item={item} setActive={setActiveItem} active={activeItem}>
                <HoveredLink href={`/${item.toLowerCase().replace(" ", "-")}`}>{item}</HoveredLink>
              </MenuItem>
            ))}
          </div>
        </div>
      </Menu>

      <main className="container mx-auto px-6 py-8 bg-gray-100">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Women's Jewelry</h1>
          <p className="text-lg text-gray-600">Explore our collection of luxurious and elegant jewelry for women.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                layout="responsive"
                className="object-cover h-48 w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <ParallaxScroll images={products.map(p => p.image)} />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default WomensJewelry;