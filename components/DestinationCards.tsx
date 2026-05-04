"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const destinations = [
  {
    title: "Masai Mara National Reserve",
    location: "Kenya, East Africa",
    image: IMAGES.destination1,
    link: "/tour/island-wilderness",
    active: true,
  },
  {
    title: "Ubud, Bali",
    location: "Indonesia",
    image: IMAGES.destination2,
    link: "/tour/amazon-deep-forest-expedition",
  },
  {
    title: "Queenstown",
    location: "New Zealand (South Island)",
    image: IMAGES.destination3,
    link: "/tour/dunes-desert-tracks",
  },
  {
    title: "Koh Lanta",
    location: "Thailand (Krabi Province)", 
    image: IMAGES.destination4,
    link: "/tour/himalayan-snow-leopard-quest",
  },
];

export default function DestinationCards() {
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <section className="destination-section lg:py-37.5 sm:py-25 py-18 relative overflow-hidden before:absolute before:inset-0 before:bg-black/50 before:z-1">
            <div
                className="absolute inset-0 transition-all duration-500 bg-cover bg-center"
                style={{
                backgroundImage: `url(${destinations[activeIndex].image.src})`,
                }}
            />
            <div className="container relative z-1">
                <div className="xl:mb-10 sm:mb-5 mb-2.5">
                    <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase text-white">Destinations</h2>
                </div>
                <div className="row">
                    <div className="xl:w-1/3 w-full">
                        <div className="mb-10 relative after:absolute after:top-full after:right-[20%] after:w-px xl:after:h-100 after:h-60 after:bg-white/50 max-xl:after:hidden">
                            <p className="xl:text-xl sm:text-lg text-sm font-medium text-white lg:mb-10 sm:mb-5 mb-2.5">Experience the Perfect Blend of Comfort and Nature, Crafted for Your Ultimate Escape.</p>
                            <Link href="/tour" className="btn btn-primary btn-hover light">
                                <span>View All</span>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-2/3 w-full">
                        <div className="grid grid-cols-12 gap-5">
                            
                            {destinations.map((item, i) => (
                            <div key={i} className="md:col-span-6 col-span-12">
                                <div
                                    data-img={item.image.src}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    className={` relative destination-card ${
                                    activeIndex === i ? "active" : ""
                                    }`}
                                    >
                                <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                                    <Image src={item.image} alt="/" placeholder="blur" className="size-full object-cover" />
                                </div>

                                <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                                    <div className="flex-1">
                                    <h3 className="text-2xl font-medium text-white max-w-50 uppercase mb-2.5">
                                        {item.title}
                                    </h3>
                                    <span className="text-sm font-semibold uppercase text-white/50 duration-500 [.destination-card.active_&]:text-primary">
                                        {item.location}
                                    </span>
                                    </div>

                                    <div>
                                    <Link
                                        href={item.link}
                                        aria-label="View trip details"
                                        className="size-12.5 flex items-center justify-center rounded-full bg-primary transform xl:-translate-x-full xl:rotate-[-360deg] xl:opacity-0 [.destination-card.active_&]:translate-x-0 [.destination-card.active_&]:rotate-0 [.destination-card.active_&]:opacity-100"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M5 12H19"
                                            stroke="black"
                                            strokeWidth="1.5"
                                        />
                                        <path
                                            d="M12 5L19 12L12 19"
                                            stroke="black"
                                            strokeWidth="1.5"
                                        />
                                        </svg>
                                    </Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}