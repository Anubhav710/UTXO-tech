import type { Metadata } from "next";
import { myFont2 } from "@/fonts";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "UTXO Web Tech | Web, Graphic, and Digital Marketing Services",
  description:
    "UTXO Web Tech offers top-tier web development, digital marketing, graphic design, and a wide range of digital solutions for your business. Contact us today !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${myFont2.className} `}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
