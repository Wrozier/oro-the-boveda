// components/ui/SizeFilter.tsx

import React from 'react';

interface SizeFilterProps {
  onSizeSelect: (size: string) => void;
}

const SizeFilter: React.FC<SizeFilterProps> = ({ onSizeSelect }) => {
  const sizes = ["Small", "Medium", "Large"]; // Define available sizes

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter by Size</h3>
      <div className="space-y-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
