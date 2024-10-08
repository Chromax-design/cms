"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Lora } from "next/font/google";
import { OtherLinks, StudentLinks } from "@/data/dashboard";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });
const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="outline-none" size={"icon"}>
          <MenuIcon className="w-[1.2rem] h-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[16rem] !p-0">
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
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
                  const isActive =
                    item.link == pathname ||
                    (pathname.startsWith(item.link) &&
                      item.link !== "/dashboard");
                  return (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.link}
                        className={cn(
                          "capitalize p-2 flex gap-2 items-center hover:bg-muted rounded-md",
                          { "bg-muted": isActive }
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
                          "capitalize p-2 flex gap-2 items-center hover:bg-muted rounded-md",
                          { "bg-muted": isActive }
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
