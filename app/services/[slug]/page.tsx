import BrandSlider from "@/components/BrandSlider";
import ContentBox3 from "@/components/ContentBox3";
import ContentBox4 from "@/components/ContentBox4";
import ContentCategory from "@/components/ContentCategory";
import FaqListing3 from "@/components/FaqListing3";
import ServiceSideBar from "@/components/ServiceSideBar";
import serviceData from "@/data/service.json";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
}
  
    return (
            <div className="relative">
				<ServiceSideBar />
				<section id="creativedesign" className="main-banner overflow-hidden z-0 h-full">
					<div className="xl:min-h-175 md:min-h-150 min-h-120 text-center relative bg-no-repeat bg-center bg-cover before:absolute before:inset-0 before:bg-linear-to-t before:from-black/70 before:to-black/0" style={{backgroundImage:`url(/images/banner/bnr2.png)`}}>
						<div className="container relative z-1 table h-full">
							<div className="text-center sm:py-15 py-10 table-cell align-bottom xl:h-175 md:h-150 h-120">
								<h1 className="2xxl:text-11xxl xl:text-10xl lg:text-8xl sm:text-6xl text-4xxl sm:mb-7.5 mb-4 text-white">{service.title}</h1>
								<p className="lg:text-xl sm:text-lg text-white max-w-231 mx-auto">In today’s fast-paced digital world, having a strong online presence is no longer optional—it’s essential. Whether you’re a small business looking to grow or an established company aiming to scale, our digital marketing services are tailored to meet your unique needs.</p>
							</div>
						</div>
					</div>
				</section>
				<section id="partner">
					<div className="pt-12.5">
					<BrandSlider />
					</div>
				</section>
				<ContentBox3 />
				<ContentCategory />
				<ContentBox4 />
				<FaqListing3 />
			</div>
    );
}