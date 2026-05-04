import TourCard from "@/components/cards/TourCard";
import tourData from "@/data/tour.json";
export default function UpcomingTrips() {
    return(
        <div className="xl:pt-50 md:pt-40 pt-25 2xl:pb-43.75 md:pb-30 pb-20">
            <div className="container">
                <div className="xl:mb-15 md:mb-10 mb-4 text-center">
                    <h2 className="2xxl:text-10xl lg:text-8xl md:text-5xxl sm:text-4xl text-3xxl uppercase font-medium headline">Upcoming Trips</h2>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    {tourData.map((item, index) => (
                    <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                        <TourCard  tour={item}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}