"use client";

import PageBanner from "@/components/PageBanner";
import { contacts, socials } from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <section>
      <PageBanner title="Contact" />
      <div className="py-10 max-w-6xl mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((item, i) => {
            const isMiddle = i === 1;
            return (
              <div
                className={cn(
                  "p-10 shadow-lg rounded-lg flex gap-3 items-start",
                  { "border border-slate-600": isMiddle }
                )}
                key={item.id}
              >
                <span className="p-4 bg-gray-100 rounded-full text-lg">
                  {item.icon}
                </span>
                <div>
                  {item.title && (
                    <a
                      href={item.link}
                      className="capitalize font-semibold text-lg"
                    >
                      {item.title}
                    </a>
                  )}
                  <p className="font-thin tracking-wider">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-12 gap-5 py-10">
          <div className=" col-span-4">
            <span className="text-sm capitalize tracking-wide">
              send a message
            </span>
            <h2 className="capitalize font-bold text-5xl my-3">
              We Love to Hear From You
            </h2>
            <p className="text-sm">
              Whether you are curious about our features, a free trial or simply
              want to see a DEMO we are ready to answer all your questions
            </p>
            <div className="flex gap-3 mt-4 ">
              {socials.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="p-3 bg-slate-200 rounded-full text-gray-600 hover:bg-gray-800 hover:text-white transition-all"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-span-8">
            <Form {...form}>
              <form className="w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
