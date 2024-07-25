import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { TeacherColumns } from "@/components/DashboardComponents/Teacher/TeacherColumns";
import TeacherTables from "@/components/DashboardComponents/Teacher/TeacherTables";
import { TeacherDemo } from "@/data/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Teachers",
  description: "Teachers page",
};

const TeachersPage = () => {
  return (
    <section className="space-y-3">
      <BreadCrumb title="Teachers" />
      <PageTitle title="Teachers" />
      <TeacherTables columns={TeacherColumns} data={TeacherDemo} />
    </section>
  );
};

export default TeachersPage;
