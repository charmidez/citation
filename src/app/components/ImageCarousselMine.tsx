import { useEffect, useState, type SetStateAction } from "react";
import ImageModuleMine from "./ImageModuleMine";

type ImageWithColor = {
  src: string;
  color: string;
};

interface ImageCarouselProps {
  images: ImageWithColor[];
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageWithColor>>;
  selectedImage: string;
  className?: string;
}

export default function ImageCarouselMine({
  images,
  setSelectedImage,
  selectedImage,
  className,
}: ImageCarouselProps) {
  const handleClick = (imgWithColor: SetStateAction<ImageWithColor>) => {
    setSelectedImage(imgWithColor);
  };

  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 480) {
        // sm
        setVisibleCount(4);
      } else if (width < 1080) {
        // md
        setVisibleCount(8);
      } else {
        // lg ou +
        setVisibleCount(10);
      }
    };

    updateCount(); // au chargement
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  {
    /*
    
      //const [startIndex, setStartIndex] = useState(0);
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
    */
  }

  {
    /* Carousel controls
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
  
  */
  }

  return (
    <div className="flex items-center ">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform duration-500 ease-in-out justify-between">
          {images.slice(0, visibleCount).map((imgWithColor, index) => (
            <div
              className="px-0.5 justify-around items-center"
              key={index}
              onClick={() => handleClick(imgWithColor)}
            >
              <ImageModuleMine
                src={imgWithColor.src}
                alt={`img-${index}`}
                //style={{  }}
                className={`${className}  ${
                  selectedImage === imgWithColor.src
                    ? "border-3 border-base-content "
                    : "border-1 border-base-300"
                }   border-base-300 border-4  object-cover`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
