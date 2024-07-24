import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HealthTab = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]" colSpan={2}>
              Health Information
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Allergies</TableCell>
            <TableCell>None</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Medical Conditions</TableCell>
            <TableCell>None</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Disability</TableCell>
            <TableCell>None</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Physician Tel No.</TableCell>
            <TableCell>+345 2345 6712</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Blood Group</TableCell>
            <TableCell>O+</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HealthTab;
