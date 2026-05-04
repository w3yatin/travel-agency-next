"use client";
import BlogListCard from "@/components/cards/BlogListCard";
import blogData from "@/data/blog.json";
import { useState } from "react";
export default function BlogListNoSideBar() {
     const [visibleCount, setVisibleCount] = useState(3);

    const visibleBlogs = blogData.slice(0, visibleCount);

    const hasMore = visibleCount < blogData.length;

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, blogData.length));
    };
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container-sm">
                <div className="grid grid-cols-12 gap-5 loadmore-content">
                        {visibleBlogs.map((item, index) => (
                            <div className="col-span-12" key={index}>
                                <BlogListCard blog={item}  key={index}/>
                            </div>
                        ))}
                </div>
                {hasMore && (
                <div className="w-full text-center mt-2.5">
                    <button type="button" 
                    onClick={loadMore}
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
        </section>
    );
}