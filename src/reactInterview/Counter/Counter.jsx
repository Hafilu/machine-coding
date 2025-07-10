import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    isOddOrEven,
    renderRef,
    countRef,
  } = useCounter();
  return (
    <div className="w-[85%] mx-auto my-6 text-center">
      <h1 className="text-3xl my-3 font-semibold ">Counter</h1>
      <p> Counter: {count}</p>
      <p>Previous: {countRef.current} </p>
      <p>Even/Odd: {isOddOrEven}</p>
      <button className="border p-1 m-2" onClick={incrementCount}>
        Increment
      </button>
      <button className="border p-1 m-2" onClick={decrementCount}>
        {" "}
        Decrement{" "}
      </button>
      <button className="border p-1 m-2" onClick={resetCount}>
        Reset
      </button>
      <p>Render Count: {renderRef.current}</p>
    </div>
  );
};

export default Counter;
