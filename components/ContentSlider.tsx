import HistoryCarousel from "./HistoryCarousel";

export default function ContentSlider() {
    return(
        <section className="xl:pt-37.5 xl:pb-25 py-10 relative">
            <div className="container-fluid">
                <div className="sm:mb-3.5 text-center xl:max-w-145 max-w-100 mx-auto relative z-3">
                    <h2 className="xl:text-6xl lg:text-4xxl sm:text-4xl text-3xl headline">Our Journey Through Time</h2>
                </div>
                <HistoryCarousel />
            </div>
        </section>
    );
}