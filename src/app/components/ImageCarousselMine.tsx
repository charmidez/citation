import { useState } from "react";
import ImageModuleMine from "./ImageModuleMine";

const images = [
  "/assets/images/img1.webp",
  "/assets/images/img2.webp",
  "/assets/images/img3.webp",
  "/assets/images/img4.webp",
  "/assets/images/img1.webp",
  "/assets/images/img2.webp",
  "/assets/images/img3.webp",
  "/assets/images/img4.webp",
  "/assets/images/img1.webp",
  "/assets/images/img2.webp",
  "/assets/images/img3.webp",
  "/assets/images/img4.webp",
];


export default function ImageCarouselMine() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const next = () => {
    if (startIndex < images.length - visibleCount) {
      setStartIndex(startIndex + 1);
    } else if (startIndex === images.length - visibleCount) {
      setStartIndex(startIndex); // Reset to the start if at the end
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 w-full">
      <button onClick={prev} className="btn btn-circle btn-outline">
        ‹
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
            width: `${(images.length * 100) / visibleCount}%`,
          }}
        >
          {images.map((src, index) => (
            <div className="px-2" key={index} >
              <ImageModuleMine src={src} alt={`img-${index}`} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={next} className="btn btn-circle btn-outline">
        ›
      </button>
    </div>
  );
}
