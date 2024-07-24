import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const ContactTab = () => {
  return (
    <div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]" colSpan={2}>Contact Info</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Address</TableCell>
          <TableCell>No 2, Adesuwa Off Lagos street Benin city</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">City</TableCell>
          <TableCell>Benin City</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">State/Province</TableCell>
          <TableCell>Edo State</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Zip/Postal Code</TableCell>
          <TableCell>1002345</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Country</TableCell>
          <TableCell>USA</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Phone Number</TableCell>
          <TableCell>+44 456 7634</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Email Address</TableCell>
          <TableCell>sean@connery.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  )
}

export default ContactTab