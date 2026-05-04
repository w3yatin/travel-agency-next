import Image from "next/image";
import Link from "next/link";

interface BlogGridCardProps {
  bloggrid: BlogGridItem;
}

const BlogGridCard: React.FC<BlogGridCardProps> = ({ bloggrid }) => {
    return (
        <div className="group blog-card mb-5">
            <div className="sm:mb-7.5 mb-5 overflow-hidden">
                <div className="group dz-hover-item relative overflow-hidden">
                    <a className="dz-hover-img relative" data-displacement="assets/images/1.jpg" data-intensity="0.6" data-speedin="1" data-speedout="1">
                        <Image src={bloggrid.img} alt="img" placeholder="blur"  blurDataURL="/images/blur.png" className="w-full duration-500 group-hover:scale-[1.03] group-hover:translate-x-0.75" height={463} width={418} />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <h4 className="xl:text-2xxl text-2xl mb-1.25">
                        <Link className="link-hover" href="/blog/standard-post">
                            {bloggrid.title}
                        </Link>
                    </h4>
                    <ul>
                        <li className="xl:text-base text-sm pe-2.5 inline-block relative before:absolute before:h-px before:w-2.5 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden before:bg-bodycolor">{bloggrid.publishedAt}</li>
                        <li className="xl:text-base text-sm ps-5 inline-block relative before:absolute before:h-px before:w-2.5 before:left-0 before:top-1/2 before:-translate-y-1/2 first:before:hidden before:bg-bodycolor">By {bloggrid.author}</li>
                    </ul>
                </div>
                <Link href="/blog/standard-post" className="size-15 min-w-15 flex items-center justify-center rounded-full  bg-primary transform xl:-translate-x-full xl:rotate-[-360deg] xl:opacity-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 overflow-hidden group/second">
                    <svg className="group-hover/second:animate-toTopFromBottom" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="stroke-secondary" d="M7.5 17L17.5 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="stroke-secondary" d="M7.5 7H17.5V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default BlogGridCard;