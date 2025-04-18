"use client";

import bedroom from "@/assets/images/image/bedroom-9.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="container mx-auto px-6 lg:px-10 z-20  bg-gray-50 py-20 min-h-screen ">
      <div className=" grid  md:grid-cols-2 mt-10 items-center gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className=" w-full  rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={bedroom}
              alt="Rental House"
              width={700}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            <span className="text-[#0AA5CD]">Find</span> Your Perfect Rental
            Home Today!
          </h1>
          <p className="text-lg mb-8 ">
            BasaFinder connects tenants with the perfect homes and helps
            landlords reach the perfect homes and helps landlords reach the
            right people — securely, smartly, and easily.
          </p>
          <div className="flex flex-wrap gap-4 pt-16">
            <Link href="/dashboard/landlord">
              <button className="bg-[#0AA5CD] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#088aa9] transition duration-300">
                Post a Rental
              </button>
            </Link>
            <Link href="/all-rentals">
              <button className="px-6 py-3 rounded-lg border-2 border-[#0AA5CD] text-[#0AA5CD] font-semibold hover:bg-[#0AA5CD] hover:text-white transition duration-300">
                Browse Listings
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
