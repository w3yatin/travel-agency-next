import { IMAGES } from "@/utilities/Constants";
import Image from "next/image";

export default function ImageBox() {
    return(
        <section className="">
            <div className="hidden">
                <h2 className="xl:text-6xl md:text-5xl text-4xl">Our Work</h2>
            </div>
            <div className="container-full">
                <div className="relative overflow-hidden">
                    <Image src={IMAGES.aboutlarge1} alt="aboutlarge1" placeholder="blur" className="size-full min-h-75 object-cover" data-speed="0.7" />
                </div>
            </div>
        </section>
    );
}