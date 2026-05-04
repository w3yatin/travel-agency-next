import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function BlogSideBar() {
    return(
        <div className="xl:w-1/4 w-full max-xl:order-1">
                <aside className="sticky top-5 mb-7.5 @@dir">
        <div className="sm:mb-11.25 mb-5">
            <div className="mb-5">
                <h4 className="text-xl uppercase">Search</h4>
            </div>
            <div className="search-bx">
                <form role="search" >
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
        <div className="sm:mb-11.25 mb-5 recent-posts-entry">
            <div className="mb-5">
                <h4 className="text-xl uppercase">Latest Post</h4>
            </div>
            <div className="widget-post-bx">
                <div className="flex items-center mb-2.5">
                    <div className="w-22.5 min-w-22.5 h-25 rounded-xl relative overflow-hidden"> 
                        <Image  src={IMAGES.blogsmall1} placeholder="blur" alt="img1" width="150" height="150" className="size-full object-cover" />
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
                        <Image  src={IMAGES.blogsmall2} placeholder="blur" alt="img2" width="150" height="150" className="size-full object-cover" />
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
                        <Image  src={IMAGES.blogsmall3} placeholder="blur" alt="img3" width="150" height="150" className="size-full object-cover" />
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
    );
}