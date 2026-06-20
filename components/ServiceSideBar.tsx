"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("next/link"), { ssr: false });

export default function ServiceSideBar() {
     const [active, setActive] = useState("#creativedesign"); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    const loadGSAP = async () => {
      if (typeof window === "undefined") return;

      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {});
    };

    loadGSAP();

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let current = "#Maya";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = `#${id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest("a[href^='#']");
      if (!target) return;

      e.preventDefault();
      const id = target.getAttribute("href")?.slice(1);
      const el = document.getElementById(id!);

      el?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);
    return(
        <div className="container z-10 sticky 3xl:block hidden sidebar-sticky top-[40%]">
            <div className="w-full absolute">
                <ul className="sidebar-sticky-wrap transform 4xl:translate-x-[-213px] translate-x-[-130px] pt-10 flex flex-col items-start">
                    <li className="inline-block">
                        <Link href="#creativedesign" className="block font-title mb-1.25 text-base text-black/60 duration-500 hover:text-black link-hover after:bg-white!">Creative Design</Link></li>
                    <li className="inline-block">
                        <Link href="#partner" className="block font-title mb-1.25 text-base text-black/60 duration-500 hover:text-black link-hover after:bg-white!">Partner</Link></li>
                    <li className="inline-block">
                        <Link href="#Comprehensive" className="block font-title mb-1.25 text-base text-black/60 duration-500 hover:text-black link-hover after:bg-white!">Comprehensive</Link></li>
            
                        <li className="inline-block">
                        <Link href="#Process" className="block font-title mb-1.25 text-base text-black/60 duration-500 hover:text-black link-hover after:bg-white!">Process</Link></li>
                    <li className="inline-block">
                        <Link href="#faq" className="block font-title mb-1.25 text-base text-black/60 duration-500 hover:text-black link-hover after:bg-white!">FAQ’s</Link></li>
                </ul>
            </div>
        </div>
    );
}