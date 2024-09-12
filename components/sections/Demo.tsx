"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroll-div",
        start: "-60% center",
        end: " center",
        pin: "#pin",
        scrub: true,
      },
    });

    tl.to(
      "#scroll-div",
      {
        top: 0,
      },
      "a"
    );
    tl.to(
      "#star-img",
      {
        rotate: 360,
        duration: 1,
      },
      "a"
    );
    tl.to("#scl", {
      xPercent: 750,
    });
  }, []);
  return (
    <section>
      <div
        id="conatiner"
        className=" bg-red-100 border-2 flex min-h-screen border-green-400 w-full"
      >
        {/* LEFT SCROLL CONATINER  */}
        <div className="w-1/2  border-2 border-orange-500 flex flex-col gap-7 justify-center ">
          <div id="pin" className="bg-green-600 space-y-6">
            <h1 className="text-8xl font-semibold">
              Expected <br /> Outcomes
            </h1>
            <div
              id="scl"
              className="h-16 w-16  bg-gray-400 rounded-full flex items-center justify-center "
            >
              <Image
                id="star-img"
                src={"/images/star.svg"}
                alt="star"
                width={28}
                height={70}
              />
            </div>
          </div>
        </div>
        {/* RIGHT BOX  */}
        <div className=" h-screen right w-1/2 border-3   relative ">
          <div id="scroll-div" className="h-full relative top-[100%]">
            <div className="h-[50%]   bg-black"></div>
            <div className="h-[50%]  bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
