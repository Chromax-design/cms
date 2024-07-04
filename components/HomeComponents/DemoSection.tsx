import React from "react";
import { Lora } from "next/font/google";
import { Button } from "../ui/button";
import Image from "next/image";

const LoraFont = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const DemoSection = () => {
  return (
    <section className="py-3 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
        <div>
          <h2
            className={`${LoraFont.className} text-3xl font-bold capitalize mb-5 mt-3`}
          >
            School Websites Made Easy
          </h2>
          <p>
            Get a school website that is designed to boost enrollment, easy to
            manage, and backed by professional support.
          </p>
          <Button
            className="capitalize px-6 py-2 backdrop-blur-sm border text-white bg-gray-700 text-center mx-auto  rounded-lg relative mt-3"
            variant={"outline"}
          >
            request a demo
          </Button>
        </div>
        <Image
          src={"/assets/demo.svg"}
          alt="demo image"
          width={"100"}
          height={"100"}
          className="w-full max-w-lg mx-auto md:ml-auto"
        />
      </div>
    </section>
  );
};

export default DemoSection;
