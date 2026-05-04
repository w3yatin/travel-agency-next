"use client";
import AboutUsBanner2 from "@/components/AboutUsBanner2";
import AllTeamWork from "@/components/AllTeamWork";
import BrandSlider from "@/components/BrandSlider";
import ContentBox1 from "@/components/ContentBox1";
import ContentSlider from "@/components/ContentSlider";
import ImageZoom from "@/components/ImageZoom";
import PostTiles from "@/components/PostTiles";
import { useState } from "react";

export default function AboutUs2() {
    const [open, setOpen] = useState(false);
    return(
        <>
            <AboutUsBanner2 setOpen={setOpen}/>
            <ContentSlider />
            <BrandSlider />
            <ImageZoom />
            <AllTeamWork />
            <ContentBox1 />
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
                    src="https://www.youtube.com/embed/SIjZbiGqafI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
            )}
        </>
    );
}