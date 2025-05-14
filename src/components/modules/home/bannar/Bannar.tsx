"use client";

import FilteringPage from "./filtering/Filtering";

const Bannar = () => {
  return (
    <div className="mx-auto container">
      {/* Banner Wrapper */}
      <div className="wreeper">
        <div className="baseBannar h-[80vh] flex items-center justify-center">
          <div className="w-full py-[10%] lg:px-10 md:px-6">
            <div className="font-black md:text-3xl text-xl text-center uppercase text-white px-5">
              Find Your Perfect Rental House Today!
            </div>
            <div className="py-9">
              <FilteringPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
