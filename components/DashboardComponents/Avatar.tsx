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
          <div className="bg-slate-100 px-3">
            <DropdownMenuItem className="!text-xs flex gap-2 text-gray-700">
              Signed in as{" "}
              <span className="bg-blue-100 p-2 text-blue-600"> Student</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="!text-xs text-gray-700">
              student@mail.com
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </div>
          <div className="p-3">
            <DropdownMenuItem className="!text-xs text-gray-700 hover:cursor-pointer">
              <Link href={""}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="!text-xs text-gray-700 hover:cursor-pointer">
              <Link href={""}>Logout</Link>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AvatarComponent;
