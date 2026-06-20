import Link from "next/link";
import BlogDetailSection from "../BlogDetailSection";
import RelatedArticles from "../RealtedArticles";

type BlogProps = {
  blog: BlogItem;
};

export default function HeaderImage({ blog }: BlogProps) {
    return(
        <>
        <div className="p-0">
            <div className="xl:min-h-175 md:min-h-150 min-h-120 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-linear-to-t before:from-black/70 before:to-black-0" style={{backgroundImage:`url(/images/banner/bnr2.png)`}}>
                <div className="relative z-1 table h-full max-w-231">
                    <div className="sm:px-20 px-5 sm:py-15 py-10 table-cell align-bottom xl:h-175 md:h-150 h-120 text-start">
                        <ul className="md:text-2xl sm:text-xl text-lg font-medium uppercase mt-auto sm:mb-5 mb-2.5 text-white">
                            <li className="inline-block relative pe-2.5">{blog.publishedAt}</li>
                            <li className="inline-block relative ps-3.75 before:content-['/'] before:absolute before:h-full before:top-0 before:left-0">By {blog.author}</li>
                        </ul>
                        <h1 className="lg:text-8xl sm:text-6xl text-4xl text-white">{blog.title}</h1>
                    </div>
                </div>
            </div>
            <div className="container relative flex xl:pt-26.5 sm:pt-15 sm:pb-20 py-7.5">
                <div className="w-25 lg:block hidden">
                    <div className="sticky top-[20%]">
                        <span className="text-sm font-normal">Share Post</span>
                        <ul className="mt-3.5">
                            <li className="pb-3.5">
                                <Link href="https://www.instagram.com/dexignzone/" className="text-base uppercase text-secondary font-title link-hover">Instagram</Link>
                            </li>
                            <li className="pb-3.5">
                                <Link href="https://www.facebook.com/dexignzone" className="text-base uppercase text-secondary font-title link-hover">Facebook</Link>
                            </li>
                            <li className="pb-3.5">
                                <Link href="https://www.linkedin.com/showcase/dexignzone" className="text-base uppercase text-secondary font-title link-hover">LinkedIn</Link>
                            </li>
                            <li className="pb-3.5">
                                <Link href="https://twitter.com/dexignzones" className="text-base uppercase text-secondary font-title link-hover">x</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:ps-25">
                    <div className="container-sm lg:px-8.5!">
                        <div className="grid grid-cols-12 sm:gap-5">
                            <div className="col-span-12">
                                    <div className="lg:mb-15 mb-7.5">
                                <p className="xl:text-xl sm:text-lg text-sm font-light">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy café, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It’s the journey from inspiration to execution</p>
                            </div>
                           <BlogDetailSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RelatedArticles />
        </>
    );
}