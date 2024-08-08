import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import DocumentViewer from "@/components/DashboardComponents/DocumentViewer";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Class schedule",
  description: "Admin dashboard",
};

const Schedulepage = () => {
  return (
    <section className="space-y-2">
      <BreadCrumb title="schedule" />
      <PageTitle title="My class schedules" />
      <div>
        <DocumentViewer />
      </div>
    </section>
  );
};

export default Schedulepage;
