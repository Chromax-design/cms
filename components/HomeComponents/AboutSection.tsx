import { Lora } from "next/font/google";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
const LoraFont = Lora({ subsets: ["latin"], weight: ["400", "700"] });

const aboutUsList: { id: number; title: string }[] = [
  { id: 1, title: "Easy sign up/Navigation" },
  { id: 2, title: "Unlimited product offering" },
  { id: 3, title: "Professional support team" },
  { id: 4, title: "Unique external features (e.g Learn Coding)" },
];

export const AboutSection = () => {
  return (
    <section className="py-5 max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
        <img
          src={"/assets/about-img.svg"}
          alt=""
          className=" w-full max-w-lg mx-auto md:ml-auto"
        />
        <div>
          <span className="text-sm tracking-wider font-medium">About CLASS</span>
          <h2
            className={`${LoraFont.className} text-3xl font-bold capitalize mb-5 mt-3`}
          >
            Enabling a flexible and functional education system
          </h2>
          <p>
            CLASS is a mobile/web software application designed to facilitate
            a seamless learning experience through the fusion of educational
            benefits and technology.
          </p>
          <div className="mt-5 list-style-img">
            <ol className="">
              {aboutUsList.map((item) => (
                <li className="flex gap-3 items-center" key={item.id}>
                  <FaCheck /> <span>{item.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
