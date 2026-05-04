import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsBanner2({setOpen}:any) {
    return(
        <div className="main-banner overflow-hidden pt-32.5 pb-12.5 z-0">
            <div className="container">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-7 col-span-12 xl:mr-20 lg:mr-10">
                        <div className="2xl:pt-26.25 pt-0">
                            <h2 className="2xl:text-7xl lg:text-6xl md:text-5xxl sm:text-4xxl text-3xxl font-medium headline sm:mb-10 mb-5">Turning Dreams into Destinations</h2>
                            <div className="flex gap-3 2xl:mb-33.75 sm:mb-12.5 mb-5 md:flex-row flex-col wow fadeInLeft" data-wow-delay="0.8s">
                                <div className="min-w-22.5">
                                    <h6 className="text-lg font-medium text-secondary">About Us</h6>
                                </div>
                                <div className="min-w-20 h-px md:mt-3.75 bg-black/10"></div>
                                <div className="2xl:ps-12.75 sm:ps-5">
                                    <p className="xl:text-xl sm:text-lg text-sm font-normal wow fadeInLeft" data-wow-delay="1s">Welcome to the space where creativity knows no bounds. Our agency is a hub of innovation, collaboration, and artistry, dedicated to crafting unforgettable campaigns that resonate and inspire.</p>
                                </div>
                            </div>
                            <div className="flex sm:gap-10 gap-5 wow fadeInLeft" data-wow-delay="1s">
                                <Link href="/">
                                    <Image src={IMAGES.aboutimg6} alt="img" />
                                </Link>
                                <div className="flex flex-col">
                                    <button data-type="youtube"onClick={() => setOpen(true)} className="flex flex-col flex-1 text-start cursor-pointer">
                                        <span className="inline-block sm:size-15 size-10 sm:leading-15 leading-10 text-center rounded-full bg-primary duration-500 hover:text-primary hover:bg-secondary text-secondary sm:mb-5 mb-3 magneticBtn">
                                            <i className="fa-solid fa-play"></i>
                                        </span>
                                        <span className="text-lg block text-secondary font-normal font-title">Watch Now</span>
                                    </button>
                                    <span className="sm:text-sm text-xs block text-lightgreen max-w-42.5">The Visionaries Behind the Brands</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12">
                        <div className="lg:w-[50vw] lg:float-left">
                            <div className="overflow-hidden h-full">
                                <Image src={IMAGES.aboutimg7} alt="img" className="lg:size-auto size-full object-cover duration-1000 scale-200 image-zoom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}