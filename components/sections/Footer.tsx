import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-2xl  mx-auto p-8">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Contact Info */}
          <div className="flex flex-col  md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="w-6 h-6" />
              <Link href={"tel:7002541577"}>+91-7002541577</Link>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="w-6 h-6" />
              <Link href={"mailto:info@utxotech.com"}>info@utxotech.com</Link>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <ul className="flex items-center gap-4">
              <li className="text-2xl">
                <Link
                  href={"https://www.instagram.com/utxotech/"}
                  target="_blank"
                >
                  <AiFillInstagram className="h-full w-full transition-colors duration-500 hover:text-[#E85868]" />
                </Link>
              </li>
              <li className="text-2xl">
                <Link
                  href={"https://www.facebook.com/utxotech/"}
                  target="_blank"
                >
                  <FaFacebookF className="w-full h-full transition-colors duration-500 hover:text-blue-600" />
                </Link>
              </li>
              <li className="text-2xl">
                <Link href={"https://x.com/utxotech"} target="_blank">
                  <FaXTwitter className="h-full w-full transition-colors duration-500 hover:text-[#1DA1F2]" />
                </Link>
              </li>
              <li className="text-2xl">
                <Link
                  href={"https://in.linkedin.com/company/utxotech"}
                  target="_blank"
                >
                  <FaLinkedinIn className="h-full w-full transition-colors duration-500 hover:text-[#0077B5]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
