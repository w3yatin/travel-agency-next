import ServiceCard from "./cards/ServiceCard";
import serviceData  from "@/data/service.json";
export default function ServiceSection1() {
    return (
        <section>
            <div className="pt-30 pb-17.5">
                <div className="container">
                    <div className="mb-30 text-center pxl-heading-scroll-effect">
                        <h2 className="xl:text-7xl md:text-5xl text-4xl mb-5 heading-text">Explore Services</h2>
                        <p className="sm:text-xl text-lg font-normal text-lightgrey max-w-500 mx-auto capitalize">Get to know all Web Design Agency, that are part of the complex multi-channel</p>
                    </div>
                    <div className="grid grid-cols-12 gap-20">
                        {serviceData.map((item, index) => (
                            <ServiceCard 
                                key={index}
                                service={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}