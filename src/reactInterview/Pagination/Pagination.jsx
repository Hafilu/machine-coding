import React from "react";

const Pagination = ({ currentPage, Total_Page, setCurrentPage }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (Total_Page <= maxPagesToShow) {
      return [...Array(Total_Page).keys()];
    }

    if (currentPage <= 2) {
      pages.push(0, 1, 2, "...", Total_Page - 1);
    } else if (currentPage >= Total_Page - 3) {
      pages.push(0, "...", Total_Page - 3, Total_Page - 2, Total_Page - 1);
    } else {
      pages.push(0, "...", currentPage - 1, currentPage, currentPage + 1, "...", Total_Page - 1);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={currentPage <= 0}
        className="p-2 border border-black"
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ◀️
      </button>
      {generatePageNumbers().map((n, index) => (
        <span key={index} className=" h-full border border-black">
          {n === "..." ? (
            <button className="p-2 ">...</button>
          ) : (
            <button
              onClick={() => setCurrentPage(n)}
              className={`${currentPage === n ? "bg-sky-600 text-white " : ""} p-2`}
            >
              {n + 1}
            </button>
          )}
        </span>
      ))}
      <button
        disabled={currentPage >= Total_Page - 1}
        className="p-2 border border-black"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
