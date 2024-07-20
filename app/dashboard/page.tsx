import { auth } from "@/auth";
import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import Greeting from "@/components/DashboardComponents/Greeting";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";
import Infocard from "@/components/DashboardComponents/Infocard";
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";
import ProfileInfoCard from "@/components/DashboardComponents/ProfileInfoCard";
import NoticeCard from "@/components/DashboardComponents/NoticeCard";

export const metadata: Metadata = {
  title: "Classroom | Dashboard",
  description: "Admin dashboard",
};

const DashboardPage = async () => {
  const session = await auth();
  return (
    <section className="space-y-3">
      <BreadCrumb title="Home" />
      <PageTitle title="Dashboard" />
      <div className="grid grid-cols-12 gap-3 items-center">
        <div className="lg:col-span-8 col-span-12">
          <Greeting userName="Kunle" />
        </div>
        <div className="col-span-12 lg:col-span-4 gap-3 flex flex-col sm:flex-row lg:flex-col">
          <Infocard
            title="courses"
            count={7}
            icon={<AiOutlineRead className="text-3xl" />}
          />
          <Infocard
            title="teachers"
            count={7}
            icon={<FaChalkboardTeacher className="text-3xl" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-5">
          <ProfileInfoCard />
        </div>
        <div className="col-span-12 sm:col-span-7">
          <NoticeCard />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
