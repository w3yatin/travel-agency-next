"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { IMAGES } from "@/utilities/Constants";

export default function ImageBox4() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
      useLayoutEffect(() => {
        let ctx: any;
    
        const loadGSAP = async () => {
          const gsap = (await import("gsap")).default;
          const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
         const Lenis = (await import("lenis")).default;
    
          gsap.registerPlugin(ScrollTrigger);
    
          const lenis = new Lenis();
    
          function raf(time: number) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
          }
    
          requestAnimationFrame(raf);
    
          ctx = gsap.context(() => {
            const cards = document.querySelectorAll(".card");
    
            cards.forEach((card: Element) => {
              const cover = card.querySelector(".card-cover");
    
              if (!cover) return;
    
              gsap.to(cover, {
                yPercent: 25,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                 
                },
              });
            });
          }, sectionRef);
        };
    
        loadGSAP();
    
        return () => {
          ctx?.revert();
        };
      }, []);

    return(
        <div className="vedio-section"  ref={sectionRef}>
            <div className="container-full">
                <div className="hidden">
                    <h2 className="xl:text-6xl md:text-5xl text-4xl">Services</h2>
                </div>
                <div className="relative overflow-hidden">
                    <figure className="card-cover-container">
                    <Image src={IMAGES.aboutlarge6} alt="/" placeholder="blur" className="size-full min-h-75 object-cover"  />
                    </figure>
                </div>
            </div>
        </div>
    );
}