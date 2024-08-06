import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getAssignmentDetails } from "@/server/AssignmentActions";
import { Metadata } from "next";
import { Lora } from "next/font/google";

const LoraFont = Lora({ subsets: ["latin"], weight: ["500"] });

interface paramsType {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Classroom | Assignment details",
  description: "Admin dashboard",
};

const AssignmentDetails = async ({ params }: paramsType) => {
  const { id } = params;
  const details = await getAssignmentDetails(id);
  
  return (
    <section className="space-y-3">
      <BreadCrumb title="assignment" id={details?.id.toString()} />
      <Card>
        <CardHeader className={`${LoraFont.className} text-2xl `}>
          {details?.title}
        </CardHeader>
        <CardContent>
          <CardDescription>{details?.description}</CardDescription>
        </CardContent>
        <CardFooter className="!text-xs">
         Deadline of submission: {details?.deadline.toLocaleString()}
        </CardFooter>
      </Card>
    </section>
  );
};

export default AssignmentDetails;
