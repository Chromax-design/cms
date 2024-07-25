import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { getInitials } from "@/lib/utilities";
import { getSingleTeacher } from "@/server/TeacherActions";
import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Classroom | Teachers",
  description: "Teachers page",
};

interface TeacherParams {
  id: string;
}

const TeacherDetails = async ({ params }: { params: TeacherParams }) => {
  const { id } = params;
  const data = await getSingleTeacher(id);

  return (
    <section className="space-y-4">
      <BreadCrumb title="teachers" id={data?.id.toString()} />
      <PageTitle title="Teacher Details" />
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 lg:col-span-5 p-3">
          <div className="flex justify-center items-center flex-col gap-2">
            <Avatar className="w-[10rem] h-[10rem]">
              <AvatarImage src={data?.avatar} />
              <AvatarFallback className="text-3xl">
                {data ? getInitials(data?.name) : "NA"}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="capitalize text-2xl font-medium">{data?.name}</h3>
              <p className="text-sm text-center capitalize tracking-widest">
                Teacher
              </p>
            </div>
          </div>
          <div className="mt-5 border p-4 rounded-md">
            <p className="text-sm tracking-wider py-2">
              <span className="capitalize font-medium">Email: </span>
              {data?.email}
            </p>
            <hr />
            <p className="text-sm tracking-wider py-2">
              <span className="capitalize font-medium">phone Number: </span>
              {data?.phoneNumber}
            </p>
            <hr />
            <p className="text-sm tracking-wider py-2">
              <span className="capitalize font-medium">gender: </span> Female
            </p>
            <hr />
            <p className="text-sm tracking-wider py-2">
              <span className="capitalize font-medium">Teacher ID: </span>{" "}
              {data?.id}
            </p>
          </div>
        </Card>
        <Card className="col-span-12 lg:col-span-7 p-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]" colSpan={2}>
                  Profile Information
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell>{data?.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell>{data?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Religion</TableCell>
                <TableCell>{data?.religion}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Gender</TableCell>
                <TableCell>{data?.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tel No</TableCell>
                <TableCell>{data?.phoneNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Address</TableCell>
                <TableCell>{data?.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Subject</TableCell>
                <TableCell>{data?.subject}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default TeacherDetails;
