"use client";
import { useEffect } from "react";

export default function CounterBox() {
useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>(".value");
    const speed = 200;

    const runCounter = (counter: HTMLElement) => {
      const target = Number(counter.getAttribute("data-value"));
      let current = 0;
      const increment = target / speed;

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current).toString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toString();
        }
      };

      update();
    };

    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const handleScroll = () => {
      counters.forEach((counter) => {
        if (!counter.classList.contains("counted") && isInViewport(counter)) {
          counter.classList.add("counted");
          runCounter(counter);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <section className="bg-light bg-[url('/images/background/bg3.png')] bg-blend-multiply">
            <div className="sm:py-15 py-10">
                <div className="container">
                    <div className="hidden">
                        <h2 className="xl:text-6xl md:text-5xl text-4xl">Team</h2>
                    </div>
                    <div className="grid grid-cols-12 sm:gap-5 gap-2.5 content">
                        <div className="sm:col-span-4 col-span-12">
                            <div className="lg:py-12.5 py-2.5 lg:pe-22.5 md:pe-7.5">
                                <div className="lg:mb-7.5">
                                    <span className="xl:text-12xl lg:text-10xl sm:text-7xxl text-6xl text-secondary font-light flex">
                                        <span className="value" data-value="15"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-5 my-2.5" />
                                <p className="lg:text-xl md:text-lg text-base uppercase text-secondary xl:max-w-50">Years of industry experience</p>
                            </div>
                        </div>
                        <div className="sm:col-span-4 col-span-12">
                            <div className="lg:py-12.5 py-2.5 lg:pe-22.5 md:pe-7.5">
                                <div className="lg:mb-7.5">
                                    <span className="xl:text-12xl lg:text-10xl sm:text-7xxl text-6xl text-secondary font-light flex">
                                        <span className="value" data-value="20"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-5 my-2.5" /> 
                                <p className="lg:text-xl md:text-lg text-base uppercase text-secondary xl:max-w-50">brands elevated last year</p>
                            </div>
                        </div>
                        <div className="sm:col-span-4 col-span-12">
                            <div className="lg:py-12.5 py-2.5 lg:pe-22.5 md:pe-7.5">
                                <div className="lg:mb-7.5">
                                    <span className="xl:text-12xl lg:text-10xl sm:text-7xxl text-6xl text-secondary font-light flex">
                                        <span className="value" data-value="90"></span>
                                        <span>+</span>
                                    </span>
                                </div>
                                <hr className="border-t border-secondary sm:my-5 my-2.5" />
                                <p className="lg:text-xl md:text-lg text-base uppercase text-secondary xl:max-w-50">Percent clarity in every project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}