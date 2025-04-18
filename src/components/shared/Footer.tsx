"use client";

import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#0AA5CD] mb-4">
            BASA FINDER
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            A complete solution to help you manage your rental properties
            efficiently and effectively.
          </p>
          <button className="bg-[#0AA5CD] text-white px-4 py-2 rounded-md hover:bg-[#089ec0] transition">
            Get Started
          </button>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>123 Rent Street, Apartment City</li>
            <li>info@entox.com</li>
            <li>+880 1234-567890</li>
            <li>+880 9876-543210</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to get the latest news and updates.
          </p>
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <button className="bg-[#0AA5CD] px-4 py-2 text-white font-semibold hover:bg-[#089ec0] transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons & Bottom Text */}
      <div className="mt-12 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <FaTwitter className="w-5 h-5 hover:text-[#0AA5CD] transition" />
          <FaGoogle className="w-5 h-5 hover:text-[#0AA5CD] transition" />
          <FaGithub className="w-5 h-5 hover:text-[#0AA5CD] transition" />
        </div>
        <p className="text-sm text-gray-400">
          © 2025 Entox. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
