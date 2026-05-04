import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function TeamBanner2() {
    return(
        <div className="main-banner overflow-hidden xl:pt-51.25 md:pt-40 pt-25 xl:pb-40 sm:pb-20 pb-10 z-0">
            <div className="container-lg">
                <div className="grid grid-cols-12 md:gap-10 gap-2.5">
                    <div className="lg:col-span-7 col-span-12">
                        <div className="px-0">
                            <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold headline lg:mb-13.75 mb-5">Collaboration That Elevates Travel</h2>
                            <div className="xl:flex gap-1.5 lg:mb-15 mb-10 md:flex-row flex-col wow fadeInLeft" data-wow-delay="0.8s">
                                <div className="min-w-23.5">
                                    <p className="text-lg font-normal text-secondary font-title">Team</p>
                                </div>
                                <div className="min-w-20 h-px mt-3.75 bg-black/10"></div>
                                <div className="xl:ps-10 xl:pe-7.5 max-xl:mt-5">
                                    <p className="xl:text-xl sm:text-lg text-sm font-normal">Welcome to the space where creativity knows no bounds. Our agency is a hub of innovation, collaboration, and artistry, dedicated to crafting unforgettable campaigns that resonate and inspire.</p>
                                </div>
                            </div>
                            <div className="overflow-hidden 2xl:max-w-200 lg:max-w-150 wow clip-right-animation">
                                <Image
                                    src={IMAGES.aboutimg14} alt="img" className="w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 col-span-12">
                        <div className="2xxl:ps-10">
                            <div className="relative max-2xl:flex max-2xl:flex-col max-2xl:gap-20 max-sm:gap-28">
                                <div className="lg:flex items-center justify-star wow fadeInDown" data-wow-delay="1s">
                                    <Image src={IMAGES.team4} alt="img" className="2xxl:w-auto 2xl:w-[65%] lg:w-[71%] sm:w-[58%] w-1/2" />
                                </div>
                                <div className="flex items-center justify-end md:-mt-45 -mt-50 sm:ms-0 -ms-10 2xxl:-me-25 lg:-me-5 wow fadeInRight" data-wow-delay="1s">
                                    <Image src={IMAGES.team2} alt="img" className="2xxl:w-auto 2xl:w-[65%] lg:w-[71%] sm:w-[58%] w-1/2" />
                                </div>
                                <div className="flex items-center justify-start 3xl:-mt-28 2xl:-mt-30 lg:-mt-55 md:-mt-81 -mt-55 relative">
                                    <Image src={IMAGES.team3} alt="img" className="2xxl:w-auto 2xl:w-[65%] lg:w-[71%] sm:w-[58%] w-1/2 wow fadeInUp" data-wow-delay="1s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}