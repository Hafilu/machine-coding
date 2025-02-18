import React, { useEffect, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DSVzIT_2TIxfTurND2v6IXBAlCJgxlDYZw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOimYKPjz33XAyBr-R2sGwtHDKaSzUskQMQ4mXcgkTOoMjLn9_MUmHDw2YzWd1JEMPCs&usqp=CAU",
  "https://c4.wallpaperflare.com/wallpaper/346/957/169/dubai-megapolis-night-cities-2560%C3%971600-wallpaper-preview.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgeJfuFEvNRpofEfUKwERMQWSjX4GaOnh3LM3eqVPGRmV1-MUuTn6GJFYkYVXLtL90iY&usqp=CAU",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((prev) => (!index ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <>
      <h1 className="text-4xl text-center my-6">Image slider</h1>
      <div className="flex justify-center items-center h-screen">
        <button onClick={handlePrev} className="p-10">
          prev
        </button>
        {images.map((url, i) => (
          <img
            key={url}
            src={url}
            alt="slider images"
            className={`w-[600px] h-[400px] object-contain ${
              index === i ? "block" : "hidden"
            }`}
          />
        ))}

        <button onClick={handleNext} className="p-10">
          next
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
