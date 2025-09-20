import Process from "@features/getQuote/components/Process";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white-100">
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDQwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iNTAiIGZpbGw9IiM0QjU1NjMiLz4KPGNpcmNsZSBjeD0iOTAwIiBjeT0iMTAwIiByPSIzMCIgZmlsbD0iIzZCNzI4MCIvPgo8Y2lyY2xlIGN4PSIxMDUwIiBjeT0iMzAwIiByPSI0MCIgZmlsbD0iIzRCNTU2MyIvPgo8L3N2Zz4=')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-400 font-medium mb-2 md:mb-4 uppercase tracking-wider text-sm md:text-base">
            MIS Cleaning Company in Toronto
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-4">
            Request a Free Quote!
          </h1>
        </div>
      </div>
      {/* steps process Content Section */}
      <div className="container mx-auto my-2">
        <Process />
      </div>
    </div>
  );
};
