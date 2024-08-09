import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import DocumentViewer from "@/components/DashboardComponents/DocumentViewer";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Exams and results",
  description: "Admin dashboard",
};

const ExamsPage = () => {
  return (
    <section className="space-y-2">
      <BreadCrumb title="exams" />
      <PageTitle title="My results" />
      <DocumentViewer src={"/demo.pdf"} title="demo pdf" />
    </section>
  );
};

export default ExamsPage;
