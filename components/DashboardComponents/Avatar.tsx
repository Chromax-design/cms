import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const AvatarComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="!outline-none !border-none">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5 !min-w-[14rem]">
        <div>
          <DropdownMenuItem className="!text-xs flex gap-2">
            Signed in as{" "}
            <span className="p-1 bg-primary/50 backdrop-blur-sm shadow-sm">
              {" "}
              Student
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="!text-xs !py-3">
            student@mail.com
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </div>
        <div className="p-3">
          <DropdownMenuItem className="!text-xs hover:cursor-pointer">
            <Link href={"/dashboard/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="!text-xs hover:cursor-pointer">
            <Link href={""}>Logout</Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarComponent;
