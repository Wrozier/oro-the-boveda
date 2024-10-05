import React from "react";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
  } | null; // Use null instead of undefined for clarity
  onAdd: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onAdd, onRemove }) => {
  if (!item) {
    return null; // Optionally, return some fallback UI here
  }

  return (
    <div className="flex items-center justify-between border-b py-4">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col mx-4">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</span>
        <div className="flex items-center mt-2">
          <button
            onClick={onRemove}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={onAdd}
            className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
      <span className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</span>
    </div>
  );
};

export default CartItem;