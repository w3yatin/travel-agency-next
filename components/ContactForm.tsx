"use client";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactFormProps {
  image: string | StaticImageData;
}

export default function ContactForm({ image }: ContactFormProps) {

  return (
    <section className="main-banner overflow-hidden lg:pt-36.25 pt-27.25 lg:pb-23.75 sm:pb-12.5 z-0  before:content-[''] before:absolute before:top-0 before:left-0 before:bg-light before:h-full before:w-[44%] before:-z-1 lg:before:block before:hidden">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-5">
          <div className="lg:col-span-6 col-span-12 mb-10">
            <div className="lg:w-[50vw] w-full lg:float-right relative lg:mb-25 mb-7.5 lg:pe-12.5 wow clip-right-animation" data-wow-delay="1s">
              <Image src={image} alt="Contact us" className="w-full" width={600} height={400} />
            </div>
            <div className="row">
              <div className="lg:w-[44%] sm:w-1/3 w-full max-md:mb-2.5">
                <div className="">
                  <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Send a message </h3>
                  <Link className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline" href="mailto:hello@example.com">hello@example.com</Link>
                  <Link className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline" href="mailto:hello@example.com">hello@example.com</Link>
                </div>
              </div>
              <div className="lg:w-[56%] sm:w-1/3 w-full max-md:mb-2.5">
                <div className="">
                  <h3 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Call us </h3>
                  <Link className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline" href="tel:12345678910">+1 234 567 8910</Link>
                  <Link className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline" href="tel:12345678910">+1 234 567 8910</Link>
                </div>
              </div>
              <div className="lg:w-[40%] sm:w-1/3 w-full lg:mt-14.5! max-md:mb-2.5">
                <div className="">
                  <h2 className="md:text-2xl text-xl font-semibold md:mb-5 mb-1.25"> Visit Us </h2>
                  <Link className="lg:text-lg text-base lg:text-black/60 hover:text-black block hover:underline" href="/">Chicago HQ Estica Cop. Macomb, MI 48042</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="xl:pt-12.5 2xl:ps-5">
              <div className="xl:mb-12.5 mb-5">
                <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-medium lg:mb-7.5 mb-4 headline">
                  <span className="lg:block">Get In Touch</span> & Fill Up The Form</h2>
                  <p className="lg:text-2xl text-xl font-light">Share your vision with us.</p>
              </div>
              <form className="dz-form dzForm">
                <div className="row">
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-7.5">
                      <label htmlFor="fullname" className="block text-secondary text-base mb-2.5">Full name*</label>
                      <input required type="text" name="dzName" id="fullname" placeholder="John carter" className="py-2.75 text-lg border-b-2 border-[#383B3F] placeholder:text-bodycolor h-12.5 w-full" />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-7.5">
                      <label htmlFor="emailaddress" className="block text-secondary text-base mb-2.5">Email address*</label>
                      <input required type="email" name="dzEmail" id="emailaddress" placeholder="info@example.com" className="py-2.75 text-lg border-b-2 border-[#383B3F] placeholder:text-bodycolor h-12.5 w-full" />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-7.5">
                      <label htmlFor="Phone" className="block text-secondary text-base mb-2.5">Phone*</label>
                      <input required type="number" name="dzPhoneNumber" id="Phone" placeholder="(123) 456 7890" className="py-2.75 text-lg border-b-2 border-[#383B3F] placeholder:text-bodycolor h-12.5 w-full" />
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full">
                    <div className="mb-7.5">
                      <label htmlFor="Subject" className="block text-secondary text-base mb-2.5">Subject*</label>
                      <input required type="text" name="dzOther" id="Subject" placeholder="Subject here" className="py-2.75 text-lg border-b-2 border-[#383B3F] placeholder:text-bodycolor h-12.5 w-full" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mb-10">
                      <label htmlFor="message" className="block text-secondary text-base mb-2.5">Message*</label>
                      <textarea placeholder="Write here" name="dzMessage" id="message" className="py-2.75 text-lg border-b-2 border-[#383B3F] placeholder:text-bodycolor min-h-37.5 h-full w-full"></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="input-recaptcha mb-10">
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
                      />
                      </div>
                  </div>
                  <div className="w-full">
                    <button name="submit" type="submit" className="btn btn-primary btn-hover">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
