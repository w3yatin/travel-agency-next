"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface TourCardProps {
  tour: TourItem;
}
const TourCard: React.FC<TourCardProps> = ({ tour }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

    return (
            <div className="relative tour-card" 
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onMouseMove={handleMove} >
                <div className="relative overflow-hidden rounded-xxl before:absolute before:inset-0 before:bg-linear-to-b before:from-transparent before:to-black/60">
                    <Image src={tour.image} alt="tour" placeholder="blur" blurDataURL="/images/blur.png" className="size-full object-cover max-w-[420px]" height={615} width={420} />
                </div>
                <div className="absolute left-0 bottom-0 sm:p-7.5 p-4.5 flex items-center justify-between w-full">
                    <div className="flex-1">
                        <h3 className="text-2xxl font-medium text-white max-w-50 uppercase mb-2.5">{tour.title}</h3>
                    </div>
                    <div className="text-right">
                        <span className="block font-title text-2sm text-white uppercase mb-1">From</span>
                        <span className="block font-title text-2xxl text-primary font-semibold">{tour.price}</span>
                    </div>
                </div>
                  <Link
                    href={tour.link}
                    className={`view-detail absolute ${active ? "is-active" : ""}`}
                    style={{
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-50%, -50%)",
                    }}
                >
                 View<br />Details </Link>
            </div>
    );
}

export default TourCard;