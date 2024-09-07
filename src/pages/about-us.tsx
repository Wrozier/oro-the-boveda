"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ImagesSlider } from "@/components/ui/images-slider"; // Import the ImagesSlider component
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";

const AboutUs: React.FC = () => {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const images = [
    "/images/product_1.png",
    "/images/oroboveda.png",
    "/images/oromm-cuban.png",
  ];

  return (
    <>
      {/* Sidebar component */}
      <div className={`flex min-h-screen flex-col ${isScrolled ? "bg-brown-900 text-green" : ""}`}>
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

        {/* ImageSlider component */}
        <ImagesSlider images={images} overlayClassName="bg-black/60">
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
            <h2 className="text-3xl font-bold">Welcome to Oro Boveda</h2>
          </div>
        </ImagesSlider>

        {/* Main content */}
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>

          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Welcome to <strong>Oro Boveda</strong>, where luxury meets timeless elegance. Our passion
              for crafting exquisite gold jewelry is at the heart of everything we do.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At Oro Boveda, we believe jewelry is more than just an accessory; it is a legacy. Our 
              designs blend a rich heritage of craftsmanship with contemporary artistry, creating 
              pieces that are both classic and modern.
            </p>
          </div>
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Whether you’re seeking a statement piece for a special occasion or a timeless addition 
              to your collection, Oro Boveda offers a range of jewelry that caters to the discerning 
              tastes of both men and women.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our commitment to quality, sustainability, and ethical practices ensures that each piece 
              is crafted with care and responsibility, radiating beauty inside and out.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Thank you for choosing Oro Boveda. We invite you to explore our collection and discover 
              the art of fine jewelry.
            </p>
          </div>
        </div>

        {/* ParallaxScroll component with images */}
        <div className="mt-8">
          <ParallaxScroll images={images} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
