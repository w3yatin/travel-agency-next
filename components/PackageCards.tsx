import packageData from "@/data/packagecard.json"
import PackageCard from "./cards/PackageCard";
import Link from "next/link";
export default function PackageCards() {
    return(
        <section className="2xl:py-40 lg:py-30 sm:py-25 py-18 bg-light relative z-1 after:absolute after:bottom-0 lg:after:-right-55 after:right-0 after:size-full after:bg-no-repeat after:bg-bottom-right after:bg-[url(/images/background/bg2.png)] after:-z-1 max-xl:after:bg-contain overflow-hidden">
            <div className="container">
                <div className="row" id="masonry" data-masonry='{"percentPosition": true}'>
                    <div className="card-container xl:w-1/2 w-full mb-5">
                        <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase lg:mb-7.5 headline">Popular Packages</h2>
                    </div>

                    {packageData.slice(0,4).map((item, index) => (
                        <div key={index} className="card-container xl:w-1/2 w-full mb-5">
                            <PackageCard pkg={item}/>
                        </div>
                    ))}
                    <div className="card-container xl:w-1/2 w-full mb-5">
                        <Link href="/tour/island-wilderness" className="bg-white rounded-xxl flex items-center justify-center p-10 size-full sm:min-h-47.5 min-h-25">
                            <h4 className="sm:text-4xxl text-2xxl text-center">View All Packages</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}