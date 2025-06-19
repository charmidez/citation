import { useState } from "react";
import ImageCarouselMine from "../components/ImageCarousselMine";
import MainCarteMine from "../components/MainCarteMine";
import NavBarMine from "../components/NavBarMine";
import ModifierBarMine from "../components/ModifierBarMine";

const images = [
  { src: "/assets/images/img1.webp", color: "white" },
  { src: "/assets/images/img2.webp", color: "black" },
  { src: "/assets/images/img3.webp", color: "white" },
  { src: "/assets/images/img4.webp", color: "black" },
  { src: "/assets/images/img5.webp", color: "white" },
  { src: "/assets/images/img6.webp", color: "black" },
  { src: "/assets/images/img7.webp", color: "white" },
  { src: "/assets/images/img8.webp", color: "black" },
  { src: "/assets/images/img9.webp", color: "white" },
  { src: "/assets/images/img10.webp", color: "black" },
];

export default function HomeClients() {
  const [selectedImage, setSelectedImage] = useState(images[0]);



  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 gap-2 lg:px-128 md:px-8 px-4 lg:py-8 md:py-4 py-2">
      <NavBarMine />
      <div className="flex flex-col lg:gap-8 md:gap-4 gap-2  bg-base-200 rounded-box p-4">
        <ImageCarouselMine
          images={images}
          selectedImage={selectedImage.src}
          setSelectedImage={setSelectedImage}
        />
        <MainCarteMine
          imageUrl={selectedImage.src}
          citation={
            "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes. "
          }
          colorText={selectedImage.color}
          description={
            "C’est un rappel que le vrai défi, c’est souvent de dépasser nos propres limites. "
          }
          author={"Sir Edmund Hillary"}
        />
        <ModifierBarMine />
      </div>
    </div>
  );
}
