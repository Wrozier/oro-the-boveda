"use client";

import React, { useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import { Sidebar, SidebarLink, SidebarBody } from "@/components/ui/sidebar";
import SizeFilter from "@/components/ui/size-filter";
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";
import Lamp from "@/components/ui/lamp"; // Import LampDemo component
import Link from "next/link";

// Define the products data locally
const products = [
  {
    title: "Men's Cuban Link Chain",
    description: "A timeless piece for the modern man.",
    link: "/products/mens-cuban-link",
    thumbnail: "/images/tenmmyg.png",
    sizes: ["Small", "Medium", "Large"],
  },
  {
    title: "Men's Gold Ring",
    description: "Elegance in every detail.",
    link: "/products/mens-gold-ring",
    thumbnail: "/images/goldvault.png",
    sizes: ["Medium", "Large"],
  },
  {
    title: "Men's Gold Bracelet",
    description: "Luxury on your wrist.",
    link: "/products/mens-gold-bracelet",
    thumbnail: "/images/oroboveda.png",
    sizes: ["Small", "Large"],
  },
  // More product entries here...
];

export default function MensJewelry() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const filteredProducts = products.filter((product) =>
    selectedSize ? product.sizes.includes(selectedSize) : true
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
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

        <div className="flex-1">
          {/* LampDemo component replacing Banner image */}
          <Lamp /> {/* Replaces banner image with LampEffect demo */}

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
                          <h3 className="text-md font-semibold mb-1">
                            {product.title}
                          </h3>
                          <p className="text-brown-600 text-sm">
                            {product.description}
                          </p>
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
        </div>
      </div>
    </div>
  );
}
