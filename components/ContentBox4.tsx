import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function ContentBox4() {
    return(
        <section id="Process" className ="border-b dark:border-white/20 border-black/20">
            <div className ="xl:pt-37.5 lg:py-20 py-10">
                <div className ="container">
                    <div className ="grid grid-cols-12 gap-5">
                        <div className ="lg:col-span-8 col-span-12">
                            <div className ="sm:mb-10 mb-5 xl:max-w-170">
                                <h2 className ="lg:text-5xl sm:text-4xl text-3xl font-semibold headline mb-7.5">Ready to Take Your Digital Presence to the Next Level?</h2>
                                <p className ="xl:text-xl sm:text-lg text-sm">Our team of experts is here to help you navigate the digital landscape with tailored strategies that deliver measurable results. Contact us today to discuss your goals and start growing your business!</p>
                            </div>
                            <ul className ="flex flex-wrap items-center">
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Email Marketing</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Search Engine Optimization (SEO)</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Website Design and Development</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Pay-Per-Click Advertising (PPC)</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Online Reputation Management (ORM)</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Social Media Marketing</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Analytics and Reporting</li>
                                <li className ="sm:w-1/2 w-full relative py-1.5 ps-9.5 sm:text-lg text-base before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-6 before:leading-6 before:text-center before:text-sm before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:text-secondary before:bg-primary">Content Marketing</li>
                            </ul>
                        </div>
                        <div className ="lg:col-span-4 col-span-12">
                            <div className ="group dz-hover-item relative mb-5 overflow-hidden">
                                <a className ="dz-hover-img relative" data-displacement="assets/images/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                    <Image src={IMAGES.servicedetail2} alt="img" placeholder="blur" className ="wow clip-left-animation size-full object-cover" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}