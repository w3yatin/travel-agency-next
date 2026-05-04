import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function LocationBox() {
    return(
        <section className="2xl:pt-45 2xl:pb-58.5 lg:py-20 py-10">
                    <div className="container">
                        <div className="lg:text-center xl:mb-20 mb-10">
                            <h2 className="xl:text-7xl md:text-5xl text-4xl headline font-semibold">
                                Visit us at below locations
                            </h2>
                        </div>
                        <div className="row">
                            <div className="w-full">
                                <div className="relative">
                                    <Image src={IMAGES.map} placeholder="blur" alt="map" className="" />
                                    <div id="ct-1" className="absolute top-[53%] left-[18%] -translate-x-1/2 ct cursor-pointer group">
                                        <div className="size-3.75 bg-black duration-[all_400ms_cubic-bezier(0.39,0.58,0.57,1)_0s] rounded-full border-5 border-primary shadow-[0px_0px_30px_var(--primary)]"></div>
                                        <div className="p-2.5 lg:pe-7.5 bg-secondary rounded-lg flex lg:flex-row flex-col items-center lg:gap-3.75 gap-2.5 w-max bottom-full right-1/2 translate-x-1/2 -translate-y-4 absolute tooltip-arrow content max-lg:opacity-0 duration-500 group-hover:bg-light wow fadeIn" data-wow-delay="1s">
                                            <div className="item-image">
                                                <Image decoding="async" placeholder="blur"  className="size-full" src={IMAGES.location1} width="90" height="100" alt="img4-contant" />
                                            </div>
                                            <div className="title-location">
                                                <span className="block text-lg font-medium text-white duration-500 group-hover:text-secondary lg:mb-4 mb-0.5"> San Francisco </span>
                                                <span className="block text-white duration-500 group-hover:text-bodycolor text-sm font-normal lg:mb-1.25 mb-0.5"> +1 234 567 8910 </span>
                                                <span className="block text-white duration-500 group-hover:text-secondary text-sm font-normal"> hello@example.com </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ct-2" className="absolute top-[28%] left-[43%] -translate-x-1/2 ct cursor-pointer group">
                                        <div className="size-3.75 bg-black duration-[all_400ms_cubic-bezier(0.39,0.58,0.57,1)_0s] rounded-full border-5 border-primary shadow-[0px_0px_30px_var(--primary)]"></div>
                                        <div className="p-2.5 lg:pe-7.5 bg-secondary  rounded-lg flex lg:flex-row flex-col items-center lg:gap-3.75 gap-2.5 w-max bottom-full right-1/2 translate-x-1/2 -translate-y-4 absolute tooltip-arrow content max-lg:opacity-0 duration-500 group-hover:bg-light wow fadeIn" data-wow-delay="1s">
                                            <div className="item-image">
                                                <Image decoding="async" placeholder="blur"  className="size-full" src={IMAGES.location2} width="90" height="100" alt="img4-contant" />
                                            </div>
                                            <div className="title-location">
                                                <span className="block text-lg font-medium text-white duration-500 group-hover:text-secondary lg:mb-4 mb-0.5"> Paris, France </span>
                                                <span className="block text-white duration-500 group-hover:text-bodycolor text-sm font-normal lg:mb-1.25 mb-0.5"> +1 234 567 8910 </span>
                                                <span className="block text-white duration-500 group-hover:text-secondary text-sm font-normal"> hello@example.com </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="ct-3" className="absolute top-[42%] left-[78%] -translate-x-1/2 ct cursor-pointer group">
                                        <div className="size-3.75 bg-black duration-[all_400ms_cubic-bezier(0.39,0.58,0.57,1)_0s] rounded-full border-5 border-primary shadow-[0px_0px_30px_var(--primary)]"></div>
                                        <div className="p-2.5 lg:pe-7.5 bg-secondary  rounded-lg flex lg:flex-row flex-col items-center lg:gap-3.75 gap-2.5 w-max bottom-full right-1/2 translate-x-1/2 -translate-y-4 absolute tooltip-arrow content max-lg:opacity-0 duration-500 group-hover:bg-light wow fadeIn" data-wow-delay="1s">
                                            <div className="item-image">
                                                <Image decoding="async" placeholder="blur"  className="size-full" src={IMAGES.location3} width="90" height="100" alt="img4-contant" />
                                            </div>
                                            <div className="title-location">
                                                <span className="block text-lg font-medium text-white duration-500 group-hover:text-secondary lg:mb-4 mb-2"> Tokyo, Japan </span>
                                                <span className="block text-white duration-500 group-hover:text-bodycolor text-sm font-normal lg:mb-5 mb-2"> +1 234 567 8910 </span>
                                                <span className="block text-white duration-500 group-hover:text-secondary text-sm font-normal"> hello@example.com </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
}