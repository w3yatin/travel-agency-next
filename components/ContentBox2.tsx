"use client";
import { useEffect ,useRef } from "react";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function ContentBox2() {

      const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest(".service-card") as HTMLElement | null;

      if (!card || !wrapper.contains(card)) return;

      wrapper
        .querySelectorAll(".service-card.active")
        .forEach((c) => c.classList.remove("active"));

      card.classList.add("active");
    };

    wrapper.addEventListener("mouseover", handleMouseOver);

    return () => {
      wrapper.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

    return(
        <section>
            <div className="container-full">
                <div className="flex flex-wrap items-center services-wrapper" ref={wrapperRef}>
                    <div className="service-card active">
                        <div className="relative service-img after:absolute after:inset-0 after:bg-black/60 after:duration-500 lg:h-200 sm:h-125 h-90">
                            <Image src={IMAGES.service1} alt="/" placeholder="blur" className="object-cover size-full" />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 sm:w-134.5 w-75 max-w-full duration-500 content">
                            <h3 className="lg:text-8xl sm:text-7xl text-6xl sm:mb-8.75 mb-5 text-white uppercase font-semibold">Mission</h3>
                            <div className="sm:h-5 h-1 relative after:absolute after:top-0 after:left-0 after:w-full after:h-px after:block after:bg-linear-(--divider-gradient)"></div>
                            <p className="xl:text-xl sm:text-lg text-sm text-white mt-3.75 font-normal">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 service-text">
                            <h4 className="xl:text-[190px] md:text-11xl text-8xl leading-none text-white/40 font-bold uppercase">Mission</h4>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="relative service-img after:absolute after:inset-0 after:bg-black/60 after:duration-500 lg:h-200 sm:h-125 h-90">
                            <Image src={IMAGES.service2} alt="/" placeholder="blur" className="object-cover size-full" />
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 sm:w-134.5 w-75 max-w-full duration-500 content">
                            <h3 className="lg:text-8xl sm:text-7xl text-6xl sm:mb-8.75 mb-5 text-white">Vision</h3>
                            <div className="sm:h-5 h-1 relative after:absolute after:top-0 after:left-0 after:w-full after:h-px after:block after:bg-linear-(--divider-gradient)"></div>
                            <p className="xl:text-xl sm:text-lg text-sm text-white mt-3.75 font-normal">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 service-text">
                            <h4 className="xl:text-[190px] md:text-11xl text-8xl leading-none text-white/40 font-bold uppercase">Vision</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}