// components/ui/CartItem.tsx
"use client";

import React from "react";
import Image from "next/image";

const CartItem = ({ item }: { item: { id: number; name: string; price: number; quantity: number; thumbnail: string } }) => {
  return (
    <div className="flex items-center border-b py-4">
      <Image src={item.thumbnail} alt={item.name} width={80} height={80} className="mr-4 rounded" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
