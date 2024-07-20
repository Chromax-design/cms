import Sidebar from "@/components/DashboardComponents/Sidebar";
import TopBar from "@/components/DashboardComponents/TopBar";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-200 min-h-screen">
      <TopBar />
      <Sidebar />
      <div className="xl:ml-[14rem] py-[6rem] p-4 lg:px-[2rem] h-full">{children}</div>
    </main>
  );
};

export default dashboardLayout;
