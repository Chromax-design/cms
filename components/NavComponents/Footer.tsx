import { navLinks, socials } from "@/data";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <section className=" px-3 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-12 items-start py-20 gap-10 lg:gap-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 text-slate-600">
          <Link
            href={"/"}
            className=" border-2 border-black px-3 py-2 uppercase tracking-wider"
          >
            Class
          </Link>
          <p className="mt-7">
            We are passionate education dedicated to providing high-quality
            resources learners all backgrounds.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={
                    "p-3 bg-slate-200 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all"
                  }
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => {
              return (
                <Link
                  href={item.href}
                  className="capitalize font-medium text-slate-600 hover:text-slate-950"
                  key={item.id}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2">
          <div className="flex flex-col gap-5 text-slate-600">
            <Link href={""} className="capitalize font-medium hover:text-slate-950">
              faq
            </Link>
            <Link href={""} className="capitalize font-medium hover:text-slate-950">
              support
            </Link>
            <Link href={""} className="capitalize font-medium hover:text-slate-950">
              terms
            </Link>
            <Link href={""} className="capitalize font-medium hover:text-slate-950">
              privacy policy
            </Link>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <h3 className="text-lg font-bold capitalize text-slate-600">
            newsletter
          </h3>
          <p className="mt-5 text-slate-600">
            Subscribe Our newsletter get update our new course
          </p>
          <form action="" className="mt-5">
            <div className="flex border rounded-sm p-2 gap-2 border-slate-600">
              <input
                type="text"
                className=" outline-none w-full placeholder:text-sm bg-transparent"
                placeholder="Enter Your Email"
              />
              <Button
                variant={"outline"}
                className="capitalize bg-slate-800 text-white hover:bg-slate-700 hover:text-white"
              >
                subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t py-5 text-center text-sm capitalize text-slate-600">
        copyright &copy; {new Date().getFullYear()} all righte reserved by CLASS
      </div>
    </section>
  );
};

export default Footer;
