"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import CustomButton from "../ui/CustomButton";

gsap.registerPlugin(ScrollTrigger);
const Tagline = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    tl.to(".rounded-div-wrapper", {
      height: 0,
      marginTop: 0,
    });
    tl.fromTo(
      ".tag",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
      }
    );
    tl.fromTo(
      ".tag-2",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
      },
      "<+=0.05"
    );
  }, []);
  return (
    <section id="about" className=" relative h-clamp  ">
      <div className=" rounded-div-wrapper">
        <div className="rounded-div  "></div>
      </div>
      <div className="  bg-white  flex h-full relative  flex-col justify-center lg:px-14 md:px-10 px-4">
        {/* BOX-1  */}
        <div className={`relative  `}>
          <h1 className=" tag md:text-[6vw] text-[3rem]  lg:text-[6.7vw] xxs-xs:text-[2rem] xxs-xs:leading-0 font-semibold  ">
            Building brands, one click at a time. Your digital navigator
          </h1>
          <h1 className=" absolute md:text-[6vw] text-[3rem] lg:text-[6.7vw] xxs-xs:text-[2rem] xxs-xs:leading-0  top-0 opacity-[0.3] font-semibold  ">
            Building brands, one click at a time. Your digital navigator
          </h1>
        </div>
        {/* BOX-2  */}
        {/* <div className="relative ml-20 -mt-4 lg:ml-32 lg:-mt-10">
          <h1 className=" tag-2 md:text-[6vw] text-[3rem] lg:text-[6.8vw]  font-semibold ml-6 ">
            that fuel your bottom line.
          </h1>
          <h1 className=" absolute md:text-[6vw] text-[3rem] lg:text-[6.8vw]  top-0 opacity-[0.3] font-semibold ml-6 ">
            that fuel your bottom line.
          </h1>
        </div> */}
        {/* BOTTOM CONTAINER  */}
      </div>
    </section>
  );
};

export default Tagline;
