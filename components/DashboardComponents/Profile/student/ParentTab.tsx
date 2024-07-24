import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ParentTab = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]" colSpan={2}>Parent/Guardian Information</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Parent/Guardian Name</TableCell>
            <TableCell>Osadolor Humphrey</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Relationship to student</TableCell>
            <TableCell>Father</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Parent/Guardian Contact Number
            </TableCell>
            <TableCell>+345 2345 6712</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Parent/Guardian Email Address</TableCell>
            <TableCell>osadolorJ@email.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Emergency Contact Name</TableCell>
            <TableCell>osadolor James</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Emergency Contact Relationship</TableCell>
            <TableCell>Father</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Emergency Contact Tel no.</TableCell>
            <TableCell>+345 2345 6712</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ParentTab;
