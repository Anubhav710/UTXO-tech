import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import HowItWork from "@/components/sections/HowItWork";
import Projects from "@/components/sections/Projects";
import Service2 from "@/components/sections/Service2";
import Services from "@/components/sections/Services";
import Tagline from "@/components/sections/Tagline";
import Cursor from "@/components/ui/Cursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <div className="h-[120vh] xxs-xs:h-[220vh] w-full bg-transparent" />
      <Tagline />
      <Projects />
      <Service2 />
      <Services />
      <HowItWork />
      <ContactUs />
      <Footer />
    </main>
  );
}
