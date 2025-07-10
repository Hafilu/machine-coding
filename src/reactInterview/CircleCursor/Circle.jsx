import React from "react";

const Circle = ({ ref }) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        backgroundColor: "skyblue",
      }}
    ></div>
  );
};

export default Circle;
