
interface ImageModuleProps {
  // Define any props if needed
  src : string;
  alt: string;
}

export default function ImageModuleMine({ src, alt }: ImageModuleProps) {
  return (
    <div className="">
      <img src={src} alt={alt} />
    </div>
  );
}
