"use client";

import image1 from "@/assets/images/image/home-1.jpg";
import image2 from "@/assets/images/image/home-2.jpg";
import image3 from "@/assets/images/image/home-3.jpg";
import image4 from "@/assets/images/image/home-4.jpg";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    title: "Yolo Happy House",
    price: 30,
    location: "New York",
    area: "30 m2",
    type: "Mountain",
    bed: "3 bed",
    image: image1,
  },
  {
    id: 2,
    title: "Family House",
    price: 30,
    location: "San Diego",
    area: "30 m2",
    type: "City",
    bed: "4 bed",
    image: image2,
  },
  {
    id: 3,
    title: "House of the Star",
    price: 30,
    location: "New York",
    area: "40 m2",
    type: "Mountain",
    bed: "1 bed",
    image: image3,
  },
  {
    id: 4,
    title: "Room Luxury",
    price: 50,
    location: "Los Angeles",
    area: "40 m2",
    type: "River",
    bed: "2 bed",
    image: image4,
  },
  {
    id: 5,
    title: "Room Luxury",
    price: 50,
    location: "Los Angeles",
    area: "40 m2",
    type: "River",
    bed: "2 bed",
    image: image4,
  },
  {
    id: 6,
    title: "Room Luxury",
    price: 50,
    location: "Los Angeles",
    area: "40 m2",
    type: "River",
    bed: "2 bed",
    image: image4,
  },
];

const RentPropertySlider = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-sm uppercase tracking-widest text-[#0AA5CD] mb-2">
        Browse Hot Offers
      </p>
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        Explore Rent Property
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative h-52 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Featured
                </span>
                <span className="absolute top-2 right-2 text-white text-xl">
                  ♡
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{property.title}</h3>
                <p className="text-blue-600 font-bold text-sm">
                  £{property.price}.00 <span className="text-gray-500"></span>
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{property.area}</span>
                  <span>{property.type}</span>
                  <span>{property.bed}</span>
                </div>
                <p className="text-sm text-gray-600 pt-2">
                  {property.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RentPropertySlider;
