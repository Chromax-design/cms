import { socials } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const TopSocials = () => {
  const first = socials[0];
  return (
    <div className="border-b-[2px]">
      <div className="flex justify-between items-center gap-3 p-3 max-w-6xl mx-auto">
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <a href="" className="p-3 bg-slate-200 rounded-full">
              <FaPhoneAlt />
            </a>
            <span className="text-sm tracking-wider font-semibold">09045678934</span>
          </div>
          <div className="flex gap-2 items-center">
            <a href="" className="p-3 bg-slate-200 rounded-full">
              <FaMessage />
            </a>
            <span className="text-sm tracking-wider font-semibold">mail@visualdev.com</span>
          </div>
        </div>
        <div className="flex gap-3">
          {socials.map((item) => {
            const isFirst = item === first;
            return (
              <Link
                href={item.href}
                key={item.id}
                className={cn(
                  "p-3 bg-slate-200 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all",
                  {
                    "bg-gray-800 text-white": isFirst,
                  }
                )}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopSocials;
