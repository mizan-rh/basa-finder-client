"use client";

import FilteringPage from "./filtering/Filtering";

const Bannar = () => {
  return (
    <div className="w-full bg-cover bg-center bg-no-repeat baseBannar">
      {/* Banner Content */}
      <div className="flex items-center justify-center h-[80vh] bg-black/60 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto w-full">
          <h1 className="text-white uppercase font-extrabold text-xl sm:text-2xl md:text-4xl px-4">
            Find Your Perfect Rental House Today!
          </h1>
          <div className="mt-10 sm:mt-16 px-4">
            <FilteringPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
