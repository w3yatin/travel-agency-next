import bloggridData from "@/data/bloggrid.json";
import BlogGridCard from "@/components/cards/BlogGridCard";

export default function BlogCard() {
    return(
        <section className="xl:pb-42.5 pb-20 md:pt-42.5 pt-25">
            <div className="container">
                <div className="row loadmore-content" id="masonry" data-masonry='{"percentPosition": true}'>
                    {bloggridData.map((bloggrid, index) => (
                        <div className="xl:w-1/3 md:w-1/2 w-full" key={index}>
                            <BlogGridCard bloggrid={bloggrid} key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}