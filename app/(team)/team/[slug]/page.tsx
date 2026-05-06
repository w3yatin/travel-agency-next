import teamData from "@/data/team.json";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/utilities/Constants";
import TeamSwiper from "@/components/TeamSwiper";
import ServiceSection from "@/components/ServiceSection";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const team = (teamData as TeamItem[]).find((item) => item.slug === slug);

  if (!team) {
    return <div>Team not found</div>;
}
  
    return (
        <>
            <section className="relative z-10">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-6 col-span-12 xl:mr-20 max-xl:mb-3 mb-12">
                            <div className="sticky !top-30">
                                <Image loading="lazy" className="size-full rounded-xl" src={team.img} alt={team.name} height={560} width={662} />
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="pxl-heading-scroll-effect">
                                <h2 className="xxl:text-7xl/75 md:text-6xl/70 sm:text-4.5xl text-3xl font-semibold text-secondary capitalize heading-text">
                                   {team.name}
                                </h2>
                                <span className="text-textlight  text-lg">{team.position}</span>
                                <p className="text-lg/8 item-des mt-2">{team.description}</p>
                                <div className="xl:mt-5">
                                    <span className="text-base  font-medium uppercase">FOLLOW ME</span>
                                    <div className="flex items-center text-sm  gap-8">
                                        <Link href="https://www.linkedin.com/showcase/dexignzone/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
                                        <Link href="https://x.com/dexignzones" target="_blank"><i className="fa-brands fa-x-twitter"></i></Link>
                                        <Link href="https://dribbble.com/dexignzone" target="_blank"><i className="fa-brands fa-dribbble" ></i></Link>
                                        <Link href="https://www.facebook.com/dexignzone/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link href="https://www.behance.net/dexignzone" target="_blank"><i className="fa-brands fa-behance"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:my-10 my-40">
                                <h5 className="text-2xl  font-semibold mb-7">Experience</h5>
                                <ul className="">
                                    <li className="flex items-center gap-x-15 mb-3">
                                        <span className="text-sm font-normal text-[#999] after:bg-black/20 after:size-2 after:rounded-full after:absolute after:mx-5 after:top-2 after:-right-15 relative">2019–2026</span>
                                        <p className="text-base font-normal">Senior Web Designer – Creative Studio</p>
                                    </li>
                                    <li className="flex items-center gap-x-15 mb-3">
                                        <span className="text-sm font-normal text-[#999] after:bg-black/20 after:size-2 after:rounded-full after:absolute after:mx-5 after:top-2 after:-right-15 relative">2019–2026</span>
                                        <p className="text-base font-normal">Design Research Assistant – University of St.Gallen</p>
                                    </li>
                                    <li className="flex items-center gap-x-15 mb-3">
                                        <span className="text-sm font-normal text-[#999] after:bg-black/20 after:size-2 after:rounded-full after:absolute after:mx-5 after:top-2 after:-right-15 relative">2019–2026</span>
                                        <p className="text-base font-normal">Bachelor’s in Digital Media & Design – Corporate Design</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:mb-6 mb-40">
                                <h5 className="text-2xl  font-semibold mb-8">Awards</h5>
                                <div className="grid grid-cols-12 gap-15">
                                    <div className="md:col-span-6 col-span-12">
                                        <div className="p-10 bg-black/10 text-center group hover:bg-primary duration-500">
                                            <ul className="flex items-center justify-center text-base font-medium  group-hover:text-black   text-center duration-500">
                                                <li>2026</li>
                                                <li className="size-2 rounded-full bg-black/40 mx-3 duration-500"></li>
                                                <li>Nominee</li>
                                            </ul>
                                            <div className="py-11 flex justify-center">
                                                <div className="size-27 group-hover:bg-black bg-black rounded-full flex items-center justify-center duration-500">
                                                    <svg className="group-hover:fill-white fill-white" width="61" height="32" viewBox="0 0 61 32" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M36.9394 0L31.3122 21.656L26.0001 0H18.7508L13.4367 21.656L7.81348 0H0L10.062 31.5454H16.9379L22.3744 11.1402L27.813 31.5454H34.6889L44.7489 0H36.9354H36.9394ZM49.7277 26.6636C49.7277 29.6681 51.9761 31.9205 54.9775 31.9205C57.9768 31.9205 60.2273 29.6661 60.2273 26.6636C60.2273 23.659 57.9788 21.4047 54.9775 21.4047C51.9761 21.4047 49.7277 23.659 49.7277 26.6636Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="group-hover:text-black  duration-500 text-2xl font-medium">UX Design Awards</h3>
                                            <span className="text-sm font-medium  group-hover:text-black   duration-500">Awwwards</span>												
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12">
                                        <div className="p-10 bg-black/10 text-center group hover:bg-primary duration-500">
                                            <ul className="flex items-center justify-center text-base font-medium  group-hover:text-black  text-center duration-500">
                                                <li>2026</li>
                                                <li className="size-2 rounded-full bg-black/40 mx-3 duration-500"></li>
                                                <li>Winner</li>
                                            </ul>
                                            <div className="py-11 flex justify-center">
                                                <div className="size-27 group-hover:bg-black bg-black rounded-full flex items-center justify-center duration-500">
                                                    <svg className="group-hover:fill-white fill-white" width="65" height="40" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 8.91935V17.8763L8.46774 26.3441L16.9355 34.8118L8.46774 43.2796L0 51.7473V60.8548V70H8.95699H17.8763L23.7097 64.1667L29.543 58.3333L26.7957 55.6237L24.086 52.8763L19.2688 57.6935L14.4892 62.4731H10.9892H7.52688V58.7849V55.1344L23.8978 38.7634L40.2688 22.3925L29.0914 11.215L17.8763 0H8.95699H0V8.91935ZM22.3172 14.9785L29.7312 22.3925L26.1559 25.9677L22.5806 29.543L15.0538 22.0161L7.52688 14.4892V11.0269V7.52688H11.2151H14.8656L22.3172 14.9785Z"/>
                                                    <path d="M45.9893 5.75806L40.2688 11.4785L43.0161 14.2258L45.7258 16.9355L50.4301 12.2312L55.1344 7.52688H58.5968H62.0968V11.215V14.8656L45.914 31.0484C37.0323 39.9301 29.7312 47.3817 29.7312 47.6075C29.7312 47.8333 34.6989 52.9516 40.7581 59.0108L51.7473 70H60.8925H70V61.0806V52.1237L61.457 43.5806L52.8764 35L61.457 26.4194L70 17.8763V8.91935V0H60.8549H51.7473L45.9893 5.75806ZM55.0215 48.0591L62.4731 55.5108V58.9731V62.4731H58.7473H55.0215L47.7581 54.9086L40.5323 47.3817L43.8817 43.9946C45.7258 42.1505 47.3065 40.6452 47.4194 40.6452C47.5323 40.6452 50.957 43.9946 55.0215 48.0591Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <h3 className="group-hover:text-black  duration-500 text-2xl font-medium">Systems Design</h3>
                                            <span className="text-sm font-medium  group-hover:text-black  duration-500">Interaction Awards</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TeamSwiper />
                            <div className="grid grid-cols-12 gap-5 xl:mb-20 mb-40">
                                <div className="col-span-12">
                                    <div className="flex justify-between mb-8 items-center">
                                        <h5 className="text-2xl  font-semibold">Work</h5>
                                       
                                         <Link className="btn btn-primary btn-hover" href="/">
                                            View
                                            </Link>
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="group mb-3">
                                        <Image loading="lazy" className="mb-5 w-full" src={IMAGES.work} alt="Work Image" height={400} width={312} />
                                        <div className="flex items-center justify-between">
                                            <h5 className=" font-medium text-xl">Dynamic E-Commerce Platform</h5>
                                            <Link href="/" className="size-15 min-w-15 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                                                <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>	
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="group mb-3">
                                        <Image loading="lazy" className="mb-5 w-full" src={IMAGES.work2} alt="Work Image" height={400} width={312} />
                                        <div className="flex items-center justify-between">
                                            <h5 className=" font-medium text-xl">Scalable Web Commerce Solution</h5>
                                            <Link href="/" className="size-15 min-w-15 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                                                <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>	
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="group mb-3">
                                        <Image loading="lazy" className="mb-5 w-full" src={IMAGES.work3} alt="Work Image" height={400} width={312} />
                                        <div className="flex items-center justify-between">
                                            <h5 className=" font-medium text-xl">Powerful Digital Storefront</h5>
                                            <Link href="/" className="size-15 min-w-15 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                                                <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>	
                                    </div>
                                </div>
                                <div className="md:col-span-6 col-span-12">
                                    <div className="group mb-3">
                                        <Image loading="lazy" className="mb-5 w-full" src={IMAGES.work4} alt="Work Image" height={400} width={312} />
                                        <div className="flex items-center justify-between">
                                            <h5 className=" font-medium text-xl">Customizable Product Marketplace</h5>
                                            <Link href="/" className="size-15 min-w-15 flex items-center justify-center rounded-full bg-primary transform -translate-x-full rotate-[-360deg] sm:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden max-sm:hidden group/second">
                                                <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 xl:mb-30 mb-40">
                                <div className="col-span-12"><h5 className="text-2xl  font-semibold mb-8">Contact Us</h5></div>
                                <div className="col-span-12">
                                    <form>
                                        <div className="grid grid-cols-12 gap-x-16">
                                            <div className="lg:col-span-6 col-span-12">
                                                <label htmlFor="fullname" className="block text-label font-normal mb-3  text-black">Full name*</label>
                                                <input id="fullname" className="w-full h-12 mr-16 mb-6 py-4 px-5 outline-none bg-black/10 text-base font-medium  text-black" type="text" name="dzName" placeholder="John carter" />
                                            </div>
                                            <div className="lg:col-span-6 col-span-12">
                                                <label htmlFor="email" className="block text-label font-normal mb-3  text-black">Email address*</label>
                                                <input id="email" className="w-full h-12 mr-16 mb-6 py-4 px-5 outline-none bg-black/10 text-base font-medium  text-black" type="email" name="dzEmail" placeholder="info@example.com" />
                                            </div>
                                            <div className="col-span-12">
                                                <label htmlFor="website" className="block text-label font-normal mb-3  text-black">Website link</label>
                                                <input id="website" className="w-full h-12 mr-16 mb-6 py-4 px-5 outline-none bg-black/10 text-base font-medium  text-black" type="text" name="link" placeholder="https://www.com" />
                                            </div>
                                            <div className="col-span-12">
                                                <label htmlFor="help" className="block text-label font-normal mb-3  text-black">How Can We Help You*</label>
                                                <textarea id="help" name="dzMessage" required placeholder="Write A Message..." className="w-full h-45 py-4 px-5 outline-none  bg-black/10 text-base font-medium  text-black mb-6"></textarea>		
                                            </div>
                                            <div className="col-span-12">
                                               <Link className="btn btn-primary btn-hover" href="/book-now"><span>Submit</span></Link>
                                            </div>	
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="md:col-span-6 col-span-12">
            <ServiceSection  />
            </div>
        </>
    );
}