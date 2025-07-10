import React, { useState } from "react";

const WithAnime = WrappedComponent => {
  const HOC =  () => {
    const [isHover, setIsHover] = useState(false);

    const MouseEnterHandler = () => {
      setIsHover(true);
    };

    const MouseLeaveHandler = () => {
      setIsHover(false);
    };
    return (
      <div
        className={`${isHover ? "bg-green-600" : ""} w-[80%] mx-auto text-center`}
        onMouseEnter={MouseEnterHandler}
        onMouseLeave={MouseLeaveHandler}
      >
        <WrappedComponent />
      </div>
    );
  };

  return HOC
};

export default WithAnime;
