import {
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Button } from "../ui/button";
import Link from "next/link";

const LoraFont = Lora({subsets: ['latin'], weight: ['700']})

const Greeting = ({userName}:{userName: string}) => {
  return (
    <Card className="p-4 h-full">
      <div className="flex max-sm:flex-col items-center justify-between gap-5">
        <div className="max-w-lg max-sm:order-2">
          <h1 className={`${LoraFont.className} text-2xl capitalize`}>welcome back {userName}</h1>
          <p className="text-sm mt-3 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint reiciendis ducimus ex amet praesentium, rerum harum libero doloribus totam ad!
          </p>
        </div>
        <Image
          src={"/assets/dashboard/welcome.svg"}
          width={100}
          height={100}
          alt="welcome image"
          className="w-full max-w-[270px] max-sm:order-1 shadow-sm"
          priority={true}
        />
      </div>
      <Link href={'/dashboard/courses'}>
      <Button variant={'secondary'} className="capitalize text-sm mt-3">my courses</Button></Link>
    </Card>
  );
};

export default Greeting;
