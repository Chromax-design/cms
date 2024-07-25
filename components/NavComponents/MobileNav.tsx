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
import { navLinks } from "@/data";
import Link from "next/link";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <img
            src="/assets/hamburger.png"
            className="w-6"
            alt="hamburger icon"
          />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <div className="h-full">
          <Link
            href={"/"}
            className=" border-2 border-black px-3 py-2 uppercase tracking-wider"
          >
            Class
          </Link>
          <div className="flex flex-col gap-5 mt-12">
            {navLinks.map((item) => {
              return (
                <SheetClose asChild key={item.id}>
                  <Link
                    href={item.href}
                    className="capitalize font-semibold border-b py-2"
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
