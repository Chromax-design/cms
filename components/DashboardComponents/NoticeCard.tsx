import { NoticeDemo } from "@/data/dashboard";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

const NoticeCard = () => {
  return (
    <Card className="h-full">
      <Table className="overflow-x-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="" colSpan={4}>
              NOTICE
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {NoticeDemo.slice(0, 4).map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-xs w-5">
                  {item.id}
                </TableCell>
                <TableCell className="text-xs min-w-52">
                  {item.title.slice(0, 25)}...
                </TableCell>
                <TableCell className="text-xs min-w-60">
                  {item.description.slice(0, 30)}...
                </TableCell>
                <TableCell className="text-right text-xs">
                  <Link href={`/dashboard/notices/${item.id}`}>
                    <EyeIcon className="w-[1.2rem] h-[1.2rem]" />
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default NoticeCard;
