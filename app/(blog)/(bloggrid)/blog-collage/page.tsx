import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function BlogCollage() {
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container">
                <div className="row loadmore-content [--bs-gutter-y:30px]!" id="masonry" data-masonry='{"percentPosition": true}'>
                    <div className="card-container lg:w-1/3 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage1} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/standard-post">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 flex items-center justify-between px-3.75 w-full">
                                <h2 className="sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75 flex-1 uppercase">
                                    <Link href="/blog/standard-post" className="text-white!">
                                        Smart Strategies to Grow and Strengthen Your Business
                                    </Link>
                                </h2>
                                <Link href="/blog/standard-post" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container lg:w-4/6 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage2} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/status-slider">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 flex items-center justify-between px-3.75 w-full">
                                <h2 className="sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75 flex-1 uppercase">
                                    <Link href="/blog/status-slider" className="text-white!">
                                        How to Build a Strong Business System Ensures Success
                                    </Link>
                                </h2>
                                <Link href="/blog/status-slider" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container xl:w-4/6 w-full md:h-221.5 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage3} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/corner-post">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center w-full">
                                <h2 className=" sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75">
                                    <Link href="/blog/corner-post" className="text-white!">
                                        How to Create a Profitable Business Budget That Actually Works
                                    </Link>
                                </h2>
                                <Link href="/blog/corner-post" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container xl:w-1/3 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0 mb-7.5">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage4} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/side-post">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center w-full">
                                <h2 className=" sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75">
                                    <Link href="/blog/side-post" className="text-white!">
                                        How to Manage Your Business Effectively for Steady
                                    </Link>
                                </h2>
                                <Link href="/blog/side-post" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container xl:w-1/3 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage5} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="tutorial-post">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center w-full">
                                <h2 className=" sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75">
                                    <Link href="tutorial-post" className="text-white!">
                                        Helping Entrepreneurs Build Profitable Scalable Businesses
                                    </Link>
                                </h2>
                                <Link href="tutorial-post" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage6} /> 
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/post-slider">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center w-full">
                                <h2 className=" sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75">
                                    <Link href="/blog/post-slider" className="text-white!">
                                        Strategies That Turn Businesses Into Success Stories
                                    </Link>
                                </h2>
                                <Link href="/blog/post-slider" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage7} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/post-quote">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center w-full">
                                <h2 className=" sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75">
                                    <Link href="/blog/post-quote" className="text-white!">
                                        Clear Strategies for Sustainable and Business Growth
                                    </Link>
                                </h2>
                                <Link href="/blog/post-quote" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container lg:w-1/3 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover" alt="collage" fill src={IMAGES.collage8} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/post-gallery">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 flex items-center justify-between px-3.75 w-full">
                                <h2 className="sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75 flex-1 uppercase">
                                    <Link href="/blog/post-gallery" className="text-white!">
                                        Your Roadmap to Better Decisions and Bigger Results
                                    </Link>
                                </h2>
                                <Link href="/blog/post-gallery" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-container lg:w-4/6 md:w-1/2 w-full md:h-107 h-auto">
                        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
                            <Image className="size-full object-cover"alt="collage" fill src={IMAGES.collage9} />
                            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                                <span>15 Jun 2025</span>
                                <span className="mx-2">|</span>
                                <Link href="/blog/header-image">By <span className="text-white text-sm font-semibold">Michael Reed</span></Link>
                            </div>
                            <div className="absolute z-1 bottom-6 sm:left-3.75 px-3.75 flex items-center justify-between w-full">
                                <h2 className="sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75 flex-1 uppercase">
                                    <Link href="/blog/header-image" className="text-white!">
                                        Practical Advice to Help Your Business Perform Better
                                    </Link>
                                </h2>
                                <Link href="/blog/header-image" className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}