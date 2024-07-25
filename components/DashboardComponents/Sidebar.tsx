"use client";

import Link from "next/link";
import { Lora } from "next/font/google";
import { OtherLinks, StudentLinks } from "@/data/dashboard";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="hidden xl:block fixed top-0 left-0 h-screen overflow-y-scroll bg-background w-[14rem] shadow-sm z-20">
      <div className="h-screen p-5 space-y-4">
        <Link
          href={"/dashboard"}
          className={`${LoraFont.className} capitalize text-xl`}
        >
          Logo here
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
                  <Link
                    href={item.link}
                    key={item.id}
                    className={cn(
                      "capitalize p-2 flex gap-2 items-center hover:bg-muted rounded-md",
                      { "bg-muted": isActive }
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <span className="uppercase text-xs">others</span>
            <div className="flex flex-col gap-2 mt-3">
              {OtherLinks.map((item) => {
                const isActive =
                  item.link == pathname || pathname.startsWith(item.link);
                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    className={cn(
                      "capitalize p-2 flex gap-2 items-center hover:bg-muted rounded-md",
                      { "bg-muted": isActive }
                    )}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
