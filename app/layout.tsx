
import type { Metadata } from "next";
import "./css/tailwind.css";
import RouteLoader from "./loading";
import HeaderWrapper from "@/components/HeaderWrapper";
import LenisProvider from "@/provider/LenisProvider";
import ScrollToTop from "@/components/ScrollToTop";
import FooterWrapper from "@/components/FooterWrapper";


export const metadata: Metadata = {
  title: "Plexify - Travel Agency Next Js and Tailwind CSS Template | DexignZone",
  description:
    "Plexify is a modern Travel Agency Next Js and Tailwind CSS Template designed for travel agencies, tour operators, and holiday planners. Featuring a clean UI, responsive layout, and customizable components to showcase destinations, tour packages, and travel services professionally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`$antialiased`}>
        <RouteLoader />
         <LenisProvider >
        <HeaderWrapper />
        <div className="page-content">{children}</div>
        <FooterWrapper />
        <ScrollToTop />
        </LenisProvider>
      </body>
    </html>
  );
}