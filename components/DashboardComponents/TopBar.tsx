import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import AvatarComponent from "./Avatar";
import Link from "next/link";
import NotificationsBar from "./NotificationsBar";
import { Lora } from "next/font/google";
import MobileMenu from "./MobileMenu";
import { ModeToggler } from "./modeToggler";
import { Button } from "../ui/button";
import { Volume2Icon } from "lucide-react";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

const TopBar = () => {
  return (
    <nav className="bg-background/30 fixed top-0 left-0 w-full py-3 shadow-sm px-5 z-10 border-b backdrop-blur-sm">
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
        <div className="flex items-center">
          <ModeToggler />
          <NotificationsBar />
          <Link href={""}>
            <Button variant={"outline"} size={'icon'} className="outline-none border-none rounded-full">
              <Volume2Icon className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <AvatarComponent />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
