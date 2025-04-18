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
      <div className="container mx-auto px-4 md:px-10 py-16 text-white">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-10">
          {/* Left Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight py-6">
              Rules Before <br className="hidden lg:block" /> Taking House on
              Rent
            </h2>
            <button className="bg-[#0AA5CD] hover:bg-[#088aa9] px-6 py-3 rounded-xl font-semibold transition">
              Read More
            </button>
          </div>

          {/* Rules List */}
          <ul className="space-y-4 text-sm sm:text-base lg:pl-20">
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
      <div className="bg-[#0c1a2b] relative lg:absolute left-4 right-4 bottom-0 lg:bottom-[-80px] text-white py-8 px-4 sm:px-8 w-[95%] mx-auto rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
