import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";

const StudentProfileCard = () => {
  return (
    <Card className="col-span-12 lg:col-span-5 p-3">
      <div className="flex justify-center items-center flex-col gap-2">
        <Avatar className="w-[10rem] h-[10rem]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-3xl">CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="capitalize text-2xl font-medium">sean connery</h3>
          <p className="text-sm text-center capitalize tracking-widest">
            student
          </p>
        </div>
      </div>
      <div className="mt-5 border p-4 rounded-md">
        <p className="text-sm tracking-wider py-2">
          <span className="capitalize font-medium">Email: </span>
          mail@student.com
        </p>
        <hr />
        <p className="text-sm tracking-wider py-2">
          <span className="capitalize font-medium">phone Number: </span>+234 906
          745 3542
        </p>
        <hr />
        <p className="text-sm tracking-wider py-2">
          <span className="capitalize font-medium">grade: </span> JSS 1
        </p>
        <hr />
        <p className="text-sm tracking-wider py-2">
          <span className="capitalize font-medium">student ID: </span> UBE-112345
        </p>
      </div>
    </Card>
  );
};

export default StudentProfileCard