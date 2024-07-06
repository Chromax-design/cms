import Image from "next/image";
import { Lora } from "next/font/google";
const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

const loading = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center justify-center">
      <Image
        src={"/assets/loading.svg"}
        alt="loader image"
        className="w-full max-w-lg mx-auto md:ml-auto"
        width={"100"}
        height={"100"}
      />
      <div>
        <h2
          className={`${LoraFont.className} text-3xl md:text-4xl font-bold capitalize mb-5 mt-3`}
        >
          Loading...
        </h2>
        <p>This may take a little while, please hold on</p>
      </div>
    </div>
  );
};

export default loading;
