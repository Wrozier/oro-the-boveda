"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Footer } from "@/components/ui/footer";
import SizeFilter from "@/components/ui/size-filter";
import { IconUser, IconHeart, IconShoppingCart } from "@tabler/icons-react";

// Define the products data for both men and women
const products = [
  {
    title: "Men's Cuban Link Chain",
    description: "A timeless piece for the modern man.",
    link: "/products/mens-cuban-link",
    thumbnail: "/images/tenmmyg.png",
    sizes: ["Small", "Medium", "Large"],
    category: "men",
  },
  {
    title: "Women's Diamond Necklace",
    description: "Elegance in every detail.",
    link: "/products/womens-diamond-necklace",
    thumbnail: "/images/diamondnecklace.png",
    sizes: ["One Size"],
    category: "women",
  },
  // Add more products here...
];

export default function Products() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const filteredProducts = products.filter((product) =>
    selectedSize ? product.sizes.includes(selectedSize) : true
  );

  return (
    <>
      {/* Sidebar Component */}
      <Sidebar>
        <SidebarBody>
          <SidebarLink link={{ label: "Account", href: "/account", icon: <IconUser /> }} />
          <SidebarLink link={{ label: "Wishlist", href: "/wishlist", icon: <IconHeart /> }} />
          <SidebarLink link={{ label: "Cart", href: "/cart", icon: <IconShoppingCart /> }} />
        </SidebarBody>
      </Sidebar>

      {/* Banner Image */}
      <div className="mt-6">
        <img
          src="/images/banner_combined.png"
          alt="Jewelry Banner"
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

      {/* Footer Component */}
      <Footer />
    </>
  );
}

