import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Product = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );
      setData(result?.data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const Total_Page = Math.ceil(data.length / PAGE_SIZE);
  const Start = currentPage * PAGE_SIZE;
  const End = Start + PAGE_SIZE;

  return (
    <div className="text-center  w-[85%] mx-auto m-5">
      <h1 className="text-4xl">Pagination</h1>
      {!data.length ? (
        <h4 className="text-red-600">No ptoducts found</h4>
      ) : (
        <>
          {" "}
          <div className="flex flex-wrap py-10">
            {data.slice(Start, End).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}{" "}
          </div>
          <Pagination
            currentPage={currentPage}
            Total_Page={Total_Page}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Product;
