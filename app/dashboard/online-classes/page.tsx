import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import ReusableTable from "@/components/DashboardComponents/Tables/Tables";
import { VirtualColumns } from "@/components/DashboardComponents/Tables/Columns";
import { getVirtualClasses } from "@/server/VirtualClassActions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Assignment",
  description: "Admin dashboard",
};

const AssignmentPage = async () => {
  const virtualClasses = await getVirtualClasses();

  return (
    <section className="space-y-2">
      <BreadCrumb title="Online classes" />
      <PageTitle title="My Online classes" />
      <ReusableTable
        columns={VirtualColumns}
        data={virtualClasses}
        filterColumn="title"
        filterPlaceholder="filter by title..."
      />
    </section>
  );
};

export default AssignmentPage;
