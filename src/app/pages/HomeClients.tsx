import { useState } from "react";
import ImageCarouselMine from "../components/ImageCarousselMine";
import MainCarteMine from "../components/MainCarteMine";
import NavBarMine from "../components/NavBarMine";

const images = [
  "/assets/images/img1.webp",
  "/assets/images/img2.webp",
  "/assets/images/img3.webp",
  "/assets/images/img4.webp",
  "/assets/images/img5.webp",
  "/assets/images/img6.webp",
  "/assets/images/img7.webp",
  "/assets/images/img8.webp",
  "/assets/images/img9.webp",
  "/assets/images/img10.webp",
  "/assets/images/img11.webp",
  "/assets/images/img12.webp",
  "/assets/images/img13.webp",
  "/assets/images/img14.webp",
  "/assets/images/img15.webp",
  "/assets/images/img16.webp",
];

export default function HomeClients() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 g-2 lg:px-128 md:px-8 px-4 lg:py-8 md:py-4 py-2">
      <NavBarMine />
      <div className="flex flex-col lg:gap-8 md:gap-4 gap-2  bg-base-200 rounded-box shadow-sm p-4">
        <ImageCarouselMine
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          className={`  `}
        />
        <MainCarteMine
          imageUrl={selectedImage}
          citation={
            "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes. "
          }
          description={
            "C’est un rappel que le vrai défi, c’est souvent de dépasser nos propres limites. "
          }
          author={"Sir Edmund Hillary"}
        />
      </div>
    </div>
  );
}
