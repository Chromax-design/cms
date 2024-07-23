import Sidebar from "@/components/DashboardComponents/Sidebar";
import TopBar from "@/components/DashboardComponents/TopBar";
import { ThemeProvider } from "@/themeProvider";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" min-h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TopBar />
        <Sidebar />
        <div className="xl:ml-[14rem] py-[6rem] p-4 lg:px-[2rem] h-full">
          {children}
        </div>
      </ThemeProvider>
    </main>
  );
};

export default dashboardLayout;
