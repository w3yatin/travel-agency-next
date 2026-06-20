import Image from "next/image";

const teamImages = [
  '/images/team/large/img1.png',
  '/images/team/large/img2.png',
  '/images/team/large/img3.png',
  '/images/team/large/img4.png',
  '/images/team/large/img5.png',
];

const repeatedImages = Array(5).fill(teamImages).flat();

export default function TeamBannerSwiper() {
    return(
        <div className="2xl:pt-58 2xl:pb-30 md:pt-40 sm:pb-20 pt-30 pb-12.5 overflow-hidden">
            <div className="container">
                <div className="text-center max-w-225 mx-auto lg:mb-20 sm:mb-10 mb-4">
                    <h2 className="2xl:text-7xl xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold headline mb-4.5">Teamwork Unlocks Boundless Potential</h2>
                    <p className="xl:text-xl sm:text-lg text-sm wow fadeInUp" data-wow-delay="1s">Welcome to the space where creativity knows no bounds. Our agency is a hub of innovation, collaboration, and artistry, dedicated to crafting unforgettable campaigns that resonate and inspire.</p>
                </div>
            </div>
            <div className="flex items-center lg:gap-9.5 gap-5 lg:mx-20 mx-5 animate-ticker">
                {repeatedImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden lg:rounded-3xl sm:rounded-2xl rounded-xl sm:even:mt-20 even:mt-10 xl:min-w-80 sm:min-w-50 min-w-30"
                    >
                        <Image
                        src={img}
                        alt={`Team member ${index + 1}`}
                        width={320}
                        height={400}
                        className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
