"use client";
import logo from "@/assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { LayoutDashboardIcon, LogOut, Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setIsLoading } = useUser();

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logout
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    if (pathname.startsWith("/dashboard")) {
      router.push("/");
    }
  };

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About-Us", href: "/about" },
    { name: "All-Rentals", href: "/listings" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    ...(user ? [{ name: "Dashboard", href: `/${user.role}s/dashboard` }] : []),
  ];

  return (
    <header
      className={`fixed top-0 px-10 left-0 w-full z-50 b transition-all duration-300 font-bold ${
        scrolled
          ? "bg-white text-black dark:bg-[#0f172a] dark:text-white"
          : pathname === "/"
          ? "bg-transparent text-white"
          : "bg-white text-black dark:bg-[#0f172a] dark:text-white"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="BasaFinder Logo" className="w-10 h-10" />
          <span className="text-lg sm:text-xl  md:text-2xl dark:text-white font-bold">
            BasaFinder
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm lg:text-base ${
                pathname === link.href
                  ? "text-[#F79B72]"
                  : "hover:text-[#F79B72]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: User + Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* User Auth */}
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
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:bg-[#F79B72] hover:text-white"
                  asChild
                >
                  <Link href="/profile" className="flex w-full items-center">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-[#F79B72] hover:text-white"
                  asChild
                >
                  <Link
                    href={`/${user.role}s/dashboard`}
                    className="flex w-full items-center"
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
              <button className="text-[#F79B72] cursor-pointer">
                <FaRegCircleUser className="text-2xl" />
              </button>
            </Link>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[300px]">
                <div className="flex items-center space-x-2 mb-6 pt-2">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={logo}
                        alt="BasaFinder Logo"
                        className="w-10 h-10"
                      />
                      <span className="text-lg font-bold">BasaFinder</span>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm lg:text-base ${
                        pathname === link.href ? "text-[#F79B72]" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
