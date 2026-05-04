import AboutSection from "@/components/AboutSection";
import AboutBanner from "@/components/AboutUsBanner";
import ContentBox1 from "@/components/ContentBox1";
import HolidayCards from "@/components/HolidayCards";
import ImageBox from "@/components/ImageBox";
import PostTiles from "@/components/PostTiles";

export default function AboutUs() {
    return(
        <>
            <AboutBanner />
            <AboutSection />
            <ImageBox />
            <HolidayCards />
            <ContentBox1 />
            <PostTiles />
        </>
    );
}