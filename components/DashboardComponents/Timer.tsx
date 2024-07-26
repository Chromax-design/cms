"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Lora } from "next/font/google";
import { useState } from "react";
import Clock from "react-live-clock";
import { Button } from "../ui/button";

const LoraFont = Lora({ subsets: ["latin"], weight: ["400"] });

const timer = () => {
  const [isDay, setIsDay] = useState(true);

  const handleTimeChange = (time: Date) => {
    const hours = time.getHours();
    const isDay = hours >= 18 || hours < 6;
    setIsDay(!isDay);
  };

  return (
    <Button className="flex gap-3 items-center max-w-40">
      <Clock
        format={"h:mm:ssa"}
        ticking={true}
        onChange={() => handleTimeChange(new Date())}
        noSsr
        className={`${LoraFont.className} text-lg tracking-wider`}
      />
      {isDay ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default timer;
