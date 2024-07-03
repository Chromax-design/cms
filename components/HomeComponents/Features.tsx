"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { features } from "@/data";

export const Features=()=> {
  return (
    <section className=" rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-5">
      <InfiniteMovingCards
        items={features}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
