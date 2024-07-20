import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import AvatarComponent from "./Avatar";
import Link from "next/link";
import NotificationsBar from "./NotificationsBar";
import { Lora } from "next/font/google";
import MobileMenu from "./MobileMenu";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

const TopBar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full py-3 shadow-sm px-5 z-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link
            href={"/dashboard"}
            className={`${LoraFont.className} uppercase tracking-widest p-2 text-slate-700 rounded-sm`}
          >
            Logo
          </Link>
          <MobileMenu />
        </div>
        <div className="flex gap-4 items-center">
          <NotificationsBar />
          <Link href={""}>
            <FaVolumeUp className="text-lg text-slate-500 hover:text-gray-600" />
          </Link>
          <AvatarComponent />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
