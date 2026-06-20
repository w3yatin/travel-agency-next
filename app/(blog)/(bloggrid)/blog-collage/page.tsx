"use client";
import { useEffect, useRef, useState } from "react";
import blogData from "@/data/blog.json";
import BlogCollageCard from "@/components/cards/BlogCollageCard";
const LIMIT = 7;

const pattern = [
  "lg:w-1/3 md:w-1/2 w-full md:h-107",
  "lg:w-4/6 md:w-1/2 w-full md:h-107",
  "xl:w-4/6 w-full md:h-221.5",
  "xl:w-1/3 md:w-1/2 w-full md:h-107",
  "xl:w-1/3 md:w-1/2 w-full md:h-107",
  "md:w-1/2 w-full md:h-107",
  "md:w-1/2 w-full md:h-107",
];

export default function BlogCollage() {
     const masonryRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isoRef = useRef<any>(null);
  const prevCountRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(LIMIT);
 
  const visibleBlogs = blogData.slice(0, visibleCount);
  const hasMore = visibleCount < blogData.length;
 
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let isoInstance: any = null;
 
    const initIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
 
      if (masonryRef.current) {
        isoInstance = new Isotope(masonryRef.current, {
          itemSelector: ".grid-item",
          layoutMode: "masonry",
          percentPosition: true,
          masonry: {
            columnWidth: ".grid-sizer",
          },
        });
 
        isoRef.current = isoInstance;
        prevCountRef.current = masonryRef.current.querySelectorAll(".grid-item").length;
      }
    };
 
    initIsotope();
 
    return () => {
      isoInstance?.destroy();
      isoRef.current = null;
    };
  }, []);
 
  useEffect(() => {
    if (!isoRef.current || !masonryRef.current) return;
 
    const timer = setTimeout(() => {
      const allItems = masonryRef.current!.querySelectorAll(".grid-item");
      const newItems = Array.from(allItems).slice(prevCountRef.current);
 
      if (newItems.length > 0) {
        isoRef.current.appended(newItems);
      }
 
      isoRef.current.layout();
      prevCountRef.current = allItems.length;
    }, 200);
 
    return () => clearTimeout(timer);
  }, [visibleCount]);
 
  const loadMore = () => {
    setVisibleCount((prev) => prev + LIMIT);
  };
 
  const getCardClass = (index: number) => pattern[index % pattern.length];
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container">
                <div className="row masonry2" ref={masonryRef}>
                    <div className="grid-sizer w-1/12" />
                    {visibleBlogs.map((item, index) => (
                    <div
                        key={`${item.slug}-${index}`}
                        className={`grid-item ${getCardClass(index)} h-auto mb-7.5`}
                    >
                        <BlogCollageCard blogcollage={item} />
                    </div>
                    ))}
                </div>
                {hasMore && (
            <div className="grid grid-cols-12 gap-5 sm:mt-12.5 mt-5">
              <div className="col-span-12 text-center">
                <button
                  type="button"
                  onClick={loadMore}
                  className="btn btn-primary btn-hover py-5 pl-6.25 pr-1.25 group dz-load-more"
                  data-block="button"
                >
                  <span>Load more</span>
                  
                </button>
              </div>
            </div>
          )}
            </div>
        </section>
    );
}