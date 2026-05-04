"use client";

import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ImageBox2() {
  const imgZoomRef = useRef<HTMLDivElement>(null);
  const imgBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: any;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".animate-box", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      if (imgZoomRef.current && imgBoxRef.current) {
        ctx = gsap.context(() => {
          gsap.to(imgBoxRef.current, {
            scale: 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: imgZoomRef.current,
              start: "top+=100 bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }
    };

    loadGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);
    return(
        <section className="bg-blend-multiply img-zoom" ref={imgZoomRef} >
            <div className="hidden">
                <h2 className="xl:text-6xl md:text-5xl text-4xl">Our Work</h2>
            </div>
            <div className="overflow-hidden relative">
                <div className="img-box" ref={imgBoxRef}>
                    <Image src={IMAGES.aboutlarge4} alt="/" className="size-full min-h-75 object-cover" data-speed="0.7" />
                </div>
            </div>
        </section>
    );

}