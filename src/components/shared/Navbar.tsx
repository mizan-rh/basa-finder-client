"use client";
import React, { useEffect, useState } from "react";
import brand from "@/assets/images/brand/basaFinder-md.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to apply shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // add menu list
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About-Us", href: "/about" },
    { name: "All-Rentals", href: "/listings" },
    // add more menu if work onther routes

    // ...(user ? [{ name: "Dashboard", href: `/${user.role}s/dashboard` }] : []),
  ];

  return (
    <div>
      {/* navbar content */}
      <header
        className={
          scrolled
            ? " bg-white fixed top-0 left-0 w-full"
            : `${
                pathname === "/"
                  ? "bg-transparent fixed top-0 left-0 w-full"
                  : " bg-white text-black"
              }`
        }
      >
        <div className="p-4 flex justify-between items-center">
          {/* brand - website log*/}
          <div className="">
            <Image className="w-56" src={brand} alt="BasaFinder Logo" />
          </div>
          {/* menu */}
          <div className="">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm lg:text-base text-black hover:text-blue-600 transition ${
                    pathname === link.href ? "font-medium text-blue-600" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/*  */}
            <div className=""></div>
          </div>

          {/* user */}
          <div className="">
            {/* Cart with responsive spacing */}
            <div className=""></div>

            {/* User Authentication - Desktop dynamic is user exit user*/}
            <Link href="/login">
              <button className="rounded border-[#0AA5CD] border-1 text-[#0AA5CD] px-4">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
