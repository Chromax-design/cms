import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getSingleNotice } from "@/server/NoticeActions";
import { Metadata } from "next";
import { Lora } from "next/font/google";

const LoraFont = Lora({subsets: ['latin'], weight:['500']})

export const metadata: Metadata = {
  title: "Classroom | Notice",
  description: "Notices and announcements",
};

interface paramsType {
  params: {
    id: string;
  };
}

const NoticeDetails = async ({ params }: paramsType) => {
  const { id } = params;
  const data = await getSingleNotice(id);
  return (
    <section className="space-y-3">
      <BreadCrumb title="notices" id={data?.id.toString()}/>
      <Card>
        <CardHeader className={`${LoraFont.className} text-2xl `}>{data?.title}</CardHeader>
        <CardContent>
          <CardDescription>{data?.description}</CardDescription>
        </CardContent>
        <CardFooter className="!text-xs">
          {data?.date.toLocaleString()}
        </CardFooter>
      </Card>
    </section>
  );
};

export default NoticeDetails;
