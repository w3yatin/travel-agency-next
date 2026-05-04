import packageData from "@/data/packagecard.json"
import PackageCard from "./cards/PackageCard"

export default function PackageSection() {
    return(
        <div className="xl:pt-50 md:pt-40 pt-25 2xl:pb-60 md:pb-30 pb-20">
            <div className="container">
                <div className="xl:mb-15 md:mb-10 mb-4 text-center">
                    <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase headline">Popular Packages</h2>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    {packageData.map((item, index) => (
                        <div className="xl:col-span-6 col-span-12" key={index}>
                            <PackageCard pkg={item} key={index} bgClass="bg-[#F4F4F4]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}