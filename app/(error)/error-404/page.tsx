import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";
import Link from "next/link";

export default function ErrorPage() {
    return(
        <div className="xl:pt-50 md:pt-40 pt-25 sm:pb-25 pb-15">
            <div className="relative">
                <div className="text-center px-5 py-2 max-w-250 mx-auto">
                    <h2 className="lg:text-6xl sm:text-5xl text-4xl lg:mb-7.5 mb-4">Oops!</h2>
                    <div className="md:mb-23 mb-10">
                        <Image src={IMAGES.error2} alt="/" className="inline-block" />
                    </div>
                    <h2 className="lg:text-6xl sm:text-5xl text-4xl font-semibold uppercase lg:mb-7.5 mb-4">Page Not Found</h2>
                    <p className="lg:text-xl sm:text-lg mx-auto max-w-125 lg:mb-7.5 mb-4">The page you're looking for isn't available. Try searching again or go back home.</p>
                    <Link href="/home" className="btn btn-primary btn-hover">
                        <span>Back To Home</span>
                    </Link>
                </div>

                <Image src={IMAGES.background7} alt="/" className="absolute xl:bottom-[30%] bottom-1/5 xl:right-1/5 right-1/12 animate-move1 max-lg:hidden" />
                <Image src={IMAGES.background8} alt="/" className="absolute top-[10%] right-[5%] animate-move2 max-xl:w-17.5 max-lg:hidden" />
                <Image src={IMAGES.background9} alt="/" className="absolute xl:top-[30%] top-1/2 xl:left-[8%] left-[2%] animate-move3 max-lg:hidden" />
                <Image src={IMAGES.background10} alt="/" className="absolute top-[6%] left-[7%] animate-move4 [animation-duration:8s] max-lg:hidden" />
                <Image src={IMAGES.background10} alt="/" className="absolute top-[2%] left-[28%] w-19 animate-move4 [animation-duration:10s] max-lg:hidden" />
                <Image src={IMAGES.background10} alt="/" className="absolute top-[4%] right-[15%] w-12 animate-move4 max-lg:hidden" />
            </div>
        </div>
    );
}