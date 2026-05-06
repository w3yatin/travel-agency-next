import ContactForm from "@/components/ContactForm";
import LocationBox from "@/components/LocationBox";
import ParallaxImage from "@/components/ParallaxImage";
import { IMAGES } from "@/utilities/Constants";

export default function ContactPage2() {
    return(
        <>
            <ContactForm image={IMAGES.about12} />
            <ParallaxImage src={IMAGES.aboutlarge3} />
            <LocationBox />
        </>
    );
}