import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import NoticeTables from "@/components/DashboardComponents/Notice/NoticeTables";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";
import { Columns } from "@/components/DashboardComponents/Notice/Columns";
import { getNotices } from "@/server/NoticeActions";

export const metadata: Metadata = {
  title: "Classroom | Notice",
  description: "Notices and announcements",
};

const notice = async() => {
  const noticeData = await getNotices();

  return (
    <section className="space-y-3">
      <BreadCrumb title="Notices" />
      <PageTitle title="Notices" />
      <NoticeTables columns={Columns} data={noticeData} />
    </section>
  );
};

export default notice;
