
interface ImageModuleProps {
  // Define any props if needed
  src : string;
  alt: string;
}

export default function ImageModuleMine({ src, alt }: ImageModuleProps) {
  return (
    <div className="">
      <img src={src} alt={alt} className="rounded-box w-48 h-48 border-base-300 border-4  object-cover"/>
    </div>
  );
}
