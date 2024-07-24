import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OthersTab = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]" colSpan={2}>
              Other Information
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Hobby</TableCell>
            <TableCell>Reading</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Extra Curricular Activities</TableCell>
            <TableCell>Football</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Language Spoken</TableCell>
            <TableCell>English</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OthersTab;
