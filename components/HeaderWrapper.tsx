"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import HeaderLight from "./HeaderLight";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (
    pathname === "/" || 
    pathname === "/home" ||  
    pathname === "/about-us" ||  
    pathname.includes("/services/") ||
    pathname.includes("/tour/") ||
    pathname === "/blog/header-image" 
) {
    return <Header />;
}
if(
    pathname === "/coming-soon" ||
    pathname === "/error-404-2" ||
    pathname === "/book-now" ||
    pathname === "/under-construction"
  ) {
    return null;
  }
  return <HeaderLight />;
}
