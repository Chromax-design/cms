import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { FaBell } from "react-icons/fa";

const NotificationsBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="!outline-none !border-none !p-0 !bg-transparent">
          <FaBell className="text-lg text-slate-500 hover:text-slate-600 hover:cursor-pointer" />
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
