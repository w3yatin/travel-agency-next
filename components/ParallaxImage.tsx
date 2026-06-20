"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import type { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
};

export default function ParallaxImage({ src, alt = "/", className }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll(".card");

        cards?.forEach((card: Element) => {
          const cover = card.querySelector(".card-cover");

          if (!cover) return;

          gsap.to(cover, {
          yPercent: -20, 
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

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="container-full">
        <div className="card relative overflow-hidden">
          <figure className="card-cover-container">
            <Image
              src={src}
              alt={alt}
              className={`card-cover size-full min-h-75 object-cover scale-125 ${className}`}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}