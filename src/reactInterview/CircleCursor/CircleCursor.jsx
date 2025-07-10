import React, { useRef, useState } from "react";
import Circle from "./Circle";

const CircleCursor = () => {
 
  const cursorRef = useRef();
  const handleMouseMove = (e) => {
    setTimeout(() => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }, 100);
  };

  return (
    <div className="h-screen  relative overflow-hidden" onMouseMove={handleMouseMove}>
      <Circle ref={cursorRef} />
    </div>
  );
};

export default CircleCursor;
