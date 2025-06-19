import { useRef } from "react";
import html2canvas from "html2canvas";
import MainCarteMine from "./MainCarteMine";

interface SaveImageProps {
  selectedImage: {
    src: string;
    color: string;
  };
  component ?: React.ReactNode;
}

function SaveImage({ selectedImage, component }: SaveImageProps) {
  const carteRef = useRef(null);

  const handleSave = async () => {
    const canvas = await html2canvas(carteRef.current, {
      useCORS: true, // si ton image a CORS
      scale: 2, // pour une meilleure qualité
    });

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "carte.png";
    link.click();
  };

  return (
    <div>
      <div ref={carteRef} style={{ width: "500px" }}>
        {component}
      </div>

      <button onClick={handleSave}>Sauvegarder la carte</button>
    </div>
  );
}
