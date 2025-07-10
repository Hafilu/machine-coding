import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    alert("Item added to cart");
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: product.price,
            count: 1,
          },
        ];
      }
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    alert("Item removed form cart");
  };

  const handleCount = (id, type) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, count: type === "+" ? item.count + 1 : item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };
  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, handleRemove, handleCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
