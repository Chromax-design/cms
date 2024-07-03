"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";
import { Lora } from "next/font/google";
const LoraFont = Lora({
  subsets: ["latin"],
  weight: [ "400",'500','600', "700",],
});

export const Hero = () => {
  const images = [
    "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?uid=R52252834&ga=GA1.1.2071857835.1708177765&semt=sph",
    "https://img.freepik.com/free-photo/study-group-african-people_23-2149156424.jpg?uid=R52252834&ga=GA1.1.2071857835.1708177765&semt=sph",
    "https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?uid=R52252834&ga=GA1.1.2071857835.1708177765&semt=sph",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.div
          className={` font-bold text-3xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4 max-w-2xl text-center p-3`}
        >
          <p className={LoraFont.className}>Revolutionize Your Education Experience</p>
          <p className="text-sm mt-3">
            A comprehensive solution for every student's needs. Transform how
            you learn with innovative features and support.
          </p>
        </motion.div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center mx-auto  rounded-full relative mt-4">
          <span>Get Started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};
