import Image from "next/image";
import Link from "next/link";

interface BlogCollageCardProps {
  blogcollage: BlogItem;
}

const BlogCollageCard: React.FC<BlogCollageCardProps> = ({ blogcollage }) => {
    return (
        <div className="h-full relative z-1 overflow-hidden after:absolute after:inset-0 after:bg-linear-to-t after:from-black/70 after:to-black/20 after:z-0">
            <Image className="size-full object-cover" alt="collage" fill src={blogcollage.collageimg}/>
            <div className="absolute z-1 top-3.5 left-3.5 flex items-center lg:text-sm text-xs text-white font-semibold">
                <span>{blogcollage.publishedAt}</span>
                <span className="mx-2">|</span>
                <Link href={`/blog/${blogcollage.slug}`}>By <span className="text-white text-sm font-semibold">{blogcollage.author}</span></Link>
            </div>
            <div className="absolute z-1 bottom-6 flex items-center justify-between px-3.75 w-full">
                <h2 className="sm:text-2xl text-xl font-semibold hover:text-primary duration-500 item-title max-w-75 flex-1 uppercase">
                    <Link href={`/blog/${blogcollage.slug}`} className="text-white!">
                        {blogcollage.title}
                    </Link>
                </h2>
                <Link href={`/blog/${blogcollage.slug}`} className="absolute bottom-0  sm:right-7.5 right-3.5 overflow-hidden inline-flex justify-center items-center size-9 rounded-full bg-white hover:bg-primary border border-[#E6E6E6] text-secondary duration-100 z-0">
                    <svg className="hover:animate-toLeftFromRight" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16663 10H15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10 4.16666L15.8333 10L10 15.8333" stroke="var(--secondary)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default BlogCollageCard;