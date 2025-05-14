"use client";

import bgImage from "@/assets/images/image/banner-7.jpg";
import Image from "next/image";
import {
  FaHandsHelping,
  FaHome,
  FaUserFriends,
  FaWarehouse,
} from "react-icons/fa";

const RulesSection = () => {
  return (
    <section className="relative w-full ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="House background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="container mx-auto px-4 md:px-20 py-16 text-white">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">
          {/* Left Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight py-6">
              Rules Before <br className="hidden lg:block" /> Taking House on
              Rent
            </h2>
            <button className="bg-[#F79B72] hover:bg-white hover:border hover:border-[#F79B72] hover:text-[#F79B72] px-6 py-3 rounded-xl font-semibold transition duration-300 cursor-pointer">
              Read More
            </button>
          </div>

          {/* Rules List */}
          <ul className="space-y-4 text-sm sm:text-base lg:pl-20">
            <li className="flex items-start gap-2">
              <span className="text-[#F79B72]">▸</span> Read terms & agreement
              first
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F79B72]">▸</span> Look closely at rental
              property info
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F79B72]">▸</span> Ask about pricing and
              parking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F79B72]">▸</span> Do inspection before
              agreement
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      {/* Stats Section */}
      <div className="absolute left-1/2 md:bottom-[-5rem] transform -translate-x-1/2 w-[90%] max-w-6xl bg-[#00080c] shadow-2xl md:rounded-xl text-white z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center p-6">
          <div className="hover:bg-white transition duration-300 hover:text-[#F79B72] p-4 rounded-md cursor-pointer">
            <FaHome className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">614</p>
            <p className="text-sm">Listings</p>
          </div>
          <div className="hover:bg-white transition duration-300 hover:text-[#F79B72] p-4 rounded-md cursor-pointer">
            <FaUserFriends className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">16</p>
            <p className="text-sm">Tenants Matched</p>
          </div>
          <div className="hover:bg-white transition duration-300 hover:text-[#F79B72] p-4 rounded-md cursor-pointer">
            <FaWarehouse className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">Emergency Homes</p>
          </div>
          <div className="hover:bg-white transition duration-300 hover:text-[#F79B72] p-4 rounded-md cursor-pointer">
            <FaHandsHelping className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">914</p>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
