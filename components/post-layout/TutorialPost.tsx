import Image from "next/image";
import BlogDetailSection from "../BlogDetailSection";
import BlogSideBar from "../BlogSideBar";
import Link from "next/link";

type BlogProps = {
  blog: BlogItem;
};

export default function TutorialPost({ blog }: BlogProps) {
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container">
                <div className="row">
                    <BlogSideBar />
                    <div className="xl:w-3/4 w-full mb-7.5 xl:ps-12!">
                        <div className="sm:pb-7.5 pb-3.75">
                            <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl headline lg:mb-7.5 mb-2.5 uppercase headline">{blog.title}</h2>
                            <ul className="text-base font-medium uppercase mt-auto mb-5">
                                <li className="inline-block relative pe-2.5">{blog.publishedAt}</li>
                                <li className="inline-block relative ps-3.75 before:content-['/'] before:absolute before:h-full before:top-0 before:left-0">By {blog.author}</li>
                            </ul>
                            <div className="relative overflow-hidden">
                                <Image src={blog.image} alt={blog.title}  blurDataURL="/images/blur.png" className="size-full object-cover" height={934} width={525} />
                            </div>
                        </div>
                        <div className="mb-5">
                            <p className="xl:text-xl sm:text-lg text-sm font-light mb-5">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy café, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It’s the journey from inspiration to execution</p>
                            <div className="sm:px-7.5 sm:py-6 p-5 bg-light lg:mb-15 mb-7.5 rounded-2lg">
                                <div className="tutorial">
                                    <h4 className="pb-3 text-xl font-semibold">Table Off Content</h4>
                                    <ul className="sm:text-lg text-base [counter-reset:my-counter]">
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a1">Previous Studies</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a2">Key Theories</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a3">Current Trends</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a4">Research Design</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a5">Data Collection Methods</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a6">Analysis Techniques</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a7">Current Trends</Link></li>
                                        <li className="py-1.25 list-decimal! relative flex items-center gap-4 my-list-item after:flex-1 after:border-b after:border-dashed after:border-bodycolor"><Link href="#a8">Research Design</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tutorial-data">
                                <div className="scroll-mt-25" id="a1"><h4 className="text-3xl mb-5">01. Previous Studies.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a2"><h4 className="text-3xl mb-5">02. Key Theories.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a3"><h4 className="text-3xl mb-5">03. Current Trends.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a4"><h4 className="text-3xl mb-5">04. Research Design.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a5"><h4 className="text-3xl mb-5">05. Data Collection Methods.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a6"><h4 className="text-3xl mb-5">06. Analysis Techniques.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a7"><h4 className="text-3xl mb-5">07. Current Trends.</h4>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                    <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p></div>
                                    <div className="scroll-mt-25" id="a8"><h4 className="text-3xl mb-5">08. Research Design.</h4>
                                </div>

                                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Nulla facilisi. Donec sodales diam enim, a dignissim nunc facilisis nec. Pellentes tellus lorem. Phasellus ultrices consectetur magna, ut gravida arcu pulvinar sit amet. Vivamus ultrices porttitor mauris, at mattis neque elementum vel. Suspendisse magna sapien, dignissim vel tortor ut, hendrerit pellentesque velit. Mauris porttitor maximus gilla massa imperdiet in. </p>
                                <p className="xl:text-xl sm:text-lg text-sm font-light sm:mb-7.5 mb-2.5">Donec sed lacus eu massa commodo interdum non id mauris. Etiam eu dignissim elit. Nulla cursus neque adictum quam tristique ac. Pellentesque habitant morbi tristique senectus et netus lalesuada fames ac turpis egestas. Donec ornare enim felis, non faucibus eros mattis vel. Suspendisse sollicitudin, nisi non interdum pharetra, libero lectus sollicitudin est, quis imperdiet nibh nulla non metus. Fusce accumsan in leo eu porttitor. Sed eget neque aliquam sequat bibendum.</p>
                            </div>
                                <div className="lg:mb-15 mb-7.5">
                                <p className="xl:text-xl sm:text-lg text-sm font-light">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy café, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It’s the journey from inspiration to execution</p>
                            </div>
                            <BlogDetailSection />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}