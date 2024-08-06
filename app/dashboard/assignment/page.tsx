import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { AssignmentColumns } from "@/components/DashboardComponents/Tables/Columns";
import ReusableTable from "@/components/DashboardComponents/Tables/Tables";
import { getAllAssignments } from "@/server/AssignmentActions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Assignment",
  description: "Admin dashboard",
};

const AssignmentPage = async () => {
  const assignmentData = await getAllAssignments();

  return (
    <section className="space-y-2">
      <BreadCrumb title="assignment" />
      <PageTitle title="My Assignments" />
      <ReusableTable
        columns={AssignmentColumns}
        data={assignmentData}
        filterColumn="course"
        filterPlaceholder="Filter by courses..."
      />
    </section>
  );
};

export default AssignmentPage;
