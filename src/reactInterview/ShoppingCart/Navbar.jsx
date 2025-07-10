import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const CartCount = cartItems.reduce((accu, item) => item.count + accu, 0);
  return (
    <div className="text-right p-6 bg-gray-100">
      <nav>
        <ul className="flex justify-end gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart{" "}
              {CartCount > 0 && (
                <span className="bg-red-700 text-white rounded-full p-1">
                  {CartCount}
                </span>
              )}{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
