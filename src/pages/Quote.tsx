import Process from "@features/getQuote/components/Process";
import banner from "@assets/images/quote-banner.png";

export const Quote = () => {
  return (
    <div className="min-h-screen bg-white-100">
      {/* Header Section with Background Image */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={banner}
          alt="Quote Page Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex-col text-center h-full text-white">
          <p className="text-white font-medium mb-2 md:mb-4 uppercase tracking-wider text-sm md:text-base">
            Cleaning Company in Ottawa
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-4">
            Request a Free Quote!
          </h1>
        </div>
      </div>
      {/* steps process Content Section */}
      <div className="container mx-auto my-1">
        <Process />
      </div>
    </div>
  );
};
