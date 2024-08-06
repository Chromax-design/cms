import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { TeacherColumns } from "@/components/DashboardComponents/Tables/Columns";
import ReusableTable from "@/components/DashboardComponents/Tables/Tables";
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
      <ReusableTable
        columns={TeacherColumns}
        data={TeacherDemo}
        filterColumn="name"
        filterPlaceholder="Filter by name..."
      />
    </section>
  );
};

export default TeachersPage;
