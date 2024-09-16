import { ServiceContainer } from "@/constants";
import { myFont } from "@/fonts";
import React from "react";
import Lottie from "lottie-react";

const Service = () => {
  return (
    <section id="service-cnt" className="bg-red-400 h-screen w-full">
      {/* WRAPPER DIV MAX- -1200  */}
      <div className="w-full h-full bg-green-400 mx-auto">
        <div className="bg-purple-400 w-max mx-auto">
          <h1
            className={`md:text-8xl text-[3rem]   font-bold  ${myFont.className}`}
          >
            Design
          </h1>
          sdfsdfsd
          <ul
            id="main-cnt-ul"
            className="   pt-5 pl-3 text-xl h-max overflow-hidden space-y-3 text-left "
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
    </section>
  );
};

export default Service;
