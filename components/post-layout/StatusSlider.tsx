"use client";
import Image from "next/image";
import BlogDetailSection from "../BlogDetailSection";
import { useState } from "react";

type BlogProps = {
  blog: BlogItem;
};

export default function StatusSlider({ blog }: BlogProps) {
    const [open, setOpen] = useState(false);
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
                                <div className="relative overflow-hidden">
                                    <Image src={blog.image} alt={blog.title}  blurDataURL="/images/blur.png" className="size-full object-cover" height={494} width={878}/>
                                    <button type="button" onClick={() => setOpen(true)}  className="post-status-btn absolute top-1/2 left-1/2 -translate-1/2 rounded-full md:size-25 sm:size-20 size-18 bg-black/40 text-center cursor-pointer" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <svg className="inline-block max-sm:size-5" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.8988 10.8238L7.875 2.14375C7.44554 1.88967 6.95647 1.75382 6.4575 1.75C5.67312 1.75 4.92087 2.06159 4.36623 2.61623C3.81159 3.17087 3.5 3.92312 3.5 4.7075V23.3363C3.5001 23.8568 3.63963 24.3678 3.90409 24.8161C4.16855 25.2644 4.54829 25.6337 5.0038 25.8856C5.45932 26.1375 5.974 26.2627 6.49432 26.2483C7.01464 26.2339 7.5216 26.0804 7.9625 25.8038L23.0038 16.3013C23.4714 16.0086 23.8553 15.5997 24.118 15.1145C24.3807 14.6293 24.5132 14.0844 24.5026 13.5328C24.492 12.9811 24.3387 12.4417 24.0577 11.9669C23.7766 11.4922 23.3773 11.0983 22.8988 10.8238Z" fill="white"></path>
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