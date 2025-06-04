import { useState, useEffect, type SetStateAction } from "react";
import ImageModuleMine from "./ImageModuleMine";

interface ImageCarouselProps {
  images: string[];
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  selectedImage: string;
  className?: string;
}


export default function ImageCarouselMine({ images, setSelectedImage, selectedImage, className } : ImageCarouselProps) {

  const handleClick = (src: SetStateAction<string>) => {
    setSelectedImage(src);

  };


  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(3); // sm
      } else if (width < 1024) {
        setVisibleCount(4); // md
      } else {
        setVisibleCount(5); // lg
      }
    };

    updateVisibleCount(); // initial
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const next = () => {
    if (startIndex < images.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex items-center ">
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
            <div className="px-0.5" key={index}
            onClick={() => handleClick(src)} >
              <ImageModuleMine src={src} alt={`img-${index}`} className={`${className}  ${
                                selectedImage === images[index]
                                  ? "border-3 border-base-content "
                                  : "border-1 border-base-300"
                              }   border-base-300 border-4  object-cover`} />
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
