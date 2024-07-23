"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Lora } from "next/font/google";
import { OtherLinks, StudentLinks } from "@/data/dashboard";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });
const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="outline-none !px-3 !py-1">
          <img
            src="/assets/hamburger.png"
            className="w-6"
            alt="hamburger icon"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[16rem] !p-0">
        <div className="h-screen overflow-y-scroll w-full p-5">
          <Link
            href={"/"}
            className={` px-3 py-2 uppercase tracking-widest ${LoraFont.className}`}
          >
            Logo
          </Link>
          <div className="space-y-10 py-10">
            <div>
              <span className="text-xs uppercase">Application</span>
              <div className="flex flex-col gap-2 mt-3">
                {StudentLinks.map((item) => {
                  const isActive = item.link == pathname;
                  return (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.link}
                        className={cn(
                          "capitalize p-2 flex gap-2 items-center hover:bg-slate-100",
                          { "bg-slate-100": isActive }
                        )}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </div>

            <div>
              <span className="uppercase text-xs">others</span>
              <div className="flex flex-col gap-2 mt-3 pb-5">
                {OtherLinks.map((item) => {
                  const isActive =
                    item.link == pathname || pathname.startsWith(item.link);
                  return (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.link}
                        className={cn(
                          "capitalize p-2 flex gap-2 items-center hover:bg-slate-100",
                          { "bg-slate-100": isActive }
                        )}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
