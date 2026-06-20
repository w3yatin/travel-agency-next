
import type { Metadata, Viewport } from "next";
import "./css/tailwind.css";
import RouteLoader from "./loading";
import HeaderWrapper from "@/components/HeaderWrapper";
import LenisProvider from "@/provider/LenisProvider";
import ScrollToTop from "@/components/ScrollToTop";
import FooterWrapper from "@/components/FooterWrapper";

const siteUrl = "https://plexify-travel-next.vercel.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plexify - Travel Agency Next Js and Tailwind CSS Template | DexignZone",
    template: "%s | Plexify",
  },
  description:
    "Plexify is a modern Travel Agency Next Js and Tailwind CSS Template designed for travel agencies, tour operators, and holiday planners. Featuring a clean UI, responsive layout, and customizable components to showcase destinations, tour packages, and travel services professionally.",
  keywords: [
    "travel agency template",
    "Next.js travel template",
    "Tailwind CSS travel template",
    "tour operator website",
    "holiday booking template",
    "DexignZone",
  ],
  authors: [{ name: "DexignZone", url: "https://dexignzone.com" }],
  creator: "DexignZone",
  publisher: "DexignZone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Plexify - Travel Agency Next Js and Tailwind CSS Template",
    description:
      "A modern Travel Agency Next Js and Tailwind CSS Template for travel agencies, tour operators, and holiday planners with a clean UI and customizable components.",
    url: siteUrl,
    siteName: "Plexify",
    images: [
      {
        url: "https://plexify.dexignzone.com/next/travel-agency/social-image.png",
        width: 1200,
        height: 630,
        alt: "Plexify Travel Agency Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plexify - Travel Agency Next Js and Tailwind CSS Template",
    description:
      "A modern Travel Agency Next Js and Tailwind CSS Template for travel agencies, tour operators, and holiday planners.",
    images: ["https://plexify.dexignzone.com/next/travel-agency/social-image.png"],
    creator: "@dexignzone",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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