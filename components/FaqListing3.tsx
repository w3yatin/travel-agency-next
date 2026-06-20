"use client";
import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.json";

export default function FaqListing3() {
     const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const [contentHeights, setContentHeights] = useState<string[]>([]);

    useEffect(() => {
        const heights = contentRefs.current.map((ref) =>
            ref ? `${ref.scrollHeight}px` : "0px"
        );
        setContentHeights(heights);
    }, []);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <section id="faq">
            <div className="2xl:py-36 sm:py-20 py-10">
                <div className="container">
                    <div className="grid grid-cols-12 sm:gap-7.5">
                        <div className="xl:col-span-4 col-span-12">
                            <div className="lg:max-w-135  sticky space-top-0 !top-100">
                                <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold headline">Frequently 
                                    Asked Questions</h2>
                            </div>
                        </div>
                        <div className="xl:col-span-8 col-span-12">
                            <div className="custom-accordion style-2 myAccordion">
                                {faqData.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <button className={`accordion-header cursor-pointer w-full ${activeIndex === index ? "open" : ""}`}
                                    type="button"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <h3 className="xl:text-2xxl text-lg font-normal cursor-pointer">{item.question1}</h3>
                                        <span className={`arrow ${activeIndex === index ? "active" : ""}`}>
                                            <i className="fa-solid fa-plus"></i>
                                            <i className="fa-solid fa-minus"></i>
                                        </span>
                                    </button>
                                    <div className="accordion-content"
                                         ref={(el: HTMLDivElement | null) => {
                                                contentRefs.current[index] = el;
                                            }}
                                        style={{
                                            overflow: "hidden",
                                            transition: "max-height 0.35s ease",
                                            maxHeight:
                                            activeIndex === index
                                                ? contentHeights[index]
                                                : "0px",
                                        }}
                                    >
                                        <div className="content-inner">{item.answer1}</div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}