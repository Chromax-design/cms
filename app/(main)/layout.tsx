import Footer from "@/components/NavComponents/Footer";
import Nav from "@/components/NavComponents/Nav";
import React from "react";

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
