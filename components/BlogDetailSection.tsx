import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";


export default function BlogDetailSection() {
    return(
        <>
            <div className="lg:mb-15 mb-7.5">
                <h4 className="text-3xl mb-5">The Power of Inspiration</h4>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Every design begins with inspiration—a spark that ignites creativity. Inspiration can come from anywhere:</p>
                <ul className="xl:text-xl sm:text-lg text-sm font-light mb-7.5">
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5">A walk through nature, observing <span className="border-b border-secondary">patterns and textures.</span></li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5">Art, architecture, or cultural motifs that speak to a designer’s soul.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5">Everyday problems that demand innovative solutions.</li>
                </ul>
                <p className="xl:text-xl sm:text-lg text-sm font-light">For example, the minimalist trend in modern design often draws from natural simplicity and functionality, showing how external influences shape creative thought. The key is to remain curious, open, and receptive to the world around you.</p>
            </div>
            <div className="lg:mb-15 mb-7.5">
                <h4 className="text-3xl mb-5">Execution: Where Ideas Meet Reality</h4>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Inspiration, while essential, is just the beginning. The real challenge lies in execution—translating ideas into functional and impactful designs. Here are some critical steps:</p>
                <ul className="xl:text-xl sm:text-lg text-sm font-light mb-7.5">
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5"><strong className="font-medium text-secondary">Research and Empathy:</strong> Understanding the audience or user is vital. A great design resonates because it meets specific needs or solves problems effectively.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5"><strong className="font-medium text-secondary">Iteration and Prototyping:</strong> Rarely does the first draft become the final masterpiece. Testing and refining ideas ensure a design is practical and user-friendly.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5"><strong className="font-medium text-secondary">Balancing Form and Function:</strong> Aesthetic appeal should never overshadow usability. The best designs seamlessly blend beauty with purpose.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary pb-2.5"><strong className="font-medium text-secondary">Collaboration and Feedback:</strong> Collaboration among designers, stakeholders, and end-users ensures the design aligns with its goals. Constructive feedback is the compass for improvement.</li>
                </ul>
            </div>
            <div className="lg:mb-15 mb-7.5">
                <div className="group dz-hover-item relative">
                    <a className="dz-hover-img rounded-2lg relative" data-displacement="assets/images/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                        <Image src={IMAGES.blogdetail2}alt="img" />
                    </a>
                </div>
            </div>
            <div className="lg:mb-15 mb-7.5">
                <h4 className="text-3xl mb-5">Why Design Matters</h4>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">In a world that values innovation, good design isn’t optional—it’s transformative. Thoughtful design can:</p>
                <ul className="xl:text-xl sm:text-lg text-sm font-light mb-7.5">
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary">Enhance user experiences, making life simpler and more enjoyable.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary">Solve complex challenges, from urban planning to sustainable living.</li>
                    <li className="xl:text-xl sm:text-lg text-sm ps-8.75 relative before:absolute before:left-3.5 before:top-3 before:size-1.5 before:rounded-full before:bg-secondary">Inspire emotions and connections, whether through branding, art, or architecture.</li>
                </ul>
                <p className="xl:text-xl sm:text-lg text-sm font-light">As we continue to integrate design into every aspect of life, the line between inspiration and execution grows thinner. Designers are not just creators; they are problem-solvers, visionaries, and change-makers.</p>
            </div>
            <div className="lg:mb-15 mb-7.5">
                <h4 className="text-3xl mb-5">Conclusion</h4>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Design matters because it shapes our environment, influences behavior, and drives progress. The journey from inspiration to execution is not just about creating something beautiful—it&apos;s about creating something meaningful.</p>
                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">So, whether you&apos;re a designer or someone who appreciates design, remember: the magic lies in the process. Every great design starts with a spark and becomes impactful through thoughtful execution.</p>
                <span className="text-[19px] text-black/90">What inspires your creativity? Share your thoughts in the comments below!</span>
            </div>
            <div className="mb-7.5">
                <ul className="relative before:absolute before:top-0 before:left-0 before:h-px before:w-full before:bg-black/10">
                    <li className="inline-block px-2.25 sm:px-3.25 sm:py-6 py-3 first:ps-0">Tags:</li>
                    <li className="inline-block text-secondary px-2.25 sm:px-3.25 sm:py-6 py-3 first:ps-0">Business</li>
                    <li className="inline-block text-secondary px-2.25 sm:px-3.25 sm:py-6 py-3 first:ps-0">Startups</li>
                    <li className="inline-block text-secondary px-2.25 sm:px-3.25 sm:py-6 py-3 first:ps-0">Marketing</li>
                </ul>
            </div>
            <div className="bg-[#FAFAFA] sm:p-12.5 sm:pt-10 p-5">
                <div className="lg:mb-15 mb-7.5">
                    <h3 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl headline mb-5">Leave a Reply</h3>
                    <p className="xl:text-xl sm:text-lg text-sm font-normal">Your email address will not be published. Required fields are marked *</p>
                </div>
                <form action="#">
                    <div className="grid grid-cols-12 sm:gap-5">
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-7.5">
                                <label htmlFor="fullname" className="block text-secondary mb-2.5">Full name*</label>
                                <input type="text" name="fullname" id="fullname" placeholder="John carter" className="py-2.75 text-lg border-b-2 border-[#383B3F] font-normal h-12.5 w-full" />
                            </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                            <div className="mb-7.5">
                                <label htmlFor="emailaddress1" className="block text-secondary mb-2.5">Email address*</label>
                                <input type="email" name="emailaddress1" id="emailaddress1" placeholder="info@example.com" className="py-2.75 text-lg border-b-2 border-[#383B3F] font-normal h-12.5 w-full" />

                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="mb-10">
                                <label htmlFor="Comments" className="block text-secondary mb-2.5">Comments*</label>
                                <textarea placeholder="Write here" name="Comments" id="Comments" className="py-2.75 text-lg border-b-2 border-[#383B3F] font-normal min-h-50 h-full w-full"></textarea>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <button name="submit" type="submit" value="Submit" className="btn btn-primary btn-hover">
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}