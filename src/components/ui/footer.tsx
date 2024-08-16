"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};
