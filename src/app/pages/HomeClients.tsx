import ImageCarouselMine from "../components/ImageCarousselMine";
import MainCarteMine from "../components/MainCarteMine";
import NavBarMine from "../components/NavBarMine";

export default function HomeClients() {
  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 g-2 lg:px-128 md:px-8 px-4 lg:py-8 md:py-4 py-2">
      <NavBarMine />
      <div className="flex flex-col lg:gap-8 md:gap-4 g-2  bg-base-200 rounded-box shadow-sm p-4">
        <ImageCarouselMine />
        <MainCarteMine
          imageUrl={"/assets/images/img4.webp"}
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
