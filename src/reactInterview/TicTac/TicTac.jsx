import React from "react";
import useTicTac from "./useTicTac";

const TicTac = () => {
  const { board, handleClick, getStatus, winIndex, handleSizeChange, size,getGridColsClass,resetGame } =
    useTicTac();
 
  return (
    <div className="w-[70%] mx-auto my-5 flex justify-center flex-col items-center">
      <div className="my-6">
        <select
          name="size"
          id=""
          className="p-1 mx-3"
          value={size}
          onChange={(e) => handleSizeChange(e)}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          
        </select>
        {getStatus()}
        <button className="p-1 mx-3 bg-gray-400 rounded-md" onClick={resetGame}>Reset</button>
      </div>

      <div
        className={`text-center grid   ${getGridColsClass(
          size
        )} w-max justify-items-center`}
      >
        {board.map((item, index) => (
          <button
            key={index}
            className={`p-3 border w-[100px] h-[100px]  ${
              winIndex?.includes(index)
                ? "bg-green-600"
                : "bg-gray-100  hover:bg-gray-200 "
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTac;
