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
    <section className=" mx-auto   container  py-10">
      <p className="text-sm uppercase  text-center  tracking-widest text-[#F79B72] mb-2">
        Browse Hot Offers
      </p>
      <h2 className="text-4xl text-center font-bold text-gray-900 ">
        Explore Rent Property
      </h2>

      <SliderCardPage />
    </section>
  );
};

export default RentPropertySlider;
