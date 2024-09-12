"use client";
import { ReactLenis, useLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
