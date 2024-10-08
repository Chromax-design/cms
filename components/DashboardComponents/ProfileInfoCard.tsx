import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const ProfileInfoCard = () => {
  return (
    <Card className="p-4">
      <div className="flex gap-5 items-center pb-4 flex-col md:flex-row">
        <Avatar className="w-[10rem] h-[10rem] md:w-14 md:h-14">
          <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h3 className="capitalize font-semibold text-sm">Kunle Ade</h3>
          <p className="text-xs">
            <span className="uppercase font-medium">student id: </span>
            BHS-123456hyb
          </p>
        </div>
      </div>
      <hr />
      <div className="pt-4">
        <p className="text-sm tracking-wider py-1">
          <span className="capitalize font-semibold">Email: </span>
          mail@student.com
        </p>
        <hr />
        <p className="text-sm tracking-wider py-1">
          <span className="capitalize font-semibold">phone Number: </span>+234
          906 745 3542
        </p>
        <hr />
        <p className="text-sm tracking-wider py-1">
          <span className="capitalize font-semibold">grade: </span> JSS 1
        </p>
      </div>
      <Link href={"/dashboard/profile"}>
        <Button
          variant={"secondary"}
          className="capitalize text-sm tracking-wider mt-4"
        >
          view profile
        </Button>
      </Link>
    </Card>
  );
};

export default ProfileInfoCard;
