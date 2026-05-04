import ContactForm from "@/components/ContactForm";
import ImageBox5 from "@/components/ImageBox5";
import LocationBox from "@/components/LocationBox";
import { IMAGES } from "@/utilities/Constants";

export default function ContactPage2() {
    return(
        <>
            <ContactForm image={IMAGES.about12} />
            <ImageBox5 />
            <LocationBox />
        </>
    );
}