import { LoraFont } from "@/app/layout";
import PageBanner from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class room | Faqs",
  description: "Frequently asked questions",
};

const FaqPage = () => {
  return (
    <section>
      <PageBanner title="Faqs" />
      <div className="max-w-4xl mx-auto py-20 px-3">
        <h2
          className={`capitalize text-3xl mb-5 font-bold ${LoraFont.className}`}
        >
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((item) => {
            return (
              <Accordion type="single" collapsible key={item.id}>
                <AccordionItem value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
