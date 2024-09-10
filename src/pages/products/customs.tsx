"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"; // Particles background
import { FloatingNav } from "@/components/ui/floating-navbar"; // Floating navigation
import { Timeline } from "@/components/ui/timeline"; // Custom design list
import { IconHome, IconInfoCircle, IconUser, IconMail, IconPaperBag } from "@tabler/icons-react";

const customsData = [
  {
    title: "Custom Gold Ring",
    content: (
      <div>
        <p>This exquisite gold ring features intricate engravings and a stunning gemstone centerpiece.</p>
      </div>
    ),
  },
  {
    title: "Personalized Necklace",
    content: (
      <div>
        <p>A beautiful necklace that can be personalized with initials or special dates, making it a perfect gift.</p>
      </div>
    ),
  },
  {
    title: "Custom Bracelet",
    content: (
      <div>
        <p>This bracelet combines elegance and style with customizable charms that represent personal milestones.</p>
      </div>
    ),
  },
  {
    title: "Bespoke Earrings",
    content: (
      <div>
        <p>Elegant earrings designed to complement any outfit, featuring custom shapes and finishes.</p>
      </div>
    ),
  },
  // Add more custom designs as needed
];

const CustomsPage: React.FC = () => {
  return (
    <>
      {/* Particles Background */}
      <SparklesCore background="#0d47a1" particleDensity={120} />

      {/* Floating Navigation Bar */}
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <IconHome /> },
          { name: "About Us", link: "/about-us", icon: <IconInfoCircle /> },
          { name: "Custom Designs", link: "/customs", icon: <IconUser /> },
          { name: "Contact", link: "/contact", icon: <IconMail /> },
          { name: "Cart", link: "/cart", icon: <IconPaperBag /> },
        ]}
      />

      {/* Timeline for Custom Designs */}
      <Timeline data={customsData} />
    </>
  );
};

export default CustomsPage;