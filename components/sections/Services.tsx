"use client";
import { ServiceContainer } from "@/constants";
import { myFont } from "@/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Design from "@/public/images/design.json";
import Tech from "@/public/images/tech.json";
import Marketing from "@/public/images/markating.json";
import Lottie from "lottie-react";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 319px) and (max-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: "#mobile-ul-1",
        start: "top center",

        animation: gsap.from(".mli-1", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#design-cnt-img",
        start: "top 60%",

        animation: gsap.from("#design-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#mobile-ul-2",
        start: "top center",

        animation: gsap.from(".mli-2", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#tech-cnt-img",
        start: "top 60%",

        animation: gsap.from("#tech-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#mobile-ul-3",
        start: "top center",

        animation: gsap.from(".mli-3", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
      ScrollTrigger.create({
        trigger: "#marketing-cnt-img",
        start: "top 60%",

        animation: gsap.from("#marketing-cnt-img", {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        }),
        toggleActions: "play none none reverse",
      });
    });

    mm.add("(min-width: 768px)", () => {
      // Timelines for each section (Design, Tech, Marketing)
      const designTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#design-container",
          start: "center center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
      const techTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#tech-container",
          start: "center center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
      const marketingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#marketing-container",
          start: "center center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Design animation
      designTimeline
        .to("#main-cnt-ul", { height: "60vh" })
        .from(".li-1", { xPercent: -100, stagger: 0.05, opacity: 0 }, 0)
        .fromTo(
          ".image-1",
          { visibility: "hidden", autoAlpha: 0 },
          { visibility: "visible", autoAlpha: 1 },
          0
        );

      // Tech animation
      techTimeline
        .from(".li-2", { xPercent: -100, stagger: 0.05, opacity: 0 }, 0)
        .fromTo(
          ".image-2",
          { visibility: "hidden", autoAlpha: 0 },
          { visibility: "visible", autoAlpha: 1 },
          0
        )
        .to(".image-1", { visibility: "hidden", autoAlpha: 0 }, 0);

      // Marketing animation
      marketingTimeline
        .from(".li-3", { xPercent: -100, stagger: 0.05, opacity: 0 }, 0)
        .fromTo(
          ".image-3",
          { visibility: "hidden", autoAlpha: 0 },
          { visibility: "visible", autoAlpha: 1 },
          0
        )
        .to(".image-2", { visibility: "hidden", autoAlpha: 0 }, 0);

      ScrollTrigger.create({
        trigger: "#main-cnt",
        start: "top top",
        end: "bottom 80%",
        pin: "#right-cnt",

        toggleActions: "play none none reverse",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="service-cnt-2" className="w-full md:pt-8">
      <div id="main-cnt" className="max-w-screen-xl px-4 flex mx-auto">
        {/* Left Container */}
        <div id="left-cnt" className="w-1/2 hidden md:block">
          <div
            id="left-design-container"
            className="h-screen flex flex-col overflow-hidden"
          >
            <div id="design-container">
              <h1
                className={`ser-text-clamp-s text-[3rem] font-bold ${myFont.className}`}
              >
                Design
              </h1>
              <ul
                id="main-cnt-ul"
                className="h-0 pt-5 pl-3 text-xl overflow-hidden space-y-3 text-left"
              >
                {ServiceContainer.design.map((l1) => (
                  <li className="li-1 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="left-tech-container" className="h-screen flex items-center">
            <div id="tech-container">
              <h1
                className={`ser-text-clamp-s text-[3rem] font-bold ${myFont.className}`}
              >
                Tech
              </h1>
              <ul
                id="main-cnt-ul-2"
                className="pl-3 text-xl overflow-hidden space-y-3 pt-5"
              >
                {ServiceContainer.tech.map((l1) => (
                  <li className="li-2 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            id="left-marketing-container"
            className="h-screen flex items-center"
          >
            <div id="marketing-container">
              <h1
                className={`ser-text-clamp-s text-[3rem] font-bold ${myFont.className}`}
              >
                Marketing
              </h1>
              <ul
                id="main-cnt-ul-3"
                className="pl-3 text-xl overflow-hidden space-y-3 pt-5"
              >
                {ServiceContainer.marketing.map((l1) => (
                  <li className="li-3 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div
          id="right-cnt"
          className="md:w-1/2 w-full md:h-screen flex items-center"
        >
          {/* Desktop Start */}
          <div className="h-full w-full hidden md:block">
            <div className="h-full w-full relative flex justify-center">
              <div className="image-1 absolute">
                <Lottie
                  animationData={Design}
                  style={{ width: "620px", height: "620px", opacity: 1 }}
                />
              </div>
              <div className="image-2 absolute">
                <Lottie
                  animationData={Tech}
                  style={{ width: "620px", height: "620px" }}
                />
              </div>
              <div className="image-3 absolute">
                <Lottie
                  animationData={Marketing}
                  style={{ width: "620px", height: "620px" }}
                />
              </div>
            </div>
          </div>
          {/* Desktop End */}

          {/* Mobile Start */}
          <div className="flex flex-col  items-center w-full gap-10 md:hidden py-10 pl-2">
            {/* Design for mobile */}
            <div className="w-full">
              <h1
                className={`ser-text-clamp-s text-6xl font-bold ${myFont.className} text-center`}
              >
                Design
              </h1>
              <ul id="mobile-ul-1" className="space-y-3 pt-2 pl-4 text-left">
                {ServiceContainer.design.map((l1) => (
                  <li className="mli-1 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
              <div
                id="design-cnt-img"
                className="w-full h-56  flex justify-center items-center"
              >
                <Lottie
                  animationData={Design}
                  style={{ width: "80%", height: "100%", opacity: 1 }}
                />
              </div>
            </div>

            {/* Tech for mobile */}
            <div className="w-full">
              <h1
                className={`ser-text-clamp-s text-6xl font-bold ${myFont.className} text-center`}
              >
                Tech
              </h1>
              <ul id="mobile-ul-2" className="space-y-3 pt-2 pl-4 text-left">
                {ServiceContainer.tech.map((l1) => (
                  <li className="mli-2 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
              <div
                id="tech-cnt-img"
                className="w-full h-56  flex justify-center items-center"
              >
                <Lottie
                  animationData={Tech}
                  style={{ width: "80%", height: "100%" }}
                />
              </div>
            </div>

            {/* Marketing for mobile */}
            <div className="w-full">
              <h1
                className={`ser-text-clamp-s text-6xl font-bold ${myFont.className} text-center`}
              >
                Marketing
              </h1>
              <ul id="mobile-ul-3" className="space-y-3 pt-2 pl-4 text-left">
                {ServiceContainer.marketing.map((l1) => (
                  <li className="mli-3 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
              <div
                id="marketing-cnt-img"
                className="w-full h-56 flex justify-center items-center"
              >
                <Lottie
                  animationData={Marketing}
                  style={{ width: "80%", height: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Mobile End */}
        </div>
      </div>
    </section>
  );
};

export default Service;
