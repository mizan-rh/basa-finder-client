"use client";

import Link from "next/link";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:px-16">
        {/* Logo & Description */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold capitalize text-[#F79B72] mb-4"
          >
            basa finder
          </Link>
          <p className="text-sm  mb-4">
            A complete solution to help you manage your rental properties
            efficiently and effectively.
          </p>
          <button className="bg-[#F79B72] text-white px-4 py-2 rounded-md hover:bg-[#F79B72] transition">
            Get Started
          </button>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/listings" className="hover:underline">
                All Listing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:underline">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm ">
            <li>123 Rent Street, Apartment City</li>
            <li>basafinder25@gmail.com</li>

            <li>+880 1914-163150</li>
            <li>+880 1829-662328</li>
            <li>+880 1994-361085</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest news and updates.
          </p>
          <div className="flex items-center  rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <button className="bg-[#F79B72] px-4 py-2  font-semibold hover:bg-[#f5a889] transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons & Bottom Text */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <FaTwitter className="w-5 h-5 hover:text-[#F79B72] transition" />
          <FaGoogle className="w-5 h-5 hover:text-[#F79B72] transition" />
          <FaGithub className="w-5 h-5 hover:text-[#F79B72] transition" />
        </div>
        <p className="text-sm ">© 2025 Basa Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
