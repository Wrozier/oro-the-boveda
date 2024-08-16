"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BankVaultBackground = ({
  children,
  className,
  containerClassName,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      const w = (ctx.canvas.width = window.innerWidth);
      const h = (ctx.canvas.height = window.innerHeight);
      ctx.fillStyle = "#333"; // Dark background representing the vault
      ctx.fillRect(0, 0, w, h);

      // Draw vault door (simplified as a circle for this example)
      const doorRadius = Math.min(w, h) / 4;
      const doorX = w / 2;
      const doorY = h / 2;

      drawVaultDoor(ctx, doorX, doorY, doorRadius);

      if (isAnimating) {
        animateVaultOpening(ctx, doorX, doorY, doorRadius);
      }
    }
  };

  const drawVaultDoor = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
  ) => {
    // Draw the vault door
    ctx.fillStyle = "#888";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Draw lock tips
    drawLockTips(ctx, x, y, radius);
  };

  const drawLockTips = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    angleOffset = 0
  ) => {
    const numTips = 6;
    const tipLength = radius * 0.3;
    const tipWidth = radius * 0.05;

    for (let i = 0; i < numTips; i++) {
      const angle = (i * (2 * Math.PI)) / numTips + angleOffset;
      const tipX = x + Math.cos(angle) * (radius - tipLength);
      const tipY = y + Math.sin(angle) * (radius - tipLength);

      ctx.save();
      ctx.translate(tipX, tipY);
      ctx.rotate(angle);
      ctx.fillStyle = "#555";
      ctx.fillRect(-tipWidth / 2, 0, tipWidth, tipLength);
      ctx.restore();
    }
  };

  const animateVaultOpening = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
  ) => {
    let startAngle = 0;
    const endAngle = 2 * Math.PI;
    const step = 0.02;
    let angleOffset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#333";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Draw vault door and rotating lock tips
      drawVaultDoor(ctx, x, y, radius);
      drawLockTips(ctx, x, y, radius, angleOffset);

      if (startAngle < endAngle) {
        startAngle += step;
        angleOffset += step; // Spin lock tips
        requestAnimationFrame(draw);
      }
    };

    draw();
  };

  useEffect(() => {
    init();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
    };
  }, [isAnimating]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
      onClick={() => setIsAnimating(true)} // Start animation on click
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
