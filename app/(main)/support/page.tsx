import { Lora } from "next/font/google";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { supportPage } from "@/data";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const LoraFont = Lora({subsets: ['latin'], weight: ['700']})

export const metadata: Metadata = {
  title: "Class room | Support",
  description: "Support page",
};

const SupportPage = () => {
  return (
    <section>
      <PageBanner title="Support" />
      <div className="max-w-6xl mx-auto py-20 px-3">
        <h2 className={`capitalize ${LoraFont.className} text-3xl mb-5`}>
          support
        </h2>
        <p className="max-w-3xl">
          Welcome to our School CMS Support page. Here you will find information
          on how to get help and support for using our platform effectively.
        </p>
        <div className="mt-5">
          {supportPage.map((item, i) => {
            const isEven = i % 2 == 0;
            return (
              <div
                className="grid md:grid-cols-2 gap-5 items-center"
                key={item.id}
              >
                <Image
                  src={`/assets/support/${item.img}`}
                  alt="about image"
                  width={"100"}
                  height={"100"}
                  className={cn(
                    "w-full max-w-md mx-auto md:ml-auto h-auto order-1",
                    { "md:order-2": isEven }
                  )}
                />
                <div className={cn("order-2", { "md:order-1": isEven })}>
                  <h2
                    className={`${LoraFont.className} text-3xl font-bold capitalize mb-5 mt-3`}
                  >
                    {item.title}
                  </h2>
                  <p>{item.desc}</p>
                  {item.isWhat === "contact" && (
                    <ul className="space-y-2 mt-3">
                      <li>
                        <b>Email:</b> mail@visualdev.com
                      </li>
                      <li>
                        <b>Telephone No:</b> 09023456789
                      </li>
                    </ul>
                  )}
                  {item.isWhat === "support" && (
                    <ul className="space-y-2 mt-3">
                      <li>
                        <b>Account Information:</b> Include your username or
                        email associated with your account.
                      </li>
                      <li>
                        <b>Issue Description:</b> Provide a detailed description
                        of the problem you are experiencing.
                      </li>
                    </ul>
                  )}
                  {item.isWhat === "feedback" && (
                    <Link href={"/contact"} className="inline-block mt-5">
                    <Button
                      className="text-sm tracking-wider uppercase"
                      variant={"secondary"}
                    >
                      send a feedback
                    </Button>
                  </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
