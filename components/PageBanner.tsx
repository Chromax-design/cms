import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PageBanner = ({ title }: { title: string }) => {
  return (
    <div className="h-[50vh] w-full bg-[url('/assets/banner.jpg')] text-white bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
      <div className="max-w-6xl mx-auto flex justify-start items-center px-3 relative z-10 h-full">
        <div>
          <h1 className="text-4xl font-bold capitalize">{title}</h1>
          <Breadcrumb className="mt-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-50 hover:text-gray-300 tracking-wide">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-50 capitalize tracking-wide">{title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
