import Image from "next/image";
import Link from "next/link";

interface BlogListCardProps {
  blog: BlogItem;
}

const BlogListCard: React.FC<BlogListCardProps> = ({ blog }) => {
    return (
        <div className="relative z-1 duration-200 md:pb-5 border-b border-black/15 md:flex group mb-5">
            <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-auto sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                <Image src={blog.image} alt="/" placeholder="blur"  blurDataURL="/images/blur.png" className="size-full object-cover" width={295} height={234}/>
            </div>
            <div className="md:ps-7.5 py-2.5 md:pe-0 relative flex flex-col">
                <div className="mb-2.5 flex-1">
                <span className="rounded-2lg text-sm font-normal px-2.5 py-1.25 bg-[#EBEBEB] text-secondary inline-block mb-3">{blog.location}</span>
                    <h3 className="xl:text-3xl text-xl font-medium mb-2.5 uppercase"><Link href={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                    <Image src={blog.img} alt="avatar" placeholder="blur"  blurDataURL="/images/blur.png" className="size-10 rounded-full" height={40} width={40} />
                    <ul className="flex items-center gap-2.5">
                        <li className="text-base text-black/40 ">By <Link href={`/blog/${blog.slug}`} className="text-black">{blog.author}</Link></li>
                        <li className="text-base text-black/40 ">|  {blog.publishedAt}</li>
                    </ul>
                    </div>
                    <Link href="/blog/standard-post" aria-label="Read blog post" className="size-12.5 flex items-center justify-center rounded-full bg-primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogListCard;