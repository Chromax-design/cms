import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";
import StudentProfile from "@/components/DashboardComponents/Profile/student";

export const metadata: Metadata = {
  title: "Classroom | Profile",
  description: "Profile page",
};

const ProfilePage = () => {
  return (
    <section className="space-y-4">
      <BreadCrumb title="Profile" />
      <PageTitle title="My Profile" />
      <StudentProfile />
    </section>
  );
};

export default ProfilePage;
