import React from "react";

const Footer = () => {
  return (
    <div className="capitalize text-xs xl:fixed xl:ml-[14rem] xl:bottom-0 w-full p-3 bg-background">
      Copyright &copy; School CMS {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
