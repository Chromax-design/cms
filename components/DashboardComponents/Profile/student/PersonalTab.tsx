import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PersonalTab = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]" colSpan={2}>Personal Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">First Name</TableCell>
            <TableCell>Sean</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Last Name</TableCell>
            <TableCell>Connery</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Middle Name</TableCell>
            <TableCell>Esquire</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Religion</TableCell>
            <TableCell>Christianity</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gender</TableCell>
            <TableCell>Male</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Nationality</TableCell>
            <TableCell>Nigeria</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default PersonalTab;
