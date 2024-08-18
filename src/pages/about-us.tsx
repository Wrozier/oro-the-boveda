"use client";

import React from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { HeroHighlight } from "@/components/ui/hero-highlight"; // Assuming this is the component you want to use
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const AboutUs: React.FC = () => {
  const carouselItems = [
    <Card
      key="card1"
      card={{
        src: "/images/macbook.png",
        title: "You can do more with AI.",
        category: "Artificial Intelligence",
        content: (
          <p>
            The first rule of Apple club is that you boast about Apple club.
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
        ),
      }}
      index={0}
    />,
    <Card
      key="card2"
      card={{
        src: "/images/second-image.jpg",
        title: "Enhance your productivity.",
        category: "Productivity",
        content: (
          <p>
            Use these tools to boost your efficiency and get more done.
          </p>
        ),
      }}
      index={1}
    />,
    <Card
      key="card3"
      card={{
        src: "/images/third-image.jpg",
        title: "Launching the new Apple Vision Pro.",
        category: "Product",
        content: (
          <p>
            The next evolution in Apple&apos;s product line, redefining
            innovation.
          </p>
        ),
      }}
      index={2}
    />,
  ];

  return (
    <>
      {/* Navbar-menu component */}
      <Menu setActive={() => {}}>
        <MenuItem item="Products" active={null} setActive={() => {}}>
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
        <MenuItem item="Products" active={null} setActive={() => {}}>
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
        <MenuItem item="About Us" active={null} setActive={() => {}}>
          <HoveredLink href="/about-us">About Us</HoveredLink>
        </MenuItem>
        <MenuItem item="Mens" active={null} setActive={() => {}}>
          <HoveredLink href="/mens">Mens</HoveredLink>
        </MenuItem>
        <MenuItem item="Women" active={null} setActive={() => {}}>
          <HoveredLink href="/women">Women</HoveredLink>
        </MenuItem>
        <MenuItem item="Contact" active={null} setActive={() => {}}>
          <HoveredLink href="/contact">Get in Touch</HoveredLink>
        </MenuItem>
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-gray-300"
          />
        </div>
      </Menu>

      {/* Ad banner */}
      <div className="bg-yellow-300 text-center py-4">
        <p className="text-lg font-semibold">Exclusive Offer! Get 20% off on your first purchase!</p>
      </div>

      

      {/* Main content */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-700 leading-7 mb-6 text-center">
          Welcome to Oro Boveda, where luxury meets timeless elegance. Our passion
          for crafting exquisite gold jewelry that not only adorns but also
          appreciates in value over time is at the heart of everything we do.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-6 text-center">
          At Oro Boveda, we believe that jewelry should be more than just an
          accessory; it should be a legacy. Our designs are inspired by a rich
          heritage of craftsmanship, blending traditional techniques with
          contemporary artistry to create pieces that are both classic and
          modern.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-6 text-center">
          Whether you&apos;re looking for a statement piece for a special occasion or a
          timeless addition to your collection, Oro Boveda offers a range of
          jewelry that caters to the discerning tastes of both men and women.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-6 text-center">
          Our commitment to quality, sustainability, and ethical practices ensures
          that each piece not only looks beautiful but is also crafted with care
          and responsibility.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-6 text-center">
          Thank you for choosing Oro Boveda. We invite you to explore our collection
          and discover the art of fine jewelry.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
