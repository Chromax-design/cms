import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Profile",
  description: "Profile page",
};

const ProfilePage = () => {
  return (
    <section className="space-y-3">
      <BreadCrumb title="Profile" />
      <PageTitle title="My Profile" />
    </section>
  );
};

export default ProfilePage;
