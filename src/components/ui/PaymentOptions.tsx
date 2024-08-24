// components/ui/PaymentOptions.tsx
"use client";

import React, { useState } from "react";

interface PaymentOptionsProps {
  setPaymentMethod: (method: string | null) => void;
}

const PaymentOptions = ({ setPaymentMethod }: PaymentOptionsProps) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const method = e.target.value;
    setSelectedPayment(method);
    setPaymentMethod(method);
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="paypal"
            checked={selectedPayment === "paypal"}
            onChange={handlePaymentChange}
            className="form-radio"
          />
          <span>PayPal</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="stripe"
            checked={selectedPayment === "stripe"}
            onChange={handlePaymentChange}
            className="form-radio"
          />
          <span>Stripe</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="affirm"
            checked={selectedPayment === "affirm"}
            onChange={handlePaymentChange}
            className="form-radio"
          />
          <span>Affirm</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="cashapp"
            checked={selectedPayment === "cashapp"}
            onChange={handlePaymentChange}
            className="form-radio"
          />
          <span>Cash App</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentOptions;
