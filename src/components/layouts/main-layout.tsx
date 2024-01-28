"use client";
import { ReactNode, useEffect } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return <main>{children}</main>;
}
