"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the props type for CardDemo
interface CardDemoProps {
  title: string;
  src: string;
  description: string;
}

export function CardDemo({ title, src, description }: CardDemoProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">{title}</h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">{description}</p>
        </div>
        <Image
          src={src}
          alt={title}
          className="w-full h-60 object-cover rounded-lg mb-3"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
}