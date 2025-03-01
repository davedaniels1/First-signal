"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navbarRef = useRef(null);
  const navItemsRef = useRef([]);
  const pathname = usePathname();

  const isActiveLink = (path) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(navbarRef.current, {
        right: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        navItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          delay: 0.2,
          ease: "power3.inOut",
        }
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const URLs = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products & Services" },
  ];

  return (
    <header className="bg-[#fdf0d5da] sticky top-0 shadow-sm z-50 backdrop-blur-md">
      <nav className="px-4 md:px-8 py-2 xl:px-0 w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/">
          <img
            src="/logo.webp"
            alt="First Signal Logo"
            className="w-14 md:w-24"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-16 text-base font-medium text-[#0A1540]">
            {URLs.map((url, index) => (
              <Link href={url.path} key={index}>
                <li className="group">
                  {url.label}
                  <div
                    className={`bg-[#0A1540] h-[2px] ${
                      isActiveLink(url.path)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    } transition-all duration-500`}
                  ></div>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden text-[#000000a4]"
        >
          <IoMenuSharp size={28} />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={navbarRef}
            className="flex flex-col items-center justify-center w-[80%] h-[100dvh] z-50 fixed top-0 right-[-100%] lg:hidden bg-[#FDF0D5] backdrop-filter bg-opacity-95 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-6">
              {URLs.map((url, index) => (
                <Link
                  href={url.path}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  key={index}
                >
                  <li className="group text-[#000000a4] text-md font-medium">
                    {url.label}
                    <div
                      className={`bg-[#000000a4] h-[2px] ${
                        isActiveLink(url.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      } transition-all duration-500`}
                    ></div>
                  </li>
                </Link>
              ))}
            </ul>
            <button
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="absolute top-4 right-4 text-[#000000a4]"
            >
              <IoCloseSharp size={28} />
            </button>
          </div>
        )}
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 lg:hidden h-screen w-full overflow-hidden"
          onClick={handleOverlayClick}
        ></div>
      )}
    </header>
  );
}
