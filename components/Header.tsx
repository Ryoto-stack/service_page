"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Top() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex sm:px-8 w-full h-20 justify-center tracking-wide z-50 flex-col sticky top-0 bg-opacity-100 bg-gray-700 shadow-md transition-transform duration-300 ${showNav ? "transform-none" : "transform -translate-y-full"
        }`}
    >
      <div className="relative flex justify-center gap-8">
        <div className="pr-2">
          <a>
            <Image
              src="/jhsereno-light.png"
              height={200}
              width={200}
              alt="logo"
            />
          </a>
        </div>

        <div className="hidden w-full md:flex">
          <ul className="flex gap-6 text-sm">
            <li className="font-bold text-white">
              <Link href="/">MEET THE TEAM</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">SEARCH FOR HOMES</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">OUR COMMUNITIES</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">HOME VALUATION</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">SERVICES</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">HOME ACROSS AMERICA</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">TESTIMONIALS</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
