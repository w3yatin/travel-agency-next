import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import PackageDetail2 from "../PackageDetail2";


type PackageProps = {
  pkg: PackageItem;
};

export default function TripDetail2({ pkg }: PackageProps) {
    return(
        <>
            <div className="relative">
                <div className="main-banner overflow-hidden z-0 h-full">
                    <div className="2xxl:min-h-230 lg:min-h-160 min-h-120 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-linear-to-t before:from-black/20 before:to-black/0" style={{backgroundImage:`url(/images/banner/bnr3.png)`}}>
                        <div className="container relative z-1 table h-full">
                            <div className="text-center py-15 table-cell align-middle 2xxl:h-230 lg:h-160 h-120">
                                <h1 className="xl:text-10xl lg:text-8xl sm:text-6xl text-5xl uppercase text-white">{pkg.title}</h1>
                            </div>
                            <span className="absolute  sm:bottom-1/6 bottom-[15%] 2xxl:left-1/2 sm:left-0 left-1/12 flex flex-col items-center justify-center xl:size-49 lg:size-40 sm:size-30 size-20 z-1 -rotate-[7deg]">
                                <span className="font-title font-normal xl:text-3xl lg:text-2xl sm:text-xl text-base">From</span>
                                <span className="text-secondary font-title font-semibold leading-none xl:text-[58px] lg:text-4xxl sm:text-3xl text-2xl">$1299</span>
                                <Image src={IMAGES.star} alt="Price badge" className="absolute -z-1 animate-rotate xl:size-49 lg:size-40 sm:size-30 size-20" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <PackageDetail2 pkg={pkg} />
        </>
    )

}