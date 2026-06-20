import Image from "next/image";
import Link from "next/link";

interface PackageCardProps {
  pkg: PackageItem;
  bgClass?: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, bgClass = "bg-white" }) => {
  return (
        <div className={`relative z-1 p-2.5 h-full duration-200 rounded-2xl md:flex group ${bgClass}`}>
            <div className="rounded-xxl xl:w-73.75 md:w-62.5 w-full xl:min-w-73.75 md:min-w-62.5 min-w-full md:h-full sm:h-62.5 h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
                <Image src={pkg.image} alt={pkg.title} placeholder="blur"  blurDataURL="/images/blur.png" className="size-full object-cover" width={295} height={330} />
                <span className="absolute top-5 left-5 rounded-3xl text-xs font-medium px-2.5 py-1.5 bg-green text-secondary">
                {pkg.location}
                </span>
            </div>

            <div className="sm:p-7 sm:pe-5 sm:pb-5 p-4 relative flex flex-col w-full">
                <div className="mb-2.5 flex-1">
                
                <ul className="flex flex-wrap items-center gap-1.25 mb-1.5">
                    <li className="font-semibold text-xs uppercase">{pkg.days}</li>
                    <li className="font-semibold text-xs uppercase">
                    / {pkg.nights}
                    </li>
                </ul>

                <h3 className="xl:text-2xl text-xl uppercase mb-2.5">
                    <Link href={`/tour/${pkg.slug}`} className="link-hover">{pkg.title}</Link>
                </h3>
                <div className="flex items-center gap-1.5 mb-2.5">
                    <ul className="flex items-center gap-0.75">
                        <li>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9635 5.29043C13.8718 4.99462 13.6204 4.78452 13.3229 4.75654L9.28214 4.37368L7.68431 0.47114C7.56649 0.185134 7.29817 0 7.00006 0C6.70194 0 6.43362 0.185134 6.31581 0.471809L4.71797 4.37368L0.676558 4.75654C0.379615 4.78519 0.128816 4.99462 0.0366354 5.29043C-0.0555451 5.58625 0.0295857 5.9107 0.254216 6.11523L3.30856 8.91042L2.40791 13.0504C2.342 13.3548 2.45523 13.6694 2.69727 13.852C2.82737 13.9501 2.97958 14 3.13307 14C3.26541 14 3.39668 13.9628 3.5145 13.8892L7.00006 11.7154L10.4843 13.8892C10.7393 14.0493 11.0607 14.0347 11.3022 13.852C11.5444 13.6689 11.6575 13.3541 11.5916 13.0504L10.6909 8.91042L13.7453 6.11579C13.9699 5.9107 14.0557 5.5868 13.9635 5.29043Z" fill="#FF7836"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9635 5.29043C13.8718 4.99462 13.6204 4.78452 13.3229 4.75654L9.28214 4.37368L7.68431 0.47114C7.56649 0.185134 7.29817 0 7.00006 0C6.70194 0 6.43362 0.185134 6.31581 0.471809L4.71797 4.37368L0.676558 4.75654C0.379615 4.78519 0.128816 4.99462 0.0366354 5.29043C-0.0555451 5.58625 0.0295857 5.9107 0.254216 6.11523L3.30856 8.91042L2.40791 13.0504C2.342 13.3548 2.45523 13.6694 2.69727 13.852C2.82737 13.9501 2.97958 14 3.13307 14C3.26541 14 3.39668 13.9628 3.5145 13.8892L7.00006 11.7154L10.4843 13.8892C10.7393 14.0493 11.0607 14.0347 11.3022 13.852C11.5444 13.6689 11.6575 13.3541 11.5916 13.0504L10.6909 8.91042L13.7453 6.11579C13.9699 5.9107 14.0557 5.5868 13.9635 5.29043Z" fill="#FF7836"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9635 5.29043C13.8718 4.99462 13.6204 4.78452 13.3229 4.75654L9.28214 4.37368L7.68431 0.47114C7.56649 0.185134 7.29817 0 7.00006 0C6.70194 0 6.43362 0.185134 6.31581 0.471809L4.71797 4.37368L0.676558 4.75654C0.379615 4.78519 0.128816 4.99462 0.0366354 5.29043C-0.0555451 5.58625 0.0295857 5.9107 0.254216 6.11523L3.30856 8.91042L2.40791 13.0504C2.342 13.3548 2.45523 13.6694 2.69727 13.852C2.82737 13.9501 2.97958 14 3.13307 14C3.26541 14 3.39668 13.9628 3.5145 13.8892L7.00006 11.7154L10.4843 13.8892C10.7393 14.0493 11.0607 14.0347 11.3022 13.852C11.5444 13.6689 11.6575 13.3541 11.5916 13.0504L10.6909 8.91042L13.7453 6.11579C13.9699 5.9107 14.0557 5.5868 13.9635 5.29043Z" fill="#FF7836"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9635 5.29043C13.8718 4.99462 13.6204 4.78452 13.3229 4.75654L9.28214 4.37368L7.68431 0.47114C7.56649 0.185134 7.29817 0 7.00006 0C6.70194 0 6.43362 0.185134 6.31581 0.471809L4.71797 4.37368L0.676558 4.75654C0.379615 4.78519 0.128816 4.99462 0.0366354 5.29043C-0.0555451 5.58625 0.0295857 5.9107 0.254216 6.11523L3.30856 8.91042L2.40791 13.0504C2.342 13.3548 2.45523 13.6694 2.69727 13.852C2.82737 13.9501 2.97958 14 3.13307 14C3.26541 14 3.39668 13.9628 3.5145 13.8892L7.00006 11.7154L10.4843 13.8892C10.7393 14.0493 11.0607 14.0347 11.3022 13.852C11.5444 13.6689 11.6575 13.3541 11.5916 13.0504L10.6909 8.91042L13.7453 6.11579C13.9699 5.9107 14.0557 5.5868 13.9635 5.29043Z" fill="#FF7836"/>
                            </svg>
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9635 5.29043C13.8718 4.99462 13.6204 4.78452 13.3229 4.75654L9.28214 4.37368L7.68431 0.47114C7.56649 0.185134 7.29817 0 7.00006 0C6.70194 0 6.43362 0.185134 6.31581 0.471809L4.71797 4.37368L0.676558 4.75654C0.379615 4.78519 0.128816 4.99462 0.0366354 5.29043C-0.0555451 5.58625 0.0295857 5.9107 0.254216 6.11523L3.30856 8.91042L2.40791 13.0504C2.342 13.3548 2.45523 13.6694 2.69727 13.852C2.82737 13.9501 2.97958 14 3.13307 14C3.26541 14 3.39668 13.9628 3.5145 13.8892L7.00006 11.7154L10.4843 13.8892C10.7393 14.0493 11.0607 14.0347 11.3022 13.852C11.5444 13.6689 11.6575 13.3541 11.5916 13.0504L10.6909 8.91042L13.7453 6.11579C13.9699 5.9107 14.0557 5.5868 13.9635 5.29043Z" fill="#FF7836"/>
                            </svg>
                        </li>
                    </ul>
                    <span className="text-2sm">18 Reviews</span>
                </div>
                <p className="text-sm">{pkg.description}</p>
                </div>
                <div className="flex items-center justify-between">
                <h4 className="text-2xxl">
                    {pkg.price}
                    <del className="text-base text-black/30 font-normal ml-1.5">
                    {pkg.oldPrice}
                    </del>
                </h4>
                    <Link href={`/tour/${pkg.slug}`} className="size-12.5 flex items-center justify-center rounded-full bg-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default PackageCard;