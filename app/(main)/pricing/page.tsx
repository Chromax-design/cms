import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import React from "react";
import { Lora } from "next/font/google";
import { Button } from "@/components/ui/button";
const LoraFont = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const PricingPage = () => {
  return (
    <section>
      <PageBanner title="pricing" />
      <div className="mx-auto max-w-6xl py-20 space-y-10 px-3">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 items-center">
          <div>
            <h2
              className={`${LoraFont.className} text-2xl md:text-3xl font-bold capitalize mb-5 mt-3`}
            >
              We offer flexible subscription rates on a per-term basis or annual
              rates to suit your budget.
            </h2>
            <p>
              Our pricing model is designed from our passion and commitment to
              impacting the educational sector in such a way that all schools
              irrespective of their size or location can have access to modern
              educational system.
            </p>
          </div>
          <Image
            src={"/assets/pricing-img.svg"}
            alt="pricing image"
            width={"100"}
            height={"100"}
            className="w-full h-auto max-w-md mx-auto md:mr-auto"
          />
        </div>
        <div className="bg-slate-900 rounded-md px-5 py-10 max-md:space-y-5 md:flex md:justify-between md:items-center gap-10">
          <h2 className="text-white text-2xl font-semibold">
            Still have questions? We are eager to hear from you!
          </h2>
          <Button
            className="text-sm tracking-wider uppercase"
            variant={"secondary"}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
