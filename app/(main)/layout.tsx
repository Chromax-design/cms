import Footer from "@/components/NavComponents/Footer";
import Nav from "@/components/NavComponents/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class room | Home",
  description: "Home page",
};

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mx-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Mainlayout;
