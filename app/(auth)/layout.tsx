import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gray-50 min-h-screen flex justify-center items-center p-5">
      <section className="w-full max-w-6xl mx-auto p-5 bg-white shadow-md rounded-md">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <Image
            src={"/assets/loginImg.svg"}
            alt="Login image"
            width={100}
            height={100}
            className="w-full max-w-lg max-md:hidden"
            priority
          />
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
