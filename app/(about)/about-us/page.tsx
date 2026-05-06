import AboutSection from "@/components/AboutSection";
import AboutBanner from "@/components/AboutUsBanner";
import ContentBox1 from "@/components/ContentBox1";
import HolidayCards from "@/components/HolidayCards";
import ParallaxImage from "@/components/ParallaxImage";
import PostTiles from "@/components/PostTiles";
import { IMAGES } from "@/utilities/Constants";

export default function AboutUs() {
    return(
        <>
            <AboutBanner />
            <AboutSection />
            <ParallaxImage src={IMAGES.aboutlarge1} />
            <HolidayCards />
            <ContentBox1 />
            <PostTiles />
        </>
    );
}