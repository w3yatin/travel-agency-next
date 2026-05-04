import BlogDetailSection from "../BlogDetailSection";
import BlogSideBar from "../BlogSideBar";
import ImageThumbSwiper from "../ImageThumbSwiper";

type BlogProps = {
  blog: BlogItem;
};

export default function PostGallery({ blog }: BlogProps) {
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
                            <ImageThumbSwiper />
                        </div>
                        <div className="mb-5">
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