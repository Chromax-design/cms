import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";
import { getNotices } from "@/server/NoticeActions";
import ReusableTable from "@/components/DashboardComponents/Tables/Tables";
import { NoticeColumns } from "@/components/DashboardComponents/Tables/Columns";

export const metadata: Metadata = {
  title: "Classroom | Notices",
  description: "Notices and announcements",
};

const notice = async () => {
  const noticeData = await getNotices();

  return (
    <section className="space-y-3">
      <BreadCrumb title="Notices" />
      <PageTitle title="Notices" />
      <ReusableTable
        columns={NoticeColumns}
        data={noticeData}
        filterColumn="title"
        filterPlaceholder="Filter by title..."
      />
    </section>
  );
};

export default notice;
