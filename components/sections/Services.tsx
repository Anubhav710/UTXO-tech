"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { myFont } from "@/fonts";
import { ServiceContainer } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    let tl3 = gsap.timeline();
    // Laptop Medium Screen Start
    // mm.add("(min-width: 991px) and (max-width: 1023px)", () => {
    //   tl.to("#main-cnt", {
    //     xPercent: -92,
    //   });
    //   tl.to(
    //     "#main-cnt-ul",
    //     {
    //       height: "1400px",
    //       duration: 1,
    //       ease: "back.out",
    //     },
    //     0
    //   );

    //   tl.fromTo(
    //     ".hidd",
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,
    //     }
    //   );
    //   tl.to(
    //     ".image-1",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl.from(
    //     ".li-1",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0.1
    //   );
    //   tl2.to(
    //     ".image-2",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl2.from(
    //     ".li-2",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0
    //   );
    //   tl2.to(
    //     "#main-cnt-ul-2",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   tl3.to(".image-3", {
    //     opacity: 1,
    //   });
    //   tl3.from(".li-3", {
    //     xPercent: -100,
    //     stagger: 0.05,
    //     opacity: 0,
    //   });
    //   tl3.to(
    //     "#main-cnt-ul-3",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt",
    //     start: "top 18%",
    //     end: "+=740",

    //     pinSpacing: false,
    //     pin: true,
    //     toggleActions: "play none none reverse",
    //     animation: tl,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-2",
    //     start: "top 18%",

    //     end: "+=700",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl2,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-3",
    //     start: "top 18%",

    //     end: "+=750 50%",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl3,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#right-container",
    //     start: "top top",
    //     end: "+=3310 30%",

    //     toggleActions: "play none none reverse",
    //     pin: true,
    //   });
    // });
    // // Laptop Medium Screen End

    // //  Desktop Large Screen Start
    // mm.add("(min-width: 1023px) and (max-width: 1199px)", () => {
    //   tl.to("#main-cnt", {
    //     xPercent: -52,
    //   });
    //   tl.to(
    //     "#main-cnt-ul",
    //     {
    //       height: "1400px",
    //       duration: 1,
    //       ease: "back.out",
    //     },
    //     0
    //   );

    //   tl.fromTo(
    //     ".hidd",
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,
    //     }
    //   );
    //   tl.to(
    //     ".image-1",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl.from(
    //     ".li-1",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0.1
    //   );
    //   tl2.to(
    //     ".image-2",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl2.from(
    //     ".li-2",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0
    //   );
    //   tl2.to(
    //     "#main-cnt-ul-2",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   tl3.to(".image-3", {
    //     opacity: 1,
    //   });
    //   tl3.from(".li-3", {
    //     xPercent: -100,
    //     stagger: 0.05,
    //     opacity: 0,
    //   });
    //   tl3.to(
    //     "#main-cnt-ul-3",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt",
    //     start: "top 18%",
    //     end: "+=200",

    //     pinSpacing: false,
    //     pin: true,
    //     toggleActions: "play none none reverse",
    //     animation: tl,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-2",
    //     start: "top 18%",

    //     end: "+=700",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl2,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-3",
    //     start: "top 18%",

    //     end: "+=750 50%",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl3,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#right-container",
    //     start: "top 20%",
    //     end: "+=2600 ",

    //     toggleActions: "play none none reverse",
    //     pin: true,
    //   });
    // });
    // //  Desktop Large Screen End

    // // Large Screen Start
    // mm.add("(min-width: 1199px) and (max-width: 1402px)", () => {
    //   tl.to("#main-cnt", {
    //     xPercent: -70,
    //   });
    //   tl.to(
    //     "#main-cnt-ul",
    //     {
    //       height: "1400px",
    //       duration: 1,
    //       ease: "back.out",
    //     },
    //     0
    //   );

    //   tl.fromTo(
    //     ".hidd",
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,
    //     }
    //   );
    //   tl.to(
    //     ".image-1",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl.from(
    //     ".li-1",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0.1
    //   );
    //   tl2.to(
    //     ".image-2",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl2.from(
    //     ".li-2",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0
    //   );
    //   tl2.to(
    //     "#main-cnt-ul-2",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   tl3.to(".image-3", {
    //     opacity: 1,
    //   });
    //   tl3.from(".li-3", {
    //     xPercent: -100,
    //     stagger: 0.05,
    //     opacity: 0,
    //   });
    //   tl3.to(
    //     "#main-cnt-ul-3",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt",
    //     start: "top 18%",
    //     end: "+=900",

    //     pinSpacing: false,
    //     pin: true,
    //     toggleActions: "play none none reverse",
    //     animation: tl,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-2",
    //     start: "top 18%",

    //     end: "+=800",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl2,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-3",
    //     start: "top 18%",

    //     end: "+=750 50%",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl3,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#right-container",
    //     start: "top 20%",
    //     end: "+=3310 20%",

    //     toggleActions: "play none none reverse",
    //     pin: true,
    //   });
    // });
    // Large Screen End

    // Large Screen Start
    // mm.add("(min-width: 1402px) and (max-width: 1699px)", () => {
    //   tl.to("#main-cnt", {
    //     xPercent: -74,
    //   });
    //   tl.to(
    //     "#main-cnt-ul",
    //     {
    //       height: "1400px",
    //       duration: 1,
    //       ease: "back.out",
    //     },
    //     0
    //   );

    //   tl.fromTo(
    //     ".hidd",
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,
    //     }
    //   );
    //   tl.to(
    //     ".image-1",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl.from(
    //     ".li-1",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0.1
    //   );
    //   tl2.to(
    //     ".image-2",
    //     {
    //       opacity: 1,
    //     },
    //     0
    //   );
    //   tl2.from(
    //     ".li-2",
    //     {
    //       xPercent: -100,
    //       stagger: 0.05,
    //       opacity: 0,
    //     },
    //     0
    //   );
    //   tl2.to(
    //     "#main-cnt-ul-2",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   tl3.to(".image-3", {
    //     opacity: 1,
    //   });
    //   tl3.from(".li-3", {
    //     xPercent: -100,
    //     stagger: 0.05,
    //     opacity: 0,
    //   });
    //   tl3.to(
    //     "#main-cnt-ul-3",
    //     {
    //       display: "block",
    //     },
    //     0
    //   );
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt",
    //     start: "top 18%",
    //     end: "+=900",

    //     pinSpacing: false,
    //     pin: true,
    //     toggleActions: "play none none reverse",
    //     animation: tl,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-2",
    //     start: "top 18%",

    //     end: "+=800",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl2,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#main-cnt-3",
    //     start: "top 18%",

    //     end: "+=750 50%",
    //     toggleActions: "play none none reverse",

    //     pinSpacing: false,
    //     pin: true,
    //     animation: tl3,
    //   });
    //   ScrollTrigger.create({
    //     trigger: "#right-container",
    //     start: "top 20%",
    //     end: "+=3000 ",

    //     toggleActions: "play none none reverse",
    //     pin: true,
    //   });
    // });
    // Large Screen End

    // Large Screen Start
    mm.add("(min-width: 1024px)", () => {
      tl.to("#main-cnt", {
        xPercent: -87,
      });
      tl.to(
        "#main-cnt-ul",
        {
          height: "1400px",
          duration: 1,
          ease: "back.out",
        },
        0
      );

      tl.fromTo(
        ".hidd",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      );
      tl.to(
        ".image-1",
        {
          opacity: 1,
        },
        0
      );
      tl.from(
        ".li-1",
        {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        },
        0.1
      );
      tl2.to(
        ".image-2",
        {
          opacity: 1,
        },
        0
      );
      tl2.from(
        ".li-2",
        {
          xPercent: -100,
          stagger: 0.05,
          opacity: 0,
        },
        0
      );
      tl2.to(
        "#main-cnt-ul-2",
        {
          display: "block",
        },
        0
      );
      tl3.to(".image-3", {
        opacity: 1,
      });
      tl3.from(".li-3", {
        xPercent: -100,
        stagger: 0.05,
        opacity: 0,
      });
      tl3.to(
        "#main-cnt-ul-3",
        {
          display: "block",
        },
        0
      );
      ScrollTrigger.create({
        trigger: "#main-cnt",
        start: () => "top 18%",
        end: () => "190% 18%",

        pinSpacing: true,
        pin: true,
        toggleActions: "play none none reverse",
        animation: tl,
      });
      ScrollTrigger.create({
        trigger: "#main-cnt-2",
        start: () => "top 18%",

        end: () => "970% 18%",
        toggleActions: "play none none reverse",

        pinSpacing: true,
        pin: true,
        animation: tl2,
      });
      ScrollTrigger.create({
        trigger: "#main-cnt-3",
        start: () => "top 18%",

        end: () => "800% 18%",
        toggleActions: "play none none reverse",

        pinSpacing: true,
        pin: true,
        animation: tl3,
      });
      ScrollTrigger.create({
        trigger: "#right-container",
        start: () => "10% 18%",
        end: () => "400% 18%",

        toggleActions: "play none none reverse",
        pin: true,
      });
    });
    // Large Screen End
  }, []);
  return (
    <div id="services" className=" flex  mx-auto md:py-0 py-7 ">
      {/* LEFT CONATINER  */}
      <div id="pad-m" className="w-1/2 hidden   lg:block  ">
        <div className="h-screen w-full   flex flex-col  p-1 relative  justify-center ">
          <div
            id="main-cnt"
            className="space-y-5   absolute  left-1/2  translate-x-1/2 "
          >
            <div>
              <h1
                className={`md:text-8xl text-[3rem]   font-bold  ${myFont.className}`}
              >
                Design
              </h1>
              <ul
                id="main-cnt-ul"
                className="   pt-5 pl-3 text-xl h-0 overflow-hidden space-y-3 text-left "
              >
                {ServiceContainer.design.map((l1) => (
                  <li className="li-1 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
            <h1
              className={`hidd md:text-8xl text-[3rem]   font-bold ${myFont.className}`}
            >
              Tech
            </h1>
            <h1
              className={`hidd md:text-8xl text-[3rem]    font-bold ${myFont.className}`}
            >
              Marketing
            </h1>
          </div>
        </div>
        <div>
          {/* MAIN CONTAINER TWO START  */}
          <div
            id="main-cnt-2"
            className="   relative translate-y-[600px]    md:pl-[28%] large-screen:pl-[17%] desktop-lg:pl-[7%]  "
          >
            <div className="wrapper-div-2 ">
              <h1
                className={`md:text-8xl text-[3rem]  font-bold ${myFont.className}`}
              >
                Tech
              </h1>
              <ul
                id="main-cnt-ul-2"
                className="hidden  pl-3 overflow-hidden text-xl space-y-3 pt-5 "
              >
                {ServiceContainer.tech.map((l1) => (
                  <li className="li-2 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* MAIN CONTAINER TWO END  */}
        {/* MAIN CONTAINER THREE START  */}
        <div>
          <div
            id="main-cnt-3"
            className="translate-y-[1000px] md:pl-[28%] large-screen:pl-[17%] desktop-lg:pl-[7%]"
          >
            <div className="wrapper-div-3  ">
              <h1
                className={`${myFont.className} md:text-8xl laptop-md:text-[5rem] text-[3rem]  font-bold `}
              >
                {" "}
                Marketing
              </h1>
              <ul
                id="main-cnt-ul-3"
                className="  hidden  pl-3 space-y-3 pt-5 overflow-hidden text-xl"
              >
                {ServiceContainer.marketing.map((l1) => (
                  <li className="li-3 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-2xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTAINER THREE END  */}

      {/* RIGHT CONTAINER  */}
      <div
        id="right-container"
        className="  lg:w-1/2 w-full    lg:h-screen min-h-screen flex justify-center py-12 lg:py-0  items-center"
      >
        {/* mobile-content-start  */}
        <div className="flex flex-col items-center  w-full  gap-10 lg:hidden  pt-7 pl-2">
          {/* mobile-conatainer-one  */}
          <div>
            <div className="pt-4">
              <h1
                className={`md:text-8xl text-[3rem]  font-bold ${myFont.className}`}
              >
                Design
              </h1>
              <ul
                id="main-cnt-ul-3"
                className="  space-y-3 pt-2 pl-1 overflow-hidden"
              >
                {ServiceContainer.design.map((l1) => (
                  <li className="li-1 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={"/images/Design.gif"}
              alt="digita-image"
              unoptimized
              width={500}
              height={700}
              sizes="100%"
            />
          </div>
          {/* mobile-conatainer-two  */}
          <div>
            <div className="pt-4">
              <h1
                className={`md:text-8xl text-[3rem]  font-bold ${myFont.className} `}
              >
                Tech
              </h1>
              <ul
                id="main-cnt-ul-3"
                className="  space-y-3  pt-2 pl-3 overflow-hidden"
              >
                {ServiceContainer.tech.map((l1) => (
                  <li className="li-2 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={"/images/Tech.gif"}
              unoptimized
              alt="digita-image"
              width={500}
              height={500}
            />
          </div>
          {/* mobile-conatainer-three  */}
          <div className="pb-10">
            <div className="pt-4">
              <h1 className="md:text-8xl text-[3rem]  font-bold"> Marketing</h1>
              <ul
                id="main-cnt-ul-3"
                className="   space-y-3 pt-2 pl-1 overflow-hidden"
              >
                {ServiceContainer.marketing.map((l1) => (
                  <li className="li-3 text-gray-500" key={l1.title}>
                    <span className="font-semibold text-xl text-black">
                      {" "}
                      {l1.title}:
                    </span>{" "}
                    {l1.description}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={"/images/Marketing.gif"}
              unoptimized
              alt="digita-image"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* mobile-content-end  */}

        {/* Desktop Container  */}
        <div className="image-container relative h-full w-full  hidden lg:block   ">
          <div className="image-1 h-[100%] w-[100%] absolute   opacity-0  ">
            <Image
              src={"/images/Design.gif"}
              alt="digita-image"
              width={750}
              height={800}
              unoptimized
            />
          </div>
          <div className="image-2 h-full w-full absolute   opacity-0  ">
            <Image
              src={"/images/Tech.gif"}
              alt="digita-image"
              width={750}
              height={800}
              unoptimized
            />
          </div>
          <div className="image-3 h-full w-full absolute   opacity-0  ">
            <Image
              src={"/images/Marketing.gif"}
              alt="digita-image"
              width={750}
              height={800}
              unoptimized
            />
          </div>
        </div>
      </div>
      {/* RIGHT CONTAINER END */}
    </div>
  );
};

export default Services;
