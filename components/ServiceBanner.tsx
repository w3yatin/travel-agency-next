import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function ServiceBanner() {
    return(
        <section className="main-banner overflow-hidden lg:pt-50 pt-30 z-0 h-auto">
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-5 lg:mb-20 mb-12.5">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="xl:pe-12.5 mb-6">
                            <h2 className="2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold headline">Service we offer is 
                                specifically designed to meet your needs.</h2>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12 wow fadeInRight" data-wow-delay="1s">
                        <div className="flex items-center gap-3.5">
                            <div>
                                <Image src={IMAGES.avatar1} alt="Client avatar" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                <Image src={IMAGES.avatar2} alt="Client avatar" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                                <Image src={IMAGES.avatar3} alt="Client avatar" className="inline-block sm:size-15 size-10 -me-3.25 last:me-0 rounded-full border-2 border-white relative object-cover duration-500 hover:z-1" />
                            </div>
                            <div>
                                <span className="xl:text-xl sm:text-lg text-sm text-secondary block font-light"><strong className="font-bold">2.5k</strong> client in</span>
                                <span className="xl:text-xl sm:text-lg text-sm text-secondary block font-light">the world</span>
                            </div>
                        </div>
                        <hr className="border-t border-black/20 lg:my-7.5 my-5" />
                        <p className="xl:text-xl sm:text-lg text-sm font-normal">With Benefits from web design agecny, Earn rewards & Score discounts on purchases* Foryourself and your customers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}