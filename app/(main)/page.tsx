import { AboutSection } from "@/components/HomeComponents/AboutSection";
import { Features } from "@/components/HomeComponents/Features";
import { Hero } from "@/components/HomeComponents/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <AboutSection />
    </main>
  );
}
