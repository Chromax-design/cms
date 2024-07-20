import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";
import { Lora } from "next/font/google";
import Link from "next/link";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

export const metadata:Metadata ={
  title: 'Classroom | Login',
  description: 'Login page'
}

const LoginPage = () => {
  return (
    <section className="p-3">
      <h1
        className={`${LoraFont.className} text-2xl font-semibold mb-5 capitalize`}
      >
        Sign In
      </h1>
      <LoginForm />

        <p className="text-sm text-gray-500 mt-5">
          Back to{" "}
          <Link href={"/"} className="capitalize font-semibold underline">
            home page
          </Link>
        </p>
    </section>
  );
};

export default LoginPage;
