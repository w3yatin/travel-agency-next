import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function BlogCards() {
    return(
        <div className="2xl:pt-58 sm:pt-40 pt-30">
            <div className="container">
                <div className="text-center xl:mb-25 md:mb-15 mb-7.5">
                    <h2 className="2xl:text-9xxl xl:text-5xl lg:text-4xxl sm:text-4xl text-3xl font-semibold headline sm:mb-4.5 mb-2.5">Our latest blog & article</h2>
                    <p className="xl:text-xl sm:text-lg text-sm max-w-140 mx-auto wow fadeInUp" data-wow-delay="1s">Explore our latest blog and articles for expert insights on web design, SEO, and digital trends.</p>
                </div>
                <div className="grid grid-cols-12 gap-5 loadmore-content">
                    <div className="xl:col-span-8 col-span-12 xl:row-span-2">
                        <div className="relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-t before:from-black/30 before:to-black/0 before:z-1">
                            <div className="relative overflow-hidden">
                                <Image src={IMAGES.blogimg1} alt="Latest blog post cover" className="size-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full sm:p-10 p-5 z-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="xl:text-xl sm:text-lg text-sm text-white mb-2.5">July 12 2025</span>
                                        <h3 className="lg:text-4xxl sm:text-4xl text-3xl font-medium text-white">How to Create a Stunning</h3>
                                    </div>
                                    <Link href="/blog/standard-post" className="size-12.5 flex items-center justify-center rounded-full bg-primary overflow-hidden group/second">
                                        <svg className="group-hover/second:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7H17V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <div className="relative overflow-hidden group before:absolute before:inset-0 before:bg-linear-to-t before:from-black/30 before:to-black/0 before:z-1 xl:before:translate-y-full hover:before:translate-y-0 before:duration-300">
                            <div className="relative overflow-hidden">
                                <Image src={IMAGES.blogimg2} alt="Travel tips and guides" className="size-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full sm:p-7.5 p-5 z-2 xl:translate-y-full group-hover:translate-y-0 duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="sm:text-lg text-sm text-white mb-2.5">July 12 2025</span>
                                        <h3 className="text-3xl font-medium text-white">Travel Tips & Guides</h3>
                                    </div>
                                    <Link href="/blog/status-slider" className="size-12.5 flex items-center justify-center rounded-full bg-primary overflow-hidden group/second">
                                        <svg className="group-hover/second:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7H17V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 md:col-span-6 col-span-12">
                        <div className="relative overflow-hidden group before:absolute before:inset-0 before:bg-linear-to-t before:from-black/30 before:to-black/0 before:z-1 xl:before:translate-y-full hover:before:translate-y-0 before:duration-300">
                            <div className="relative overflow-hidden">
                                <Image src={IMAGES.blogimg3} alt="Travel guide article" className="size-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full sm:p-7.5 p-5 z-2 xl:translate-y-full group-hover:translate-y-0 duration-300">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <span className="sm:text-lg text-sm text-white mb-2.5">July 12 2025</span>
                                        <h3 className="text-3xl font-medium text-white">Your Guide to Travel</h3>
                                    </div>
                                    <Link href="/blog/corner-post" className="size-12.5 flex items-center justify-center rounded-full bg-primary overflow-hidden group/second">
                                        <svg className="group-hover/second:animate-toTopFromBottom" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7H17V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}