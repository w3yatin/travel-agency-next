"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import bloggridData from "@/data/bloggrid.json";
import BlogGridCard from "./cards/BlogGridCard";
import Link from "next/link";

export default function RelatedArticles() {
    return(
        <section className="lg:py-38 md:py-20 py-10">
            <div className="container">
                <div className="grid grid-cols-12 gap-2.5 items-center lg:mb-18.25 mb-10">
                    <div className="lg:col-span-9 sm:col-span-10 col-span-12">
                        <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-8 sm:gap-5 gap-2.5">
                            <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl headline">
                                More Related Articles
                            </h2>
                            <div className="max-w-85">
                                <p className="xl:text-xl sm:text-lg text-sm">Explore our latest blog and articles for expert insights on web design, SEO, and digital trends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 sm:col-span-2 col-span-12">
                        <Link href="/blog" 
                        className="lg:size-32.25 lg:min-w-32.25 sm:size-25 sm:min-w-25 size-18.75 min-w-18.75 sm:p-3.75 p-2 flex items-center justify-center rounded-full border border-primary lg:text-lg sm:text-base text-xs bg-primary text-secondary sm:ms-auto magneticBtn">
                            <span className="text-center font-medium leading-5">
                                View All Post
                            </span>
                        </Link>
                    </div>
                </div>
                <Swiper
                    className="blog-swiper"
                    modules={[Autoplay, Parallax]}
                    speed={1500}
                    parallax={true}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={35}
                    slidesPerView={1}
                    breakpoints={{
                        567: { slidesPerView: 1, spaceBetween: 15 },
                        767: { slidesPerView: 2, spaceBetween: 20 },
                        1025: { slidesPerView: 3, spaceBetween: 35 },
                    }}
                    >
                        {bloggridData.map((bloggrid, index) => (
                            <SwiperSlide key={index}>
                                <BlogGridCard bloggrid={bloggrid} />
                            </SwiperSlide>
                        ))}
                               
                </Swiper>
            </div>
        </section>
    ); 
}