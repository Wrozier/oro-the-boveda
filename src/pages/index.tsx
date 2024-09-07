"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Footer } from "@/components/ui/footer";
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

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
    // Add more products as needed...
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

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Centered HeroParallax component */}
          <div className="flex items-center justify-center w-full">
            <HeroParallax products={products} />
          </div>

          <main className="flex flex-col items-center justify-center p-24">
            <h2 className="text-3xl font-bold mb-8">Explore Our Carousel</h2>
            <Carousel items={items} />
          </main>

          {/* Footer component */}
          <Footer />
        </div>
      </div> 
    </div>
  );
}
