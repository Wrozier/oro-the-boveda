// /pages/products/vault.tsx

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"; // Check this path
import {
  IconClipboardCopy,
  IconFileBroken,
  IconHome,
  IconInfoCircle,
  IconMail,
  IconPaperBag,
  IconSignature,
  IconTableColumn,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar"; // Ensure this path is correct
import BentoGridSecondDemo from "@/components/example/bento-grid-demo-2";
import {Spotlight} from "@/components/ui/spotlight"; // Import Spotlight component

// Skeleton component definition moved above usage
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

// Existing items for the demo
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

// New Releases Section
export function NewReleases() {
  const newItems = [
    {
      title: "Latest Tech Gadgets",
      description: "Discover the newest innovations in technology.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Fresh Fashion Trends",
      description: "Stay updated with the latest fashion styles.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "New Culinary Delights",
      description: "Explore trending recipes and food innovations.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Upcoming Movie Releases",
      description: "Get ready for the most anticipated films this season.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">New Releases</h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {newItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default function VaultPage() {
  // Define navigation items for FloatingNav
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome /> },
    { name: "About Us", link: "/about-us", icon: <IconInfoCircle /> },
    { name: "Men's Jewelry", link: "/mens-jewelry", icon: <IconUser /> },
    { name: "Women's Jewelry", link: "/womens-jewelry", icon: <IconUser /> },
    { name: "Contact", link: "/contact", icon: <IconMail /> },
    { name: "Cart", link: "/cart", icon: <IconPaperBag /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-green-800 text-white">
       

      {/* Floating Navigation Bar */}
      <FloatingNav navItems={navItems} />

       {/* Spotlight Component */}
     <Spotlight /> {/* Replace TextRevealCard with Spotlight */}


      {/* Existing Components */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold">Vault Jewelry Collection</h1>
        <BentoGridSecondDemo />

        

        {/* New Releases Section */}
        <NewReleases />
      </div>
    </div>
  );
}