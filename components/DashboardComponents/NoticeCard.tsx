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
import { FaEye } from "react-icons/fa";
import Link from "next/link";

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
          {NoticeDemo.slice(0, 4).map((item, i) => {
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
                  <Link href={`/dashboard/notice/${item.id}`}>
                    <FaEye className="text-xl text-slate-700"/>
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
