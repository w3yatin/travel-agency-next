
import TripDetail from "@/components/package-layout/TripDetail";
import TripDetail2 from "@/components/package-layout/TripDetail2";
import packageData from "@/data/packagecard.json";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pkg = packageData.find((pkg) => pkg.slug === slug);

  if (!pkg) {
    return <div>pkg not found</div>;
}
  
    return (
        <>
            {pkg.layout === "detail1" ? (
                <TripDetail pkg={pkg} />
            ) : pkg.layout === "detail2" ? (
                <TripDetail2 pkg={pkg} />
            ) : null}
        </>
    );
}