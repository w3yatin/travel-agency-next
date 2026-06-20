"use client";
import Link from "next/link";
import TeamCard from "@/components/cards/TeamCard";
import teamData from "@/data/team.json";
import { useEffect } from "react";


export default function AllTeamWork() {
     useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    const initGSAP = async () => {
      if (typeof window === "undefined") return;

      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        let destroyFn: (() => void) | null = null;

        ScrollTrigger.matchMedia({
          "(min-width: 567px)": () => {
            const boxes = document.querySelectorAll<HTMLElement>(
              ".pxl-team-list .box-item"
            );

            const cleanups: (() => void)[] = [];

            boxes.forEach((box) => {
              const reveal = box.querySelector<HTMLElement>(".item-image");
              const revealImg = reveal?.querySelector<HTMLElement>(".reveal-image");

              if (!reveal || !revealImg) return;

              const positionElement = (ev: MouseEvent) => {
                const parentRect = box.getBoundingClientRect();
                const parentWidth = box.offsetWidth;
                const revealWidth = reveal.offsetWidth;
                const mouseX = ev.clientX - parentRect.left;
                const padding = 60;
                const finalX = mouseX + padding;

                reveal.style.top = "50%";
                reveal.style.transform = "translateY(-50%)";

                if (finalX + revealWidth > parentWidth) {
                  const rightDistance = parentWidth - mouseX;
                  reveal.style.right = `${rightDistance + padding}px`;
                  reveal.style.left = "auto";
                } else {
                  reveal.style.left = `${finalX}px`;
                  reveal.style.right = "auto";
                }
              };

              const showImage = () => {
                gsap.killTweensOf(revealImg);
                gsap.timeline()
                  .set(reveal, { opacity: 1, zIndex: 50 })
                  .fromTo(
                    revealImg,
                    { scaleX: 0, opacity: 0, transformOrigin: "left center" },
                    { scaleX: 1, opacity: 1, duration: 0.4 }
                  );
              };

              const hideImage = () => {
                gsap.killTweensOf(revealImg);
                gsap.timeline()
                  .to(revealImg, {
                    scaleX: 0,
                    opacity: 0,
                    duration: 0.3,
                    transformOrigin: "right center",
                  })
                  .set(reveal, { opacity: 0, zIndex: "" });
              };

              const mouseEnter = (e: MouseEvent) => {
                positionElement(e);
                showImage();
              };

              const mouseMove = (e: MouseEvent) => {
                positionElement(e);
              };

              box.addEventListener("mouseenter", mouseEnter);
              box.addEventListener("mousemove", mouseMove);
              box.addEventListener("mouseleave", hideImage);

              cleanups.push(() => {
                box.removeEventListener("mouseenter", mouseEnter);
                box.removeEventListener("mousemove", mouseMove);
                box.removeEventListener("mouseleave", hideImage);
              });
            });

            destroyFn = () => {
              cleanups.forEach((fn) => fn());
            };
          },
        });

        return () => destroyFn?.();
      });
    };

    initGSAP();

    return () => ctx?.revert();
  }, []);

    return(
      <section className="2xl:py-33 sm:py-20 py-10">
            <div className="container">
                <div className="flex items-center justify-between sm:mb-20 mb-5">
                    <div className="xl:max-w-140 max-w-100">
                        <h2 className="2xl:text-7xl md:text-5xxl sm:text-4xl text-3xxl font-semibold headline">
                            The Faces Behind the Work
                        </h2>
                    </div>
                    <Link href="/team/sophia-carter" 
                    className="lg:size-32.25 lg:min-w-32.25 sm:size-25 sm:min-w-25 size-17.5 min-w-17.5 sm:p-3.75 p-2 flex items-center justify-center rounded-full border border-primary lg:text-lg sm:text-base text-xs bg-primary text-secondary sm:ms-auto magneticBtn">
                        <span className="text-center">
                            View All Team
                        </span>
                    </Link>
                </div>
            </div>
            <div className="wrapper">
                <div className="pxl-team-list">
                        {teamData.map((item, index) => (
                        <div key={index} className="project relative border-b border-t border-black/10 sm:px-7.5 px-5 group">
                            <TeamCard team={item} />
                        </div>
                        ))}
                </div>
            </div>
      </section>
    );
}