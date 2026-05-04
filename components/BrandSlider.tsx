"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
const brandLogos = [
  {
    src: "/images/logo/awwards.png",
    width: 219,
    height: 36,
  },
  {
    src: "/images/logo/colorlib.png",
    width: 151,
    height: 39,
  },
  {
    src: "/images/logo/envato.png",
    width: 175,
    height: 39,
  },
  {
    src: "/images/logo/fwa.png",
    width: 128,
    height: 39,
  },
    {
    src: "/images/logo/awwards.png",
    width: 219,
    height: 36,
  },
  {
    src: "/images/logo/colorlib.png",
    width: 151,
    height: 39,
  },
  {
    src: "/images/logo/envato.png",
    width: 175,
    height: 39,
  },
  {
    src: "/images/logo/fwa.png",
    width: 128,
    height: 39,
  },
];

export default function BrandSlider() {
    return(
        <section className="pb-27.5">
            <div className="container">
                <div className="py-7.5">
                    <div className="grid grid-cols-12 gap-5 items-center">
                        <div className="lg:col-span-3 col-span-12 lg:mb-0 sm:mb-7.5 mb-2.5">
                            <div className="xl:pe-18.5">
                                <h3 className="text-2xxl font-medium">
                                    Trusted by industry leaders for 20 years
                                </h3>
                            </div>
                        </div>
                        <div className="lg:col-span-9 col-span-12">
                            <Swiper
                                modules={[Autoplay]}
                                speed={1500}
                                spaceBetween={30}
                                slidesPerView={4}
                                loop={true}
                                autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                }}
                                breakpoints={{
                                300: { slidesPerView: 1 },
                                360: { slidesPerView: 2 },
                                767: { slidesPerView: 3 },
                                991: { slidesPerView: 4 },
                                }}
                            >
                                {brandLogos.map((logo, index) => (
                                    <SwiperSlide key={index} className=" lg:text-end">
                                        <Image
                                            src={logo}
                                            alt={`brand-${index}`}
                                            width={logo.width}
                                            height={logo.height}
                                            className="block"
                                            placeholder="blur"
                                             blurDataURL="/images/blur.png"
                                            />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}