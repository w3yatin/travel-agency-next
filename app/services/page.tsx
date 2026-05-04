import ContentBox2 from "@/components/ContentBox2";
import ImageBox4 from "@/components/ImageBox4";
import ServiceBanner from "@/components/ServiceBanner";
import PricingTable from "@/components/PricingTables";
import FaqListing3 from "@/components/FaqListing3";
import ServiceSection from "@/components/ServiceSection";
export default function ServicePage() {
    return(
        <>
            <ServiceBanner />
            <ImageBox4 />
            <ServiceSection />
            <ContentBox2 />
            <PricingTable />
            <FaqListing3 />
        </>
    );
}