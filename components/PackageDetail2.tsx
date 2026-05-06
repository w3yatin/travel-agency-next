"use client";
import { useEffect, useRef, useState } from "react";
import faqData from "@/data/faq.json";
import packageData from "@/data/packagecard.json"
import PackageCard from "./cards/PackageCard"
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import DatePicker from "@/components/DatePicker";


type PackageProps = {
  pkg: PackageItem;
};

export default function PackageDetail2({ pkg }: PackageProps) {
       const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const [contentHeights, setContentHeights] = useState<string[]>([]);

    useEffect(() => {
        const heights = contentRefs.current.map((ref) =>
            ref ? `${ref.scrollHeight}px` : "0px"
        );
        setContentHeights(heights);
    }, [faqData]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <>
            <section className="xl:pt-42.5 sm:pt-25 pt-15 lg:pb-25 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="lg:w-2/3 w-full">
                            <div className="sm:mb-22 mb-10">
                                <h2 className="md:text-5xl sm:text-4xl text-3xxl font-medium uppercase xl:mb-10 md:mb-7.5 mb-4">{pkg.title}
                                    <span className="md:text-xl text-lg font-medium text-bodycolor font-base capitalize">
                                    <span className="md:text-3xl text-2xl text-secondary font-title">$1299</span>
                                    /per person</span>
                                </h2>
                                <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Sed non  mauris vitae erat consequat auctor eu in elit. ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nuam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nuam pharetra, erat sed fermentum feugiat neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nuam pharetra, erat sed fermentum feugiat</p>
                                <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetu.</p>
                                <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh</p>
                            </div>

                            <div className="sm:mb-14.5 mb-10">
                                <h2 className="md:text-5xl sm:text-4xl text-3xxl font-medium uppercase mb-7.5">World - Overview</h2>
                                <div className="row">
                                    <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5">
                                        <div className="sm:mb-5 mb-2.5">
                                            <h3 className="sm:text-3xl text-2xl font-medium">By Purpose</h3>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-3.75">
                                            <div className="min-w-13.75">
                                                <Image src={IMAGES.icon1} alt="/" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-medium font-base">Couples</h4>
                                                <p className="xl:text-[17px] text-2sm">For Couples Vacations</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-3.75">
                                            <div className="min-w-13.75">
                                                <Image src={IMAGES.icon2} alt="/" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-medium font-base">Family</h4>
                                                <p className="xl:text-[17px] text-2sm">For Family Vacations</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 mb-3.75">
                                            <div className="min-w-13.75">
                                                <Image src={IMAGES.icon3} alt="/" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-medium font-base">Single</h4>
                                                <p className="xl:text-[17px] text-2sm">For Single Vacations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5">
                                        <div className="sm:mb-5 mb-2.5">
                                            <h3 className="sm:text-3xl text-2xl font-medium">Colourful Cities</h3>
                                        </div>
                                        <ul>
                                            <li className="xl:text-[17px] text-2sm text-secondary py-1.75">The City of Light : Paris, France </li>
                                            <li className="xl:text-[17px] text-2sm text-secondary py-1.75">The City of Gold : Dubai, UAE </li>
                                            <li className="xl:text-[17px] text-2sm text-secondary py-1.75">Sun City : Jodhpur</li>
                                            <li className="xl:text-[17px] text-2sm text-secondary py-1.75">Sin City : Las Vegas, USA </li>
                                            <li className="xl:text-[17px] text-2sm text-secondary py-1.75">Pink City : Jaipur </li>
                                        </ul>
                                    </div>
                                    <div className="xl:w-1/3 md:w-1/2 w-full mb-7.5">
                                        <div className="sm:mb-5 mb-2.5">
                                            <h3 className="sm:text-3xl text-2xl font-medium">Popular Destinations</h3>
                                        </div>
                                        <ul>
                                            <li className="relative py-2.5 ps-9.5 xl:text-[17px] text-2sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">Paris - France</li>
                                            <li className="relative py-2.5 ps-9.5 xl:text-[17px] text-2sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">Kyoto - Japan</li>
                                            <li className="relative py-2.5 ps-9.5 xl:text-[17px] text-2sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">Istanbul - Turkey</li>
                                            <li className="relative py-2.5 ps-9.5 xl:text-[17px] text-2sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">Udaipur - India </li>
                                            <li className="relative py-2.5 ps-9.5 xl:text-[17px] text-2sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1">Manali - India </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <div className="xl:mb-10 md:mb-7.5 mb-4">
                            <h2 className="md:text-5xl sm:text-4xl text-3xxl font-medium uppercase headline">Frequently Asked Questions</h2>
                        </div>
                        <div className="custom-accordion style-2 myAccordion">
                            {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <button className={`accordion-header w-full ${activeIndex === index ? "open" : ""}`}
                                type="button"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="xl:text-2xxl text-lg font-normal">{item.question1}</h3>
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
                        <div className="lg:w-1/3 w-full">
                            <div className="max-lg:mt-10 sticky top-10 h-fit">
                                <div className="bg-primary rounded-2xl sm:p-7.5 p-5 w-full">
                                    <form>
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <input type="text" name="fullname" id="fullname" placeholder="Name" className="py-2.5 pe-3.5 ps-11 text-base bg-white rounded-2lg font-normal h-15 w-full" />
                                                <span className="absolute top-1/2 -translate-y-1/2 left-5.5">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_2517_8766)">
                                                    <path d="M9.88087 2.6875L1.07744 11.4916C1.03315 11.536 1.00117 11.5921 0.985939 11.6524L0.0101637 15.5689C-0.0190245 15.6868 0.0156207 15.8122 0.101663 15.8982C0.166765 15.9633 0.255472 15.9994 0.346209 15.9994C0.374002 15.9994 0.402428 15.9959 0.430094 15.989L4.34665 15.0131C4.40769 14.9978 4.46315 14.966 4.50744 14.9217L13.3116 6.11826L9.88087 2.6875Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M15.4924 1.48706L14.5124 0.507094C13.8574 -0.147864 12.7159 -0.14723 12.0617 0.507094L10.8613 1.70749L14.292 5.13813L15.4924 3.93773C15.8195 3.61069 15.9997 3.17541 15.9997 2.71246C15.9997 2.24951 15.8195 1.81422 15.4924 1.48706Z" fill="#666666" fillOpacity="0.5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_2517_8766">
                                                    <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <input type="email" name="email" id="email" placeholder="Email" className="py-2.5 pe-3.5 ps-11 text-base bg-white rounded-2lg font-normal h-15 w-full" />
                                                <span className="absolute top-1/2 -translate-y-1/2 left-5.5">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.33716 9.80304C8.93909 10.0684 8.47672 10.2087 8 10.2087C7.52331 10.2087 7.06094 10.0684 6.66288 9.80304L0.106531 5.43201C0.0701562 5.40776 0.0347187 5.38248 0 5.35648V12.5189C0 13.3401 0.666406 13.9918 1.47291 13.9918H14.5271C15.3482 13.9918 16 13.3254 16 12.5189V5.35645C15.9652 5.38251 15.9297 5.40785 15.8932 5.43213L9.33716 9.80304Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z" fill="#666666" fillOpacity="0.5"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <input type="email" name="email1" id="email1" placeholder="Confirm Email" className="py-2.5 pe-3.5 ps-11 text-base bg-white rounded-2lg font-normal h-15 w-full" />
                                                <span className="absolute top-1/2 -translate-y-1/2 left-5.5">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.33716 9.80304C8.93909 10.0684 8.47672 10.2087 8 10.2087C7.52331 10.2087 7.06094 10.0684 6.66288 9.80304L0.106531 5.43201C0.0701562 5.40776 0.0347187 5.38248 0 5.35648V12.5189C0 13.3401 0.666406 13.9918 1.47291 13.9918H14.5271C15.3482 13.9918 16 13.3254 16 12.5189V5.35645C15.9652 5.38251 15.9297 5.40785 15.8932 5.43213L9.33716 9.80304Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z" fill="#666666" fillOpacity="0.5"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <input type="number" name="phone" id="phone" placeholder="Phone" className="py-2.5 pe-3.5 ps-11 text-base bg-white rounded-2lg font-normal h-15 w-full" />
                                                <span className="absolute top-1/2 -translate-y-1/2 left-5.5">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_2517_8784)">
                                                    <path d="M14.7162 10.5022C13.7366 10.5022 12.7747 10.349 11.8633 10.0478C11.4167 9.89542 10.8676 10.0352 10.595 10.3151L8.796 11.6732C6.70963 10.5595 5.42446 9.27475 4.32596 7.20404L5.64408 5.45188C5.98654 5.10988 6.10938 4.61029 5.96221 4.14154C5.65971 3.22529 5.50604 2.26392 5.50604 1.28392C5.50608 0.575958 4.93013 0 4.22221 0H1.28387C0.575958 0 0 0.575958 0 1.28387C0 9.39846 6.60158 16 14.7162 16C15.4241 16 16 15.424 16 14.7161V11.786C16 11.0781 15.424 10.5022 14.7162 10.5022Z" fill="#666666" fillOpacity="0.5"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_2517_8784">
                                                    <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <DatePicker />
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <input type="text" name="Tickets" id="Tickets" placeholder="Number of Tickets" className="py-2.5 pe-3.5 ps-11 text-base bg-white rounded-2lg font-normal h-15 w-full" />
                                                <span className="absolute top-1/2 -translate-y-1/2 left-5.5">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.334 3.16683C11.0607 3.16683 10.834 2.94016 10.834 2.66683V1.3335C10.834 1.06016 11.0607 0.833496 11.334 0.833496C11.6073 0.833496 11.834 1.06016 11.834 1.3335V2.66683C11.834 2.94016 11.6073 3.16683 11.334 3.16683Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M4.66602 3.16683C4.39268 3.16683 4.16602 2.94016 4.16602 2.66683V1.3335C4.16602 1.06016 4.39268 0.833496 4.66602 0.833496C4.93935 0.833496 5.16602 1.06016 5.16602 1.3335V2.66683C5.16602 2.94016 4.93935 3.16683 4.66602 3.16683Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M15.1673 5.49984V4.6665C15.1673 3.2865 14.0473 2.1665 12.6673 2.1665H3.33398C1.95398 2.1665 0.833984 3.2865 0.833984 4.6665V5.49984H15.1673Z" fill="#666666" fillOpacity="0.5"/>
                                                    <path d="M0.833984 6.5V12.6667C0.833984 14.0467 1.95398 15.1667 3.33398 15.1667H12.6673C14.0473 15.1667 15.1673 14.0467 15.1673 12.6667V6.5H0.833984ZM4.66732 12.6667C4.30065 12.6667 4.00065 12.3667 4.00065 12C4.00065 11.6333 4.30065 11.3333 4.66732 11.3333C5.03398 11.3333 5.33398 11.6333 5.33398 12C5.33398 12.3667 5.03398 12.6667 4.66732 12.6667ZM4.66732 9.33333C4.30065 9.33333 4.00065 9.03333 4.00065 8.66667C4.00065 8.3 4.30065 8 4.66732 8C5.03398 8 5.33398 8.3 5.33398 8.66667C5.33398 9.03333 5.03398 9.33333 4.66732 9.33333ZM8.00065 12.6667C7.63398 12.6667 7.33398 12.3667 7.33398 12C7.33398 11.6333 7.63398 11.3333 8.00065 11.3333C8.36732 11.3333 8.66732 11.6333 8.66732 12C8.66732 12.3667 8.36732 12.6667 8.00065 12.6667ZM8.00065 9.33333C7.63398 9.33333 7.33398 9.03333 7.33398 8.66667C7.33398 8.3 7.63398 8 8.00065 8C8.36732 8 8.66732 8.3 8.66732 8.66667C8.66732 9.03333 8.36732 9.33333 8.00065 9.33333ZM11.334 12.6667C10.9673 12.6667 10.6673 12.3667 10.6673 12C10.6673 11.6333 10.9673 11.3333 11.334 11.3333C11.7007 11.3333 12.0007 11.6333 12.0007 12C12.0007 12.3667 11.7007 12.6667 11.334 12.6667ZM11.334 9.33333C10.9673 9.33333 10.6673 9.03333 10.6673 8.66667C10.6673 8.3 10.9673 8 11.334 8C11.7007 8 12.0007 8.3 12.0007 8.66667C12.0007 9.03333 11.7007 9.33333 11.334 9.33333Z" fill="#666666" fillOpacity="0.5"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-2.5">
                                            <div className="relative">
                                                <textarea placeholder="Message" name="Comments" id="Comments" className="py-2.5 pe-3.5 ps-5.5 text-base bg-white rounded-2lg font-normal min-h-25 size-full"></textarea>
                                            </div>
                                        </div>
                                        <div className="mt-3.75">
                                            <Link href="/book-now" className="btn btn-secondary btn-hover light w-full justify-center">
                                                <span>Book Now</span>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-25">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        {packageData.map((item, index) => (
                            <div className="xl:col-span-6 col-span-12" key={index}>
                                <PackageCard pkg={item} key={index} bgClass="bg-[#F4F4F4]" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}