import React from "react";
import { useCart } from "./CartContext";
 
const ProCard = ({ product }) => {
  const {handleAddToCart}  = useCart()
  return (
    <div className="border-2 border-black p-2">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-[200px] object-contain"
      />

      <h1 className="text-lg font-medium">{product.title}</h1>
      <p>Price: ${product.price}</p>

      <button
        className="bg-blue-700 p-2 rounded-md my-3 text-white"
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProCard;
