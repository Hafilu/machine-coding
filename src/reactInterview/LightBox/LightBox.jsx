import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1035/600/400",
  "https://picsum.photos/id/1045/600/400",
  "https://picsum.photos/id/1055/600/400",
  "https://picsum.photos/id/1065/600/400",
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const LightBoxRef = useRef();
  const openLightBox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const handleClose = () => {
    setCurrentIndex(null);
    setSelectedImage(null);
  };

  const handleOuterClick = (e) => {
    if (e.target === LightBoxRef.current) {
      handleClose();
    }
  };
  const handleNext = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const handlePrev = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") handleClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div className="w-[85%] mx-auto text-center ">
      <h1 className="text-center text-4xl font-semibold my-6">
        Light box image gallery
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`image ${index + 1}`}
            className="w-full object-cover shadow-md rounded-md "
            onClick={() => openLightBox(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0  bg-black bg-opacity-80 flex justify-center items-center"
          onClick={handleOuterClick}
          ref={LightBoxRef}
        >
          <button
            className="absolute top-5 right-5 text-3xl text-white"
            onClick={handleClose}
          >
            {" "}
            ✖
          </button>

          <button
            className="absolute left-10 text-3xl text-white"
            onClick={handlePrev}
          >
            ◀
          </button>
          <img
            src={selectedImage}
            alt="selected image"
            className="max-w-[80%] max-h-[80%] rounded-md"
          />
          <button
            className="absolute right-10 text-3xl text-white"
            onClick={handleNext}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};
export default ImageGallery;
