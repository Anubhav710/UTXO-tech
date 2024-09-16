"use client";
import { ServiceContainer } from "@/constants";
import { myFont } from "@/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const Service2 = () => {
  useGSAP(() => {
    const serviceCnt2 = gsap.timeline();
    serviceCnt2.fromTo(
      "#service-cnt2",
      {
        translateX: "-50%",
        translateY: "-50%",
        left: "50%",
        top: "50%",
      },
      {
        translateX: "0%",
        left: "0%",
        duration: 0.5,
      }
    );

    serviceCnt2.to("#service-cnt2", {
      yPercent: 300,
      duration: 0.5,
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: "#service-cnt2",
      start: "center center",

      animation: serviceCnt2,
      toggleActions: "play none none reverse",
    });
  }, []);
  return (
    <div id="services" className="h-screen w-full hidden md:block ">
      <div className=" h-full   max-w-screen-xl px-4 relative mx-auto ">
        <div
          id="service-cnt2"
          className={` ser-text-clamp ${myFont.className} w-auto h-auto absolute `}
        >
          <h1> Design</h1>
          <h1> Tech</h1>
          <h1> Marketing</h1>
        </div>
      </div>
    </div>
  );
};

export default Service2;
