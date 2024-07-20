"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/data/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lora } from "next/font/google";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoraFont = Lora({ subsets: ["latin"], weight: ["700"] });

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit=(formData: z.infer<typeof loginSchema>)=>{
    console.log(formData);
  }

  return (
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="w-full !h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    className="w-full !h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Link
              href={"/"}
              className="text-sm text-gray-500 capitalize hover:underline"
            >
              forgot password?
            </Link>
          </div>
          <Button type="submit" className={`${LoraFont.className} capitalize`}>
            sign in
          </Button>
        </form>
      </Form>
  );
};

export default LoginForm;
