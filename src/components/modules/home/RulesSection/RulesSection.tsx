"use client";

import bgImage from "@/assets/images/image/banner-7.jpg"; // Your actual path
import Image from "next/image";
import {
  FaHandsHelping,
  FaHome,
  FaUserFriends,
  FaWarehouse,
} from "react-icons/fa";

const RulesSection = () => {
  return (
    <section className="relative w-full min-h-screen">
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
      <div className="container  mx-auto  px-10  py-20  text-white">
        <div className="flex gap-10 justfy-beetwen items-center w-full">
          {/* Left Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Rules Before <br /> Taking House on Rent
            </h2>
            <button className="bg-[#0AA5CD] hover:bg-[#088aa9] px-6 py-3 rounded-xl font-semibold transition">
              Read More
            </button>
          </div>

          {/* Rules List */}
          <ul className="space-y-3 mt-4 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#0AA5CD]">▸</span> Read terms & agreement
              first
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0AA5CD]">▸</span> Look closely at rental
              property info
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0AA5CD]">▸</span> Ask about pricing and
              parking
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0AA5CD]">▸</span> Do inspection before
              agreement
            </li>
          </ul>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0c1a2b] absolute left-16 -bottom-20 text-white py-10 px-6  w-11/12">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <FaHome className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">614</p>
            <p className="text-sm">Listings</p>
          </div>
          <div>
            <FaUserFriends className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">16</p>
            <p className="text-sm">Tenants Matched</p>
          </div>
          <div>
            <FaWarehouse className="text-3xl mx-auto mb-2" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">Emergency Homes</p>
          </div>
          <div>
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
