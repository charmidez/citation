interface MainCarteMineProps {
  imageUrl: React.Dispatch<React.SetStateAction<string>> | string;
  citation: string;
  description?: string;
  author?: string;
  colorText?: string;
}

export default function MainCarteMine({
  imageUrl,
  citation,
  description,
  author,
  colorText
}: MainCarteMineProps) {
  return (
    <div
      className={`flex flex-col items-center bg-base-100 rounded-2xl shadow-md p-4 bg-cover bg-center bg-no-repeat aspect-square w-full`}
      style={{ backgroundImage: `url(${imageUrl})`}}
    >
      <div className="flex flex-col items-center justify-center text-center w-full h-full lg:p-32 md:p-16 p-8"
      style={{ color: colorText || 'white' }}>
        <h2 className="text-2xl font-bold lg:text-6xl md:text-4xl"
        >
          {citation}
        </h2>
        {description && (
          <p className="mt-2 text-lg lg:text-4xl md:text-2xl">{description}</p>
        )}
      </div>
      {author && (
        <p className="mt-2 text-sm italic font-light" style={{ color: colorText || 'white' }}>- {author}</p>
      )}
    </div>
  );
}
