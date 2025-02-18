import React from "react";

const Pagination = ({ currentPage, Total_Page, setCurrentPage }) => {
  return (
    <div>
      <button
        disabled={currentPage <= 0 ? true : false}
        className="p-2 m-2 border-[1px] border-black"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ◀️
      </button>
      {[...Array(Total_Page).keys()].map((n) => (
        <span
          key={n}
          className={`p-2 m-2 border-[1px] border-black ${
            currentPage === n && "bg-sky-600"
          }`}
        >
          <button onClick={() => setCurrentPage(n)}>{n + 1}</button>
        </span>
      ))}
      <button
        disabled={currentPage >= Total_Page - 1 ? true : false}
        className="p-2 m-2 border-[1px] border-black"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
