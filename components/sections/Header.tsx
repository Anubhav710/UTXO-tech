"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

export const Header: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous!) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        hidden: { y: "-130%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="z-50 fixed top-4 left-0 right-0 w-full"
    >
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({
            ...prev,
            opacity: 0,
          }));
        }}
        className="relative flex xxs-xs:hidden md:flex mx-auto py-3 md:py-1 px-6  w-fit rounded-full nav items-center  md:px-5"
      >
        <Link href={"#"}>
          <Image
            src="/images/logo-1.png"
            alt="logo"
            width={1200}
            height={1200}
            className="px-3 w-28 md:w-44 "
          />
        </Link>

        <Tab setPosition={setPosition} href="#about">
          About
        </Tab>
        <Tab setPosition={setPosition} href="#services">
          Services
        </Tab>
        <Tab setPosition={setPosition} href="#projects">
          Portfolio
        </Tab>
        <Tab setPosition={setPosition} href="#contact-us">
          Contact
        </Tab>

        <Cursor position={position} />
      </ul>
      <div className=" flex-col nav xxs-xs:flex hidden text-white rounded-full items-center  w-max mx-auto  py-[7px] px-[30px]">
        <Link href={"#"}>
          <Image
            src="/images/logo-1.png"
            alt="logo"
            width={1200}
            height={1200}
            className="px-3 w-[9rem] "
          />
        </Link>
        <ul className="flex gap-[0.5rem]">
          <Link href={"#about"}>
            <li> About</li>
          </Link>
          <Link href={"#services"}>
            <li> Services</li>
          </Link>
          <Link href={"#projects"}>
            <li> Portfolio</li>
          </Link>
          <Link href={"#contact-us"}>
            <li> Contact</li>
          </Link>
        </ul>
      </div>
    </motion.header>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}

const Tab: React.FC<TabProps> = ({ children, setPosition, href }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={href}>{children}</a>
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
