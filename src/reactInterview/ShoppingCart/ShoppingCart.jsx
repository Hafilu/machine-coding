import React, { useEffect, useState } from "react";
import axios from "axios";
import ProCard from "./ProCard";

const ShoppingCart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      if (res?.data?.products) {
        setData(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[85%] mx-auto my-6 text-center">
      <h1 className="text-4xl font-semibold mb-4">Shopping Cart</h1>
      {data?.length > 0 ? (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10 mt-5">
          {data?.map((item) => (
            <ProCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <h1 className="text-4xl font-semibold mb-4 text-red-700">
          No products available
        </h1>
      )}
    </div>
  );
};

export default ShoppingCart;
