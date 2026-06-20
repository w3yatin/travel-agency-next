import BlogDetailSection from "../BlogDetailSection";
import BlogSideBar from "../BlogSideBar";

type BlogProps = {
  blog: BlogItem;
};

export default function PostQuote({ blog }: BlogProps) {
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
                            <div className="bg-light relative w-full md:h-100 sm:h-87.5 h-62.5 flex">
                                <div className="absolute sm:top-5 sm:left-8.25 top-2 left-3.25">
                                    <svg className="md:size-25 sm:size-20 size-15" width="129" height="99" viewBox="0 0 129 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5333 90.1042C4.325 82.175 0 73.525 0 59.1083C0 33.8792 18.0208 11.5333 43.25 0L49.7375 9.37084C25.95 22.3458 20.9042 38.925 19.4625 49.7375C23.0667 47.575 28.1125 46.8542 33.1583 47.575C46.1333 49.0167 56.225 59.1083 56.225 72.8042C56.225 79.2917 53.3417 85.7792 49.0167 90.825C43.9708 95.8708 38.2042 98.0333 30.9958 98.0333C23.0667 98.0333 15.8583 94.4292 11.5333 90.1042ZM83.6167 90.1042C76.4083 82.175 72.0833 73.525 72.0833 59.1083C72.0833 33.8792 90.1041 11.5333 115.333 0L121.821 9.37084C98.0333 22.3458 92.9875 38.925 91.5458 49.7375C95.15 47.575 100.196 46.8542 105.242 47.575C118.217 49.0167 128.308 59.1083 128.308 72.8042C128.308 79.2917 125.425 85.7792 121.1 90.825C116.775 95.8708 110.287 98.0333 103.079 98.0333C95.15 98.0333 87.9417 94.4292 83.6167 90.1042Z" fill="#000" fillOpacity="0.3"></path>
                                    </svg>
                                </div>
                                <div className="absolute sm:bottom-5 sm:right-8.25 bottom-2 right-3.25">
                                    <svg className="md:size-25 sm:size-20 size-15" width="129" height="99" viewBox="0 0 129 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116.775 7.92902C123.984 15.8582 128.309 24.5082 128.309 38.9249C128.309 64.154 110.288 86.4999 85.0586 98.0332L78.5711 88.6624C102.359 75.6874 107.404 59.1082 108.846 48.2957C105.242 50.4582 100.196 51.179 95.1503 50.4582C82.1753 49.0165 72.0836 38.9249 72.0836 25.229C72.0836 18.7415 74.9669 12.254 79.2919 7.2082C84.3378 2.16237 90.1044 -0.000137329 97.3128 -0.000137329C105.242 -0.000137329 112.45 3.60402 116.775 7.92902ZM44.6919 7.92902C51.9003 15.8582 56.2253 24.5082 56.2253 38.9249C56.2253 64.154 38.2044 86.4999 12.9753 98.0332L6.48779 88.6624C30.2753 75.6874 35.3211 59.1082 36.7628 48.2957C33.1586 50.4582 28.1128 51.179 23.0669 50.4582C10.0919 49.0165 0.000289917 38.9249 0.000289917 25.229C0.000289917 18.7415 2.88362 12.254 7.20862 7.2082C11.5336 2.16237 18.0211 -0.000137329 25.2295 -0.000137329C33.1586 -0.000137329 40.3669 3.60402 44.6919 7.92902Z" fill="#000" fillOpacity="0.3"></path>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center text-center p-5"><p className="font-medium xl:text-2xxl sm:text-2xl text-xl text-secondary">&ldquo;Lorem Ipsumipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the&rdquo;</p></div>
                            </div>
                        </div>
                        <div className="mb-5">
                                <div className="lg:mb-15 mb-7.5">
                                <p className="xl:text-xl sm:text-lg text-sm font-light">Design is more than aesthetics; it is the bridge between imagination and reality, between problems and solutions. From the sleek interface of a smartphone app to the thoughtful layout of a cozy caf&eacute;, great design influences how we live, work, and connect. But what transforms a fleeting idea into a tangible design? It&apos;s the journey from inspiration to execution</p>
                            </div>
                            <BlogDetailSection />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
