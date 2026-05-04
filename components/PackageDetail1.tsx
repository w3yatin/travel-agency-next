"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import tourData from "@/data/tour.json";
import TourCard from "./cards/TourCard";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PackageDetail1() {
    const [open, setOpen] = useState(false);
    return(
        <>
        <section className="pt-7.5 lg:pb-20 pb-15">
            <div className="container">
                <div className="bg-[#F2EFEA] relative overflow-hidden rounded-2xl flex flex-wrap items-center">
                    <div className="lg:w-1/5 md:w-1/3 w-1/2 xl:px-12.5 px-5 xl:py-10 py-6 text-center relative after:absolute after:top-0 after:right-0 after:w-0.5 after:h-full after:bg-white">
                        <h3 className="xl:text-3xl sm:text-2xxl text-2xl font-medium mb-2.5 uppercase">Date</h3>
                        <span className="block font-title font-medium xl:text-2xl sm:text-xl text-lg uppercase">28 Jun - 15 July</span>
                    </div>
                    <div className="lg:w-1/5 md:w-1/3 w-1/2 xl:px-12.5 px-5 xl:py-10 py-6 text-center relative after:absolute after:top-0 after:right-0 after:w-0.5 after:h-full after:bg-white md:after:block after:hidden">
                        <h3 className="xl:text-3xl sm:text-2xxl text-2xl font-medium mb-2.5 uppercase">Duration</h3>
                        <span className="block font-title font-medium xl:text-2xl sm:text-xl text-lg uppercase">06 Days</span>
                    </div>
                    <div className="lg:w-1/5 md:w-1/3 w-1/2 xl:px-12.5 px-5 xl:py-10 py-6 text-center relative after:absolute after:top-0 after:right-0 after:w-0.5 after:h-full after:bg-white lg:after:block md:after:hidden before:absolute before:top-0 before:right-0 before:w-full before:h-0.5 before:bg-white md:before:hidden">
                        <h3 className="xl:text-3xl sm:text-2xxl text-2xl font-medium mb-2.5 uppercase">Price</h3>
                        <span className="block font-title font-medium xl:text-2xl sm:text-xl text-lg uppercase">$199</span>
                    </div>
                    <div className="lg:w-1/5 md:w-1/3 w-1/2 xl:px-12.5 px-5 xl:py-10 py-6 text-center relative after:absolute after:top-0 after:right-0 after:w-0.5 after:h-full after:bg-white md:after:block after:hidden before:absolute before:top-0 before:right-0 before:w-full before:h-0.5 before:bg-white lg:before:hidden">
                        <h3 className="xl:text-3xl sm:text-2xxl text-2xl font-medium mb-2.5 uppercase">Availability</h3>
                        <span className="block font-title font-medium xl:text-2xl sm:text-xl text-lg uppercase">30</span>
                    </div>
                    <div className="lg:w-1/5 md:w-2/3 w-full xl:px-12.5 px-5 xl:py-10 md:py-8.5 py-6 text-center relative before:absolute before:top-0 before:right-0 before:w-full before:h-0.5 before:bg-white lg:before:hidden">
                        <Link href="/book-now" className="btn btn-primary btn-hover">
                            <span>Book Now</span>
                        </Link>
                    </div>
                </div>
                <div className="xl:pt-30 sm:pt-20 pt-15 lg:px-20 sm:px-5 text-center">
                    <h3 className="lg:text-3xl text-2xl font-medium uppercase lg:mb-10 sm:mb-7.5 mb-4 max-w-220 mx-auto">A remote, untouched, lush, and isolated tropical island with dense, wild, rugged, hidden, serene, pristine, natural, overgrown, secluded, and mystical beauty.</h3>
                    <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">Lorem ipsum dolor sit amet consectetur. Ultrices purus consectetur purus euismod eget integer mauris amet. Aliquam enim donec quam ut. At pellentesque suspendisse est nulla dictum eu. Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Lorem ipsum dolor sit amet consectetur. Ultrices purus consectetur purus euismod eget integer mauris amet. Aliquam enim donec quam ut. At pellentesque suspendisse est nulla dictum eu. Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.</p>
                    <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique .</p>
                    <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-7.5 mb-4">Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetur erat at id tristique. Erat hac morbi sagittis facilisis purus nunc id.Bibendum in aliquam consectetur aenean tincidunt arcu nisi nibh diam. Sapien cras bibendum gravida tempus lobortis urna elit orci. Vivamus velit consectetu.</p>
                </div>
            </div>
        </section>

        <section className="relative">
            <div className="hidden">
                <h2 className="xl:text-6xl md:text-5xl text-4xl">Our Work</h2>
            </div>
            <div className="container-full">
                <div className="relative overflow-hidden">
                    <Image src={IMAGES.tourdetail1} alt="/" className="size-full min-h-75 object-cover" data-speed="0.7" />
                    <div className="absolute md:top-12.5 top-5 lg:left-17.5 md:left-10 left-5">
                        <button data-type="youtube"  onClick={() => setOpen(true)} type="button" className="lg:size-32.5 md:size-25 size-15 flex items-center justify-center rounded-full text-white bg-black/20 cursor-pointer">
                            <svg className="max-md:size-5" width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.00476C0 0.631263 2.62574 -0.80226 4.62227 0.481227L29.5189 16.4862C31.3559 17.6671 31.3559 20.3524 29.5189 21.5333L4.62227 37.5383C2.62574 38.8218 0 37.3883 0 35.0148V3.00476Z" fill="white"/>
                            </svg>
                        </button>
                         {open && (
                            <div
                                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-999 flex justify-center items-center"
                                onClick={() => setOpen(false)}
                            >
                                <div
                                    className="relative w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                    >
                                    <button
                                        className="absolute top-3 right-3 text-white text-2xl"
                                        onClick={() => setOpen(false)}
                                    >
                                        ×
                                    </button> 
                                        <iframe
                                            width="100%"
                                            height="450"
                                            src="https://www.youtube.com/embed/SIjZbiGqafI"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                         )}
                    </div>
                    </div>
                </div>
            </section>

        <section className="lg:py-25 sm:py-20 py-12.5">
            <div className="container">
                <div className="lg:mb-10 sm:mb-7.5 mb-4 text-center">
                    <h2 className="md:text-5xl sm:text-4xl text-3xxl font-medium mb-2.5">Tour Program</h2>
                    <p className="xl:text-xl sm:text-lg text-sm font-medium">Experience World ClassNmaeclassName 5 Stars Hotels</p>
                </div>
                <div className="grid grid-cols-12 lg:gap-5 mb-7.5">
                    <div className="lg:col-span-2 col-span-12 lg:text-center mb-2.5"><button className="btn btn-primary btn-hover !px-7.25"> Day 1 - 2 </button></div>
                    <div className="lg:col-span-10 col-span-12">
                        <div className="rounded-2xl bg-[#EEEEEE] sm:px-8.75 sm:py-11.25 px-5.75 py-8.25">
                            <div className="mb-7.5">
                                <h3 className="lg:text-3xl text-2xl font-normal mb-5">Valencia</h3>
                                <p className="sm:text-lg text-2sm">Valencia is a vibrant coastal city known for its arts, architecture, beaches, and delicious cuisine." Would you like a more poetic, travel-themed, or professional version</p>
                            </div>
                            <ul>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Free Time & Shopping</strong> - Allowing leisure time for self-exploration or local shopping.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Local Rules & Culture Tips</strong> - Informing travelers about cultural or religious sensitivities.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Guide Introduction</strong> - Introducing the tour guide or local guide to the group.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Photography Spots</strong> - Suggesting the best places for scenic photos or group shots.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 lg:gap-5 mb-7.5">
                    <div className="lg:col-span-2 col-span-12 lg:text-center mb-2.5"><button className="btn btn-primary btn-hover !px-7.25"> Day 3 - 4 </button></div>
                    <div className="lg:col-span-10 col-span-12">
                        <div className="rounded-2xl bg-[#EEEEEE] sm:px-8.75 sm:py-11.25 px-5.75 py-8.25">
                            <div className="mb-7.5">
                                <h3 className="lg:text-3xl text-2xl font-normal mb-5">Bali</h3>
                                <p className="sm:text-lg text-2sm">Bali is a tropical paradise of lush rice terraces, sacred temples, vibrant beaches, spiritual traditions, artistic villages, and sunsets that melt into the soul</p>
                            </div>
                            <ul>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Free Time & Shopping</strong> - Allowing leisure time for self-exploration or local shopping.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Local Rules & Culture Tips</strong> - Informing travelers about cultural or religious sensitivities.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Guide Introduction</strong> - Introducing the tour guide or local guide to the group.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Photography Spots</strong> - Suggesting the best places for scenic photos or group shots.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 lg:gap-5 mb-7.5">
                    <div className="lg:col-span-2 col-span-12 lg:text-center mb-2.5"><button className="btn btn-primary btn-hover !px-7.25"> Day 5 - 6 </button></div>
                    <div className="lg:col-span-10 col-span-12">
                        <div className="rounded-2xl bg-[#EEEEEE] sm:px-8.75 sm:py-11.25 px-5.75 py-8.25">
                            <div className="mb-7.5">
                                <h3 className="lg:text-3xl text-2xl font-normal mb-5">Perpignan ( France )</h3>
                                <p className="sm:text-lg text-2sm">Perpignan, a sun-drenched city near the Pyrenees, blends Catalan heritage, medieval charm, colorful markets, Gothic architecture, and a warm Mediterranean spirit that captivates every traveler</p>
                            </div>
                            <ul>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Free Time & Shopping</strong> - Allowing leisure time for self-exploration or local shopping.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Local Rules & Culture Tips</strong> - Informing travelers about cultural or religious sensitivities.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Guide Introduction</strong> - Introducing the tour guide or local guide to the group.</li>
                                <li className="relative p-1.25 ps-9.5 xl:text-lg text-sm font-normal text-secondary/90 before:absolute before:left-0 before:bg-no-repeat before:size-7 before:bg-check before:top-1"><strong className="font-medium">Photography Spots</strong> - Suggesting the best places for scenic photos or group shots.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-25">
            <div className="container">
                <div className="mb-10 text-center">
                    <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase font-medium headline">Upcoming Trips</h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    speed={1500}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        700: {
                        slidesPerView: 2,
                        },
                        1150: {
                        slidesPerView: 3,
                        },
                        1400: {
                        slidesPerView: 2.7,
                        spaceBetween: 50,
                        },
                    }}
                    className="tour-swiper"
                    >
                        {tourData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TourCard  tour={item}/>
                        </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
    </>
    );
}