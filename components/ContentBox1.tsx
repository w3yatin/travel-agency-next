"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useRef , useEffect } from "react";

export default function ContentBox1() {

    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <section className="relative">
            <div className="container-full">
                <div className="sticky-wrapper">
                    <div ref={(el) => {
                        sectionsRef.current[0] = el;
                        }} className="content--sticky xl:sticky xl:top-0 bg-light">
                        <div className="grid grid-cols-12 xl:gap-5">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="relative z-1 h-full">
                                    <div className="overflow-hidden h-auto">
                                        <Image src={IMAGES.aboutimg4} alt="img" placeholder="blur" className="content__img size-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="3xl:ps-28 3xl:pe-71.5 px-3.75 xl:pt-35.25 xl:pb-30 py-7.5 flex flex-col h-full">
                                    <div className="flex-1">
                                        <h2 className="xl:text-5xl lg:text-4xxl sm:text-4xl font-semibold text-3xl headline">
                                            Our Mission, Your Success
                                        </h2>
                                        <p className="sm:text-xl/7.5 text-lg text-textgray mb-2.5 py-3.75">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                                    </div>
                                    <div className="md:flex items-center gap-5.75">
                                        <Link href="/team" className="btn btn-primary btn-hover">
                                            <span>Join our team</span>
                                        </Link>
                                        <div className="flex items-center gap-5.75 md:mt-0 mt-2.5">
                                            <div>
                                                <Image src={IMAGES.avatar1} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                                <Image src={IMAGES.avatar2} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                                <Image src={IMAGES.avatar3} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            </div>
                                            <div>
                                                <span className="sm:text-lg text-base block text-secondary font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                                <span className="sm:text-lg text-base block text-secondary font-light">the world</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={(el) => {
                        sectionsRef.current[1] = el;
                        }} className="content--sticky xl:sticky xl:top-0 bg-light">
                        <div className="grid grid-cols-12 xl:gap-5">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="relative z-1 h-full">
                                    <div className="overflow-hidden h-auto">
                                        <Image src={IMAGES.aboutimg5} alt="img" placeholder="blur" className="content__img size-full object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="3xl:ps-28 3xl:pe-71.5 px-3.75 xl:pt-35.25 xl:pb-30 py-7.5 flex flex-col h-full">
                                    <div className="flex-1">
                                        <h2 className="xl:text-5xl lg:text-4xxl sm:text-4xl text-3xl headline font-semibold">
                                            The Visionaries Behind the Brands
                                        </h2>
                                        <p className="sm:text-xl/7.5 text-lg text-textgray mb-2.5 py-3.75">At Web design agency, our mission is simple: to turn your ideas into impactful realities. We are dedicated to providing innovative, creative solutions that drive growth, elevate brands, and make a lasting impact.</p>
                                    </div>
                                    <div className="md:flex items-center gap-5.75">
                                        <Link href="/team" className="btn btn-primary btn-hover">
                                            <span>Join our team</span>
                                        </Link>
                                        <div className="flex items-center gap-5.75 md:mt-0 mt-2.5">
                                            <div>
                                                <Image src={IMAGES.avatar1} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                                <Image src={IMAGES.avatar2} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" /> 
                                                <Image src={IMAGES.avatar3} alt="img" placeholder="blur" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                            </div>
                                            <div>
                                                <span className="sm:text-lg text-base block text-secondary font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                                <span className="sm:text-lg text-base block text-secondary font-light">the world</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}