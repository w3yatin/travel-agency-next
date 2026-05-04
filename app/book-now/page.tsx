import CustomDropdown from "@/components/CustomDropdown";

export default function BookNowPage() {
    return(
        <div className="sm:h-screen h-full overflow-auto bg-no-repeat bg-center flex justify-center items-center bg-cover after:absolute after:inset-0 after:bg-white/10 after:backdrop-blur-sm" style={{backgroundImage: `url(/images/background/bg4.png)`}}>
            <div className="relative z-1 bg-white rounded-2xl sm:p-10 sm:pb-14.5 px-5 py-7.5 w-full max-w-181.25 m-4">
                <div className="mb-7.5">
                    <h3 className="xl:text-[38px] lg:text-4xxl sm:text-4xl text-3xl font-bold leading-none headline mb-5">Booking for a Grand World Tour</h3>
                </div>
                <form action="#">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-1.25">
                                <label htmlFor="fullname" className="block sm:text-lg text-base mb-1.5">Name*</label>
                                <input type="text" name="fullname" id="fullname" placeholder="Your name..." className="py-2.5 px-3.5 text-lg bg-black/5 rounded-lg font-normal h-11.25 w-full" />
                            </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-1.25">
                                <label htmlFor="phonenumber" className="block sm:text-lg text-base mb-1.5">Phone*</label>
                                <input type="number" name="phonenumber" id="phonenumber" placeholder="Phone..." className="py-2.5 px-3.5 text-lg bg-black/5 rounded-lg font-normal h-11.25 w-full" />
                            </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-1.25">
                                <label htmlFor="emailaddress1" className="block sm:text-lg text-base mb-1.5">Email Address*</label>
                                <input type="email" name="emailaddress1" id="emailaddress1" placeholder="Email..." className="py-2.5 px-3.5 text-lg bg-black/5 rounded-lg font-normal h-11.25 w-full" />
                            </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-1.25">
                                <label htmlFor="Destination" className="block sm:text-lg text-base mb-1.5">Destination*</label>
                                <div className="relative custom-select">
                                    <div>
                                        <CustomDropdown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="mb-4.5">
                                <label htmlFor="Comments" className="block text-lg mb-1.5">Message*</label>
                                <textarea placeholder="Write your message..." name="Comments" id="Comments" className="py-2.5 px-3.5 text-lg bg-black/5 rounded-lg font-normal min-h-50 size-full"></textarea>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-hover w-full justify-center">
                                <span>Submit Now</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}