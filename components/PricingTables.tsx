"use client";
import pricingData from "@/data/pricing.json";
import Link from "next/link";
import { useState } from "react";

export default function PricingTable() {
    const [activeIndex, setActiveIndex] = useState(2);
    return(
        <section className="hover-wrapper">
            <div className="2xl:py-31.5 pt-15 pb-0 border-b border-black/20">
                <div className="container">
                    <div className="xl:mb-26.5 sm:mb-12.5 mb-5 text-center">
                        <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold headline mx-auto xl:max-w-260 max-w-190">
                            Transparent Pricing for Tailored Digital Solutions
                        </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-5 box-hover-wrapper">
                        {pricingData.map((item, index) => (
						<div key={index} className="xl:col-span-3 sm:col-span-6 col-span-12">
							<div  className={`pricing-wrapper box-hover [.pricing-wrapper.active]:bg-primary [.pricing-wrapper.active]:-translate-y-7.5 duration-500 relative z-2 ${
									activeIndex === index ? "active" : ""
								}`}
								onMouseEnter={() => setActiveIndex(index)}
								>
								<div className="pt-6 ps-10 pe-3.5">
									<div className="mb-5">
										<h3 className="text-5xxl">{item.price}<span className="text-bodycolor text-lg font-normal font-base">/month</span></h3>
									</div>
									<h4 className="text-2xxl font-medium mb-2">{item.title}</h4>
									<p className="mb-5 font-normal text-base">{item.desc}</p>
									<ul className="list-items">
										{item.services.map((service, i) => (
											<li className="relative py-1.5 ps-7.5 before:content-['\f00c'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-5 before:leading-5 before:text-center before:text-secondary before:text-xs before:rounded-full before:font-black before:font-['Font_Awesome_6_Free'] before:bg-primary [.pricing-wrapper.active_&]:text-secondary [.pricing-wrapper.active_&]:before:bg-black/10" key={i}>
												{service}
											</li>
										))}
									</ul>
								</div>
                                <div className="p-10">
                                    <button type="button" className="btn btn-primary btn-hover light w-full justify-center [.pricing-wrapper.active_&]:bg-secondary! [.pricing-wrapper.active_&]:text-white! group">
                                        <span className="group-hover:text-secondary">Choose plan</span>
                                    </button>
                                </div>
								<span className="absolute -top-2.5 right-px py-2 px-4 text-xs/[1] font-semibold bg-secondary text-white hidden [.pricing-wrapper.active_&]:block">{item.badge}</span>
							</div>
						</div>
						))}
                    </div>
                </div>
            </div>
        </section>
    );
}