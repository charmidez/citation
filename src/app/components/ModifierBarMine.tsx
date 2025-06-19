export default function ModifierBarMine() {
  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 gap-2">

      <div className="flex flex-row lg:gap-8 md:gap-4 gap-2 justify-between">

        <div className="flex flex-row lg:gap-8 md:gap-6 gap-3 bg-base-100 rounded-box shadow-sm p-2 px-4 lg:px-8 items-center">
          <img
            src="/assets/icons/text-align-left-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5 w-auto"
          />
          <img
            src="/assets/icons/text-align-center-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5  w-auto"
          />
          <img
            src="/assets/icons/text-align-right-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5 w-auto"
          />
          <img
            src="/assets/icons/text-align-justify-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5  w-auto"
          />
          <img
            src="/assets/icons/text-bold-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5 w-auto"
          />
          <img
            src="/assets/icons/text-underline-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5 w-auto"
          />
          <img
            src="/assets/icons/text-italic-svgrepo-com.svg"
            className="lg:h-10 md:h-8 h-5 w-auto"
          />
        </div>


        <div className="flex flex-row lg:gap-8 md:gap-4 gap-2 bg-base-100 rounded-box shadow-sm p-4">
          <img src="/assets/icons/arrow-from-line-down-svgrepo-com.svg" className="lg:h-10 md:h-8 h-5 w-auto" />
        </div>
      </div>
    </div>
  );
}
