interface MainCarteMineProps {
  imageUrl:  React.Dispatch<React.SetStateAction<string>> | string;
  citation: string;
  description?: string;
  author?: string;
}

export default function MainCarteMine({
  imageUrl,
  citation,
  description,
  author
}: MainCarteMineProps) {
  return (
    <div
      className={`flex flex-col items-center bg-base-100 rounded-box shadow-md p-4 bg-cover bg-center bg-no-repeat aspect-square w-full`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex flex-col items-center justify-center text-center w-full h-full lg:p-32 md:p-16 p-8" >
        <h2 className="text-2xl font-bold">{citation}</h2>
        {description && <p className="mt-2 text-sm">{description}</p>}
        {author && <p className="mt-2 text-sm italic font-semibold">- {author}</p>}
      </div>
    </div>
  );
}
