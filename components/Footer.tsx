"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const images = [
  "/images/gallery/img1.png",
  "/images/gallery/img2.png",
  "/images/gallery/img3.png",
  "/images/gallery/img4.png",
  "/images/gallery/img5.png",
  "/images/gallery/img6.png",
  "/images/gallery/img7.png",
];

export default function Footer() {
  const [index, setIndex] = useState(-1);

  return (
    <footer className="bg-[#F2EFEA] overflow-hidden">
      <div className="container">
        <div className="lg:pt-30 md:pt-25 pt-20 md:pb-17.5 pb-12.5 text-center max-w-225 mx-auto">
          <h2 className="2xl:text-7xxl lg:text-6xxl md:text-5xxl sm:text-4xxl text-3xxl uppercase font-medium mb-7.5">Subscribe now for unbeatable travel offers!</h2>
          <form className="dzSubscribe style-1">
            <div className="relative flex flex-wrap items-stretch w-full mb-5 max-w-150 mx-auto">
              <input name="dzEmail" required type="email" className="relative flex-1 w-[1%] md:h-17.5 h-15 rounded-10xl text-bodycolor bg-white text-base md:pr-46.25 md:pl-7.5 py-3.75 pr-20 pl-5 z-0 placeholder:text-bodycolor" placeholder="Enter Your Email Address" />
              <div className="absolute md:right-2.5 right-1.5 top-1/2 -translate-y-1/2 z-1">
                <button name="submit" value="Submit" type="submit" aria-label="Subscribe Now" className="btn btn-primary btn-hover max-md:px-5!">
                  <span className="md:block hidden">Subscribe</span>
                  <span className="md:hidden">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
          <p className="text-sm text-secondary">We are Committed So protecting Your <Link href="/contact-us" className="font-medium">Privacy Policy</Link>.</p>
        </div>
      </div>
       <div className="overflow-hidden px-5">
          <div className="flex gap-3 animate-ticker">
          {[...images, ...images].map((src, i) => (
              <button
              key={i}
              onClick={() => setIndex(i % images.length)}
              className="rounded-2xl overflow-hidden lg:min-w-[260px] sm:min-w-[200px] min-w-[120px]"
              >
              <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
              />
              </button>
          ))}
          </div>
      </div>
      <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
          plugins={[Zoom]}
          zoom={{
              maxZoomPixelRatio: 3,
              zoomInMultiplier: 2,
              doubleTapDelay: 300,
          }}
      />
      <div className="footer-bottom">
          <div className="container relative z-1">
              <div className="py-7.5">
                  <div className="row">
                      <div className="xl:w-1/4 w-full max-xl:mb-2.5">
                          <p className="2xl:text-base text-2sm mb-0 max-xl:text-center">© Copyright <span className="current-year">2026</span> By <Link href="https://dexignzone.com" target="_blank" className="text-secondary">DexignZone</Link>.</p>
                      </div>
                      <div className="xl:w-1/2 w-full max-xl:mb-2.5 max-sm:hidden">
                          <ul className="flex items-center justify-center gap-1">
                              <li>
                                  <Link href="/home" className="2xl:px-5 px-2 py-1 text-2sm font-medium">Home</Link>
                              </li>
                              <li>
                                  <Link href="/about-us" className="2xl:px-5 px-2 py-1 text-2sm font-medium">About Us</Link>
                              </li>
                              <li>
                                  <Link href="/about-us" className="2xl:px-5 px-2 py-1 text-2sm font-medium">Destination</Link>
                              </li>
                              <li>
                                  <Link href="/tour" className="2xl:px-5 px-2 py-1 text-2sm font-medium">Package</Link>
                              </li>
                              <li>
                                  <Link href="/contact-us" className="2xl:px-5 px-2 py-1 text-2sm font-medium">Contact</Link>
                              </li>
                          </ul>
                      </div>
                      <div className="xl:w-1/4 w-full">
                          <ul className="flex items-center xl:justify-end justify-center gap-1">
                              <li>
                                  <Link rel="noopener noreferrer" target="_blank" aria-label="DexignZone on Facebook" href="https://www.facebook.com/dexignzone" className="size-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary">
                                      <i className="fa-brands fa-facebook-f"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link rel="noopener noreferrer" target="_blank" aria-label="DexignZone on twitter" href="https://twitter.com/dexignzones" className="size-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary">
                                      <i className="fa-brands fa-x-twitter"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link rel="noopener noreferrer" target="_blank" aria-label="DexignZone on instagram" href="https://www.instagram.com/dexignzone/" className="size-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary">
                                      <i className="fa-brands fa-instagram"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link rel="noopener noreferrer" target="_blank" aria-label="DexignZone on linkedin" href="https://www.linkedin.com/showcase/dexignzone" className="size-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary">
                                      <i className="fa-brands fa-linkedin-in"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link rel="noopener noreferrer" target="_blank" aria-label="DexignZone on youtube" href="https://www.youtube.com/@dexignzone" className="size-8 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary">
                                      <i className="fa-brands fa-youtube"></i>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </footer>
  );
}
