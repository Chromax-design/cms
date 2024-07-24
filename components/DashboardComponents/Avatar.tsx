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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="!outline-none !border-none">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <div className="">
            <DropdownMenuItem className="!text-xs flex gap-2">
              Signed in as{" "}
              <span className="p-1 bg-primary/50 backdrop-blur-sm shadow-sm"> Student</span>
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
    </div>
  );
};

export default AvatarComponent;
