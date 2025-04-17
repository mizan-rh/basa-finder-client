"use client";
import React, { useEffect, useState } from "react";
import brand from "@/assets/images/brand/basaFinder-md.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { orderedProductsSelector } from "@/redux/features/cartSlice";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User, LayoutDashboardIcon, ShoppingCart } from "lucide-react";
import { logout } from "@/services/AuthService";
// import { DialogTitle } from "@radix-ui/react-dialog";
const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  //
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const products = useAppSelector(orderedProductsSelector);
  // const [isOpen, setIsOpen] = useState(false);

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

  //
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (pathname.startsWith("/dashboard")) {
      router.push("/");
    }
  };

  // add menu list
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About-Us", href: "/about" },
    { name: "All-Rentals", href: "/listings" },
    // add more menu if work onther routes

    ...(user ? [{ name: "Dashboard", href: `/${user.role}s/dashboard` }] : []),
  ];

  return (
    <div>
      {/* navbar content */}
      <header
        className={
          scrolled
            ? " bg-white fixed top-0 left-0 w-full shadow-2xs"
            : `${
                pathname === "/"
                  ? "bg-transparent fixed text-white font-bold top-0 left-0 w-full shadow-2xs"
                  : " bg-white text-black shadow-2xs font-bold"
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
                  className={`text-sm lg:text-base ${
                    pathname === link.href ? "text-[#0AA5CD]" : ""
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
            <div className="">
              <Link href="/cart" className="relative ml-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center h-9 w-9 p-0 justify-center"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {products?.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {products.length > 9 ? "9+" : products.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* User Authentication - Desktop dynamic is user exit user*/}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full p-0 h-9 w-9">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://i.postimg.cc/QC0n0Jw6/user.jpg" />
                      <AvatarFallback>
                        {user.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="/profile"
                      className="flex w-full cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/${user.role}s/dashboard`}
                      className="flex w-full cursor-pointer"
                    >
                      <LayoutDashboardIcon className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogOut}
                    className="text-red-600 cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm" className="rounded-full">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
