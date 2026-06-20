"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import HeaderLight from "./HeaderLight";

const NO_HEADER_PATHS = new Set([
  "/coming-soon",
  "/error-404-2",
  "/book-now",
  "/under-construction",
]);

const DARK_HEADER_PATHS = new Set([
  "/",
  "/home",
  "/about-us"
]);

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (NO_HEADER_PATHS.has(pathname)) {
    return null;
  }

  if (
    DARK_HEADER_PATHS.has(pathname) ||
    pathname.startsWith("/services/") ||
    pathname.startsWith("/tour/") ||
    pathname.startsWith("/blog/header-image")
  ) {
    return <Header />;
  }

  return <HeaderLight />;
}
