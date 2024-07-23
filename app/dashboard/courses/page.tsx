import { auth } from "@/auth";
import BreadCrumb from "@/components/DashboardComponents/BreadCrumb";
import PageTitle from "@/components/DashboardComponents/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom | Courses",
  description: "Admin dashboard",
};

const CoursePage = async() => {
    const session = await auth();
    return (
      <section className="space-y-2">
        <BreadCrumb title="courses" />
        <PageTitle title="My Courses" />
    
      </section>
    );
}

export default CoursePage