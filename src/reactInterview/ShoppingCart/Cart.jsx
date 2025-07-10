import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, handleRemove, handleCount } = useCart();
  const totalPrice = cartItems.reduce(
    (accu, currentValue) => currentValue.count * currentValue.price + accu,
    0
  );
  return (
    <div className="w-[85%] mx-auto text-center">
      <h1 className="text-2xl my-4 text-center">Cart Page</h1>

      {cartItems?.length > 0 ? (
        <>
          <table className="w-full border-collapse border-2 border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Id</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Count</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">{item.count}</td>
                  <td className="border p-2">
                    <button
                      className="p-2 rounded-sm bg-gray-500"
                      onClick={() => handleCount(item.id, "+")}
                    >
                      +
                    </button>
                    <button
                      className="p-2 rounded-sm bg-gray-500 mx-2"
                      disabled={item.count === 1}
                      onClick={() => handleCount(item.id, "-")}
                    >
                      -
                    </button>
                    <button
                      className="p-2 rounded-sm bg-red-600"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right my-3">Total Price : {totalPrice.toFixed(2)}</div>
        </>
      ) : (
        <p>No items present in cart</p>
      )}
    </div>
  );
};

export default Cart;
