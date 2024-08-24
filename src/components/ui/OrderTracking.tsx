// components/ui/OrderTracking.tsx
"use client";

import React, { useState } from "react";

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      // Replace with actual API call to fetch order status
      const response = await fetch(`/api/track-order?trackingNumber=${trackingNumber}`);
      const data = await response.json();
      setOrderStatus(data.status || "Order not found");
    } catch (error) {
      console.error("Error tracking order:", error);
      setOrderStatus("Error tracking order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
      <form onSubmit={handleTrackOrder}>
        <div className="mb-4">
          <label htmlFor="trackingNumber" className="block text-sm font-medium mb-2">Tracking Number</label>
          <input
            type="text"
            id="trackingNumber"
            name="trackingNumber"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? "Tracking..." : "Track Order"}
        </button>
      </form>
      {orderStatus && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Order Status:</h3>
          <p className="text-gray-700">{orderStatus}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
