"use client";
import AboutSection from "@/components/AboutSection";
import DestinationCards from "@/components/DestinationCards";
import HeroBanner from "@/components/HeroBanner";
import HolidayCards from "@/components/HolidayCards";
import PackageCards from "@/components/PackageCards";
import PostTiles from "@/components/PostTiles";
import TestimonialSwiper from "@/components/TestimonialSlider";
import TourSlider from "@/components/TourSlider";
import { useState } from "react";


export default function HomePage() {
    const [open, setOpen] = useState(false);
  return (
    <>
        <HeroBanner setOpen={setOpen}/>
        <AboutSection />
        <DestinationCards />
        <TourSlider />
        <PackageCards />
        <HolidayCards />
        <TestimonialSwiper />
        <PostTiles />
   
         {open && (
          <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-999 flex justify-center items-center"
              onClick={() => setOpen(false)}
          >
          <div
            className="relative w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            >
            <button
                className="absolute top-3 right-3 text-white text-2xl"
                onClick={() => setOpen(false)}
            >
                ×
            </button> 
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/MqV6iXsmHYE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      )}
    </>
  )
}