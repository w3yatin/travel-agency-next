"use client";
import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {

  return (
    <div className="h-screen bg-no-repeat bg-center bg-cover after:absolute after:inset-0 after:bg-black/20" style={{backgroundImage: `url(/images/background/bg6.png)`}}>
      <div className="relative z-1 flex flex-col h-full">
        <div className="lg:py-7.5 py-5 lg:px-20 sm:px-10 px-4 w-full">
          <div className="w-45">
            <Link href="/home"><Image src={IMAGES.logowhite} alt="Plexify logo" width={180} height={40} /></Link>
          </div>
        </div>
        <div className="text-center flex-1 flex flex-col justify-center sm:p-5 p-4 max-w-250 mx-auto">
          <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase text-white lg:mb-5 mb-2.5">Our website is under construction</h2>
          <p className="sm:text-lg text-base font-normal text-white mx-auto max-w-165 lg:mb-7.5 mb-5">Big things are coming! Plexify will be opening its doors soon. Be the first to experience something special!</p>
          <form className="dzSubscribe style-1">
            <div className="relative flex flex-wrap items-stretch w-full mb-5 max-w-137 mx-auto">
              <input name="dzEmail" required type="email" className="relative flex-1 w-[1%] h-15 rounded-10xl text-bodycolor bg-white text-base md:pr-46.25 md:pl-7.5 py-3.75 pr-20 pl-5 z-0 placeholder:text-bodycolor" placeholder="Enter Your Email Address" />
              <div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                <button name="submit" value="Submit" type="submit" aria-label="Subscribe Now" className="btn btn-primary btn-hover max-md:px-5!">
                  <span className="md:block hidden">Subscribe</span>
                  <span className="md:hidden">
                    <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer-bottom">
          <div className="container relative z-1">
            <div className="py-5 text-center">
              <div className="row">
                <div className="w-full">
                  <p className="text-base text-white mb-0">© Copyright <span className="current-year">2026</span> By <Link href="https://themeforest.net/user/dexignzone" target="_blank" className="font-semibold">DexignZone</Link>. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
