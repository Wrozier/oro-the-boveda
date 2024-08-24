// components/ui/PostalSelection.tsx
"use client";

import React, { useState } from "react";

interface PostalSelectionProps {
  setSelectedPostal: (postal: string | null) => void;
}

const PostalSelection = ({ setSelectedPostal }: PostalSelectionProps) => {
  const [selectedPostal, setSelectedPostalState] = useState<string | null>(null);

  const handlePostalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const postal = e.target.value;
    setSelectedPostalState(postal);
    setSelectedPostal(postal);
  };

  return (
    <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Select Postal Service</h2>
      <select
        value={selectedPostal || ""}
        onChange={handlePostalChange}
        className="w-full p-2 border rounded"
      >
        <option value="" disabled>Select a postal service</option>
        <option value="fedex">FedEx</option>
        <option value="usps">USPS</option>
      </select>
    </div>
  );
};

export default PostalSelection;
