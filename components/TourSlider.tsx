"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import tourData from "@/data/tour.json";
import Link from "next/link";
import TourCard from "./cards/TourCard";

 export default function TourSlider() {


    return(
          <section className="lg:pt-40 lg:pb-45 sm:py-25 py-18 overflow-hidden">
    <div className="container-left relative z-1">
          <div className="lg:mb-10 sm:mb-5 mb-2.5">
              <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase font-medium headline">Upcoming Trips</h2>
          </div>
          <div className="row">
              <div className="lg:w-[27%] w-full">
                  <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-black/50 max-lg:after:hidden">
                      <p className="xl:text-xl sm:text-lg text-sm font-normal lg:mb-10 sm:mb-5 mb-2.5">Exciting upcoming trips to beaches, mountains, cities, and wildlife spots. Adventure, culture, and unforgettable memories await you soon!</p>
                      <Link href="/upcoming-trips" className="btn btn-primary btn-hover">
                          <span>View All</span>
                      </Link>
                  </div>
              </div>
              <div className="lg:w-[73%] w-full">
                <Swiper
                    modules={[Autoplay]}
                    speed={1500}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        700: {
                        slidesPerView: 2,
                    },
                        1150: {
                        slidesPerView: 3,
                        },
                        1400: {
                        slidesPerView: 2.7,
                        spaceBetween: 50,
                        },
                    }}
                    className="tour-swiper"
                    >
                        {tourData.map((item, index) => (
                        <SwiperSlide key={index} >
                            <TourCard  tour={item}/>
                        </SwiperSlide>
                        ))}
                    </Swiper>
              </div>
          </div>
      </div>
</section>
    );
 }