import blogData from "@/data/blog.json";
import BlogListCard from "./cards/BlogListCard";
import Link from "next/link";
export default function PostTiles() {
    return(
        <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 relative z-1">
            <div className="container">
                <div className="lg:mb-10 sm:mb-5 mb-2.5">
                <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">Latest News</h2>
            </div>
            <div className="row">
                <div className="lg:w-1/3 w-full">
                        <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-lg:after:hidden">
                        <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5">Exciting upcoming trips to beaches, mountains, cities, and wildlife spots. Adventure, culture, and unforgettable memories await you soon!</p>
                        <Link href="/blog" className="btn btn-primary btn-hover">
                            <span>View All</span>
                        </Link>
                    </div>
                </div>
                <div className="lg:w-2/3 w-full">
                    {blogData.slice(0,3).map((item, index) => (
                        <BlogListCard blog={item}  key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}