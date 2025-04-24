"use client";

// import Image from "next/image";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderCardPage from "./SliderCard";

const RentPropertySlider = () => {
  return (
    <section className="max-w-7xl mx-auto md:px-4 py-16">
      <p className="text-sm uppercase tracking-widest text-[#0AA5CD] mb-2">
        Browse Hot Offers
      </p>
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Explore Rent Property
      </h2>

      <SliderCardPage />
    </section>
  );
};

export default RentPropertySlider;
