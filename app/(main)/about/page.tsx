import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Button } from "@/components/ui/button";
import { aboutPageText } from "@/data";
import { cn } from "@/lib/utils";
const LoraFont = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage = () => {
  return (
    <section>
      <PageBanner title="about" />
      <div className="max-w-6xl mx-auto py-20 px-4 space-y-2">
        {aboutPageText.map((item, i) => {
          const isEven = i % 2 == 0;
          return (
            <div className="grid md:grid-cols-2 gap-5 items-center" key={item.id}>
              <Image
                src={`/assets/${item.img}`}
                alt="about image"
                width={"100"}
                height={"100"}
                className={cn(
                  "w-full max-w-md mx-auto md:ml-auto h-auto order-1",
                  { "md:order-2": isEven }
                )}
              />
              <div className={cn("order-2", { "md:order-1": isEven })}>
                {item.subtitle && (
                  <span className="text-sm tracking-wider font-medium">
                    {item.subtitle}
                  </span>
                )}
                <h2
                  className={`${LoraFont.className} text-3xl font-bold capitalize mb-5 mt-3`}
                >
                  {item.title}
                </h2>
                <p>{item.desc}</p>
                {item.showButton && (
                  <Button
                    className="capitalize px-6 py-2 backdrop-blur-sm border text-white bg-gray-700 text-center mx-auto  rounded-lg relative mt-5"
                    variant={"outline"}
                  >
                    request a demo
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutPage;
