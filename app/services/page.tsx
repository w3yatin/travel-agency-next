import ContentBox2 from "@/components/ContentBox2";
import ServiceBanner from "@/components/ServiceBanner";
import PricingTable from "@/components/PricingTables";
import FaqListing3 from "@/components/FaqListing3";
import ServiceSection from "@/components/ServiceSection";
import ParallaxImage from "@/components/ParallaxImage";
import { IMAGES } from "@/utilities/Constants";
export default function ServicePage() {
    return(
        <>
            <ServiceBanner />
            <ParallaxImage src={IMAGES.aboutlarge6} />
            <ServiceSection />
            <ContentBox2 />
            <PricingTable />
            <FaqListing3 />
        </>
    );
}