"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();


  if (
   
    pathname === "/error-404-2" ||
    pathname === "/coming-soon" ||
    pathname === "/under-construction" ||
    pathname === "/book-now" 
  ) {
    return null;
  }


  return <Footer />;
}