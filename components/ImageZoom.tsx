"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import { useRef , useEffect } from "react";

export default function ImageZoom() {

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
        <section className="bg-blend-multiply img-zoom" ref={imgZoomRef}>
            <div className="w-full text-center">
				<div className="overflow-hidden relative">
                    <div className="img-box" ref={imgBoxRef}>
                        <Image src={IMAGES.aboutlarge2} alt="/" placeholder="blur" className="size-full min-h-75 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}