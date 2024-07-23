import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const NotificationsBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size={"icon"}
          className="!outline-none !border-none  rounded-full"
        >
          <BellIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="!text-sm">Notifications</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationsBar;
