import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function ContentBox3() {
    return(
        <section id="Comprehensive">
            <div className="lg:pt-7.5 xl:pb-37.5 py-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5 items-center">
                        <div className="lg:col-span-4 col-span-12">
                            <div className="group dz-hover-item relative mb-5 overflow-hidden">
                                <a className="dz-hover-img relative" data-displacement="assets/images/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                                    <Image src={IMAGES.servicedetail1} alt="img" placeholder="blur" className="clip-right-animation wow size-full object-cover" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:col-span-8 col-span-12">
                            <div className="xl:px-28.5 sm:px-7.5 sm:py-5">
                                <h2 className="lg:text-5xl sm:text-4xl text-3xl font-semibold headline sm:mb-6.25 mb-2.5">Comprehensive Digital Marketing Services for Your Brand</h2>
                                <p className="xl:text-xl sm:text-lg text-sm">In today’s fast-paced digital world, having a strong online presence is no longer optional—it’s essential. Whether you’re a small business looking to grow or an established company aiming to scale, our digital marketing services are tailored to meet your unique needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}