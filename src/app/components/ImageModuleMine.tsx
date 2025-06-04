
interface ImageModuleProps {
  // Define any props if needed
  src : string;
  alt: string;
  className ?: string;
  onClick ?: () => void;
}

export default function ImageModuleMine({ src, alt, className, onClick }: ImageModuleProps) {
  return (
    <div className="">
      <img src={src} alt={alt} className={`${className} rounded-box w-20 h-20 object-cover`} onClick={onClick}/>
    </div>
  );
}
