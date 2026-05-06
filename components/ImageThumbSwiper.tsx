"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import { IMAGES } from "@/utilities/Constants";

export default function ImageThumbSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return(
        <div className="relative overflow-hidden">
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                className="swiper galley-swiper"
            >
                <SwiperSlide>
                    <Image  src={IMAGES.galleryslider1} className="w-full" alt="pic1" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  src={IMAGES.galleryslider2} className="w-full" alt="pic2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  src={IMAGES.galleryslider3} className="w-full" alt="pic3" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image  src={IMAGES.galleryslider4} className="w-full" alt="pic4" />
                </SwiperSlide>
            </Swiper>

                  <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Thumbs]}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress
                    className="swiper galley-thumb-swiper mt-3 mb-5"
                  >
                    <SwiperSlide>
                      <Image  src={IMAGES.gallerysliderthumbs1} className="w-full" alt="pic1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image  src={IMAGES.gallerysliderthumbs2} className="w-full" alt="pic2" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <Image  src={IMAGES.gallerysliderthumbs3} className="w-full" alt="pic3" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image  src={IMAGES.gallerysliderthumbs4} className="w-full" alt="pic4" />
                    </SwiperSlide>
                  </Swiper>
            </div>
    );
}