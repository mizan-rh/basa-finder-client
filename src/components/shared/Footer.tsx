"use client";

import Link from "next/link";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-500 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold capitalize text-[#F79B72] tracking-wide"
          >
            Basa Finder
          </Link>
          <p className="text-sm mt-4 mb-6">
            A complete solution to help you manage your rental properties
            efficiently and effectively.
          </p>
          <button className="bg-[#F79B72] text-white px-4 py-2 rounded-md hover:bg-[#f08f62] transition">
            Get Started
          </button>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/listings" className="hover:text-white">
                All Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>123 Rent Street, Apartment City</li>
            <li>basafinder25@gmail.com</li>
            <li>+880 1914-163150</li>
            <li>+880 1829-662328</li>
            <li>+880 1994-361085</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Newsletter</h3>
          <p className="text-sm mb-5">
            Subscribe to get the latest news and updates.
          </p>
          <div className="flex rounded-md overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 text-gray-800 outline-none"
            />
            <button className="bg-[#F79B72] text-white px-4 py-2 hover:bg-[#f08f62] transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons & Bottom Text */}
      <div className="border-t border-gray-800 text-center py-8">
        <div className="flex justify-center space-x-6 mb-4">
          <FaTwitter className="w-5 h-5 hover:text-[#F79B72] transition" />
          <FaGoogle className="w-5 h-5 hover:text-[#F79B72] transition" />
          <FaGithub className="w-5 h-5 hover:text-[#F79B72] transition" />
        </div>
        <p className="text-sm">&copy; 2025 Basa Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
