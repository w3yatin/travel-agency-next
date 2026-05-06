"use client";

import Image from "next/image";
import BlogDetailSection from "../BlogDetailSection";
import { Pagination , Autoplay } from "swiper/modules";
import { IMAGES } from "@/utilities/Constants";
import { Swiper , SwiperSlide} from "swiper/react";

const slides = [
  IMAGES.blogimg4,
  IMAGES.blogimg5,
  IMAGES.blogimg6,
];

type BlogProps = {
  blog: BlogItem;
};

export default function PostSlider({ blog }: BlogProps) {
    return(
        <div className="xl:pt-50 sm:pt-40 pt-30">
            <div className="container-sm lg:px-8.5!">
                <div className="row">
                    <div className="w-full">
                        <div className="sm:pb-7.5 pb-3.75">
                            <div className="text-center max-w-220 mx-auto">
                                <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl headline lg:mb-7.5 mb-2.5 uppercase headline">{blog.title}</h2>
                                <ul className="text-base font-medium uppercase mt-auto mb-5">
                                    <li className="inline-block relative pe-2.5">{blog.publishedAt}</li>
                                    <li className="inline-block relative ps-3.75 before:content-['/'] before:absolute before:h-full before:top-0 before:left-0">By {blog.author}</li>
                                </ul>
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    loop={true}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    speed={1500}
                                    autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    }}
                                    pagination={{
                                    el: ".swiper-pagination-two",
                                    clickable: true,
                                    }}
                                    className="w-full h-full blog-slideshow relative"
                                >
                                    {slides.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-[400px]">
                                        <Image
                                            src={img}
                                            alt={`slide-${index}`}
                                            width="1600" height="960"
                                            className="size-full object-cover"
                                        />
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                    <div className="swiper-pagination-two absolute bottom-2.5 z-1 left-0 right-0 text-center"></div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="mb-5">
                                <div className="lg:mb-15 mb-7.5">
                                <p className="xl:text-xl sm:text-lg text-sm font-light">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy café, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It’s the journey from inspiration to execution</p>
                            </div>
                            <BlogDetailSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}