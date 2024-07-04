import { AboutSection } from "@/components/HomeComponents/AboutSection";
import DemoSection from "@/components/HomeComponents/DemoSection";
import { Features } from "@/components/HomeComponents/Features";
import { Hero } from "@/components/HomeComponents/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
      <DemoSection />
    </main>
  );
}
