"use client";
import BlogListCard from "@/components/cards/BlogListCard";
import blogData from "@/data/blog.json";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogListBothSideBar() {
    const [visibleCount, setVisibleCount] = useState(7);

const visibleBlogs = blogData.slice(0, visibleCount);

const hasMore = visibleCount < blogData.length;

const loadMore = () => {
  setVisibleCount((prev) => Math.min(prev + 7, blogData.length));
};
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container-fluid">
                <div className="row">
                    <div className="xl:w-1/5 w-full max-xl:order-1">
                        <aside className="sticky top-0 mb-7.5 left">
                            <div className="sm:mb-11.25 mb-5">
                                <div className="mb-5">
                                    <h4 className="text-xl uppercase">Search</h4>
                                </div>
                                <div className="search-bx">
                                    <form role="search" method="post">
                                        <div className="relative flex flex-wrap items-stretch w-full">
                                            <input name="text" className="w-full h-15 py-2.5 pl-5 pr-12.5 text-2sm sm:rounded-2lg rounded-md bg-primary-30 border-2 border-secondary placeholder:text-bodycolor" placeholder="Search Here" type="text" />
                                            <div className="-ms-px">
                                                <button type="submit" className="absolute right-1.25 top-1/2 -translate-y-1/2 text-3xl z-99 size-12 bg-transparent">
                                                    <i className="feather icon-search text-secondary text-xxl cursor-pointer"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sm:mb-11.25 mb-5 widget_categories style-1">
                                <div className="mb-5">
                                    <h4 className="text-xl uppercase">Category</h4>
                                </div>
                                <ul>
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Acupressure</Link> (10)</li>
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Allgemein</Link> (5)</li>
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Blood</Link> (17)</li>
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Food</Link> (13)</li>
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Health</Link> (06)</li> 
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Mental Health</Link> (17)</li> 
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Therapy</Link> (13)</li> 
                                    <li className="relative py-2.5 pl-6.25 text-2xs text-secondary text-right font-medium before:content-['\e829'] before:text-primary before:absolute before:left-0 before:font-['feather'] before:font-light before:text-lg before:top-2.25"><Link className="float-left text-2sm text-bodycolor" href="/blog">Walking</Link> (06)</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <div className="xl:w-3/5 w-full mb-7.5">
                        <div className="row loadmore-content">
                            <div className="w-full">
                                {visibleBlogs.map((item, index) => (
                                    <BlogListCard blog={item}  key={index}/>
                                ))}
                            </div>
                            
                        </div>
                            {hasMore && (
                                <div className="w-full text-center mt-2.5!">
                                    <button type="button" 
                                    onClick={loadMore}
                                disabled={!hasMore}
                                    className="btn btn-primary btn-hover group dz-load-more" rel="ajax/blog-list.html">
                                        <span>Load More</span>
                                        <span className="block ms-2.5">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2517_10454)">
                                            <path className="duration-200 group-hover:stroke-white" d="M19.167 3.33301V8.33301H14.167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="duration-200 group-hover:stroke-white" d="M0.833008 16.667V11.667H5.83301" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="duration-200 group-hover:stroke-white" d="M2.92467 7.49998C3.34731 6.30564 4.06562 5.23782 5.01256 4.39616C5.95951 3.55451 7.10423 2.96645 8.33991 2.68686C9.5756 2.40727 10.862 2.44527 12.079 2.79729C13.296 3.14932 14.4041 3.80391 15.2997 4.69998L19.1663 8.33331M0.833008 11.6666L4.69967 15.3C5.5953 16.1961 6.70332 16.8506 7.92035 17.2027C9.13738 17.5547 10.4238 17.5927 11.6594 17.3131C12.8951 17.0335 14.0398 16.4455 14.9868 15.6038C15.9337 14.7621 16.652 13.6943 17.0747 12.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_2517_10454">
                                            <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                             )}
                    </div>
                    <div className="xl:w-1/5 w-full max-xl:order-1">
                        <aside className="sticky top-0 mb-7.5 right">
                            <div className="sm:mb-11.25 mb-5 recent-posts-entry">
                                <div className="mb-5">
                                    <h4 className="text-xl uppercase">Latest Post</h4>
                                </div>
                                <div className="widget-post-bx">
                                    <div className="flex items-center mb-2.5">
                                        <div className="w-22.5 min-w-22.5 h-25 rounded-xl relative overflow-hidden"> 
                                            <Image src={IMAGES.blogsmall1} alt="img1" width="150" height="150" className="size-full object-cover" />
                                        </div>
                                        <div className="relative ml-4">
                                            <div className="mb-1">
                                                <ul>
                                                    <li className="text-2xs text-secondary font-medium uppercase mb-2"><Link href="/blog">03 August 2025</Link></li>
                                                </ul>
                                            </div>
                                            <h6 className="font-medium text-base"><Link href="/blog/standard-post">The Art of Managing Business and Patient Care</Link></h6>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2.5">
                                        <div className="w-22.5 min-w-22.5 h-25 rounded-xl relative overflow-hidden"> 
                                            <Image src={IMAGES.blogsmall2} alt="img2" width="150" height="150" className="size-full object-cover" />
                                        </div>
                                        <div className="relative ml-4">
                                            <div className="mb-1">
                                                <ul>
                                                    <li className="text-2xs text-secondary font-medium uppercase mb-2"><Link href="/blog">03 August 2025</Link></li>
                                                </ul>
                                            </div>
                                            <h6 className="font-medium text-base"><Link href="/blog/status-slider">The Art of Managing Business and Patient Care</Link></h6>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-2.5">
                                        <div className="w-22.5 min-w-22.5 h-25 rounded-xl relative overflow-hidden"> 
                                            <Image src={IMAGES.blogsmall1} alt="img3" width="150" height="150" className="size-full object-cover" />
                                        </div>
                                        <div className="relative ml-4">
                                            <div className="mb-1">
                                                <ul>
                                                    <li className="text-2xs text-secondary font-medium uppercase mb-2"><Link href="/blog">03 August 2025</Link></li>
                                                </ul>
                                            </div>
                                            <h6 className="font-medium text-base"><Link href="/blog/corner-post">The Art of Managing Business and Patient Care</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:mb-11.25 mb-5">
                                <div className="mb-5">
                                    <h4 className="text-xl uppercase">Tags</h4>
                                </div>
                                <div className="tagcloud"> 
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Acupressure</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Allgemein</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Blood</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Food</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Health</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Mental Health</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Therapy</Link>
                                    <Link className="relative py-2.5 px-3.75 inline-block text-sm text-secondary leading-[1.4] rounded-6xl mr-2 mb-2.5 border border-secondary/10 hover:border-primary hover:bg-primary" href="/blog">Walking</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}