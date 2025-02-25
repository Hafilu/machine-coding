import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);
  return (
    <div className="w-[85%] mx-auto text-center my-6">
      <h1 className="text-4xl font-medium my-8">Progress Bar</h1>
      <div className="w-full border-[1px] h-[35px] border-black rounded-3xl overflow-hidden">
        <div
          className={`bg-green-800 h-full text-right transition duration-300 ease-in ${
            animatedProgress < 5 ? "text-black  " : "text-white p-1"
          } `}
          style={{ transform: `translateX(${animatedProgress - 100}%)` }}
          role="progressbar"
          aria-label="progress"
          aria-valuenow={animatedProgress}
          aria-valuemax={100}
          aria-valuemin={0}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
