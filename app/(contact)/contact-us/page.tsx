import ContactForm from "@/components/ContactForm";
import LocationBox from "@/components/LocationBox";
import { IMAGES } from "@/utilities/Constants";

export default function ContactPage() {
    return(
        <>
            <ContactForm image={IMAGES.about13} />
            <LocationBox />
        </>
    );
}