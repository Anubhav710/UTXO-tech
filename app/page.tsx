"use client";
import ContactUs from "@/components/sections/ContactUs";
import Footer from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import HowItWork from "@/components/sections/HowItWork";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Tagline from "@/components/sections/Tagline";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <div className="h-[120vh] xxs-xs:h-[220vh] w-full bg-transparent" />
      <Tagline />
      <Projects />

      <Services />
      <div className="  lg:h-[180vh] " />
      <HowItWork />
      <ContactUs />
      <Footer />
    </main>
  );
}
