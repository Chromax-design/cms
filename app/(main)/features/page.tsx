import PageBanner from "@/components/PageBanner";
import { featuresPageContent } from "@/data";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { Lora } from "next/font/google";
const LoraFont = Lora({subsets: ['latin'], weight: ['700']})

export const metadata: Metadata = {
  title: "Class room | Features",
  description: "Features page",
};

const Featurespage = () => {
  return (
    <section>
      <PageBanner title="features" />
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-2">
        {featuresPageContent.map((item, i) => {
          const isEven = i % 2 == 0;
          return (
            <div className="grid md:grid-cols-2 gap-5 items-center" key={item.id}>
              <Image
                src={`/assets/features/${item.img}`}
                alt="about image"
                width={"100"}
                height={"100"}
                className={cn(
                  "w-full max-w-md mx-auto md:ml-auto h-auto order-1",
                  { "md:order-2": isEven }
                )}
              />
              <div className={cn("order-2", { "md:order-1": isEven })}>
                <h2
                  className={`${LoraFont.className} text-3xl font-bold capitalize mb-5 mt-3`}
                >
                  {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Featurespage;
