"use client";

import React, { useEffect, useState } from "react";
import TopSocials from "./TopSocials";
import Link from "next/link";
import { navLinks } from "@/data";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsScrolled(scrolled > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={cn("w-full z-20 shadow-lg pb-3 max-md:hidden", {
          "fixed top-0 left-0 bg-white z-30": isScrolled,
        })}
      >
        <div
          className={cn({
            "hidden delay-100 transition-all duration-500": isScrolled,
          })}
        >
          <TopSocials />
        </div>
        <div className="flex justify-between items-center mt-2 px-3 py-2 max-w-6xl mx-auto">
          <Link
            href={"/"}
            className=" border-2 border-black px-3 py-2 uppercase tracking-wider"
          >
            Class
          </Link>
          <div className="flex items-center gap-5">
            {navLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className="capitalize font-semibold p-2"
                >
                  {item.title}
                </Link>
              );
            })}
            <Link href={"/login"}>
              <Button
                size={"lg"}
                variant={"outline"}
                className="px-6 py-2 backdrop-blur-sm border text-white bg-gray-700 text-center mx-auto  rounded-lg relative"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className=" md:hidden flex justify-between p-3">
        <Link
          href={"/"}
          className=" border-2 border-black px-3 py-2 uppercase tracking-wider"
        >
          Class
        </Link>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Nav;
