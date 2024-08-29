import React from "react";

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
  } | undefined;
  onAdd: () => void;
  onRemove: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onAdd, onRemove }) => {
  if (!item) {
    return null; // or some fallback UI
  }

  return (
    <div className="flex items-center justify-between">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{item.name}</span>
        <span className="text-sm text-gray-500">Price: ${item.price}</span>
        <div className="flex items-center mt-2">
          <button
            onClick={onRemove}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            onClick={onAdd}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
      </div>
      <span className="text-lg">${item.price * item.quantity}</span>
    </div>
  );
};

export default CartItem;
