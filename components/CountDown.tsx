"use client";
import { useEffect, useMemo, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string | Date;
}

const padZero = (num: number) => (num < 10 ? `0${num}` : num);

function calculateTimeLeft(targetDate: string | Date): TimeLeft {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const initialTimeLeft = useMemo(() => calculateTimeLeft(targetDate), [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
      
<div className="flex justify-center align-middle relative z-1 lg:mb-7.5 mb-5">
    <div className="xl:px-6.25 px-3.75 text-center date">
        <span className="xl:text-6xl text-4xl align-middle text-white font-semibold leading-[1.1] days" id="day">{padZero(timeLeft.days)}</span>
        <span className="block font-medium uppercase xl:text-2sm text-2xs text-white"> Days</span>
    </div>
    <div className="xl:px-6.25 px-3.75 text-center date">
        <span className="xl:text-6xl text-4xl align-middle text-white font-semibold leading-[1.1] hours" id="hour">{padZero(timeLeft.hours)}</span>
        <span className="block font-medium uppercase xl:text-2sm text-2xs text-white">Hours</span>
    </div>
    <div className="xl:px-6.25 px-3.75 text-center date">
        <span className="xl:text-6xl text-4xl align-middle text-white font-semibold leading-[1.1] minutes" id="min">{padZero(timeLeft.minutes)}</span>
        <span className="block font-medium uppercase xl:text-2sm text-2xs text-white">Minutes</span>
    </div>
    <div className="xl:px-6.25 px-3.75 text-center date">
        <div className="xl:text-6xl text-4xl align-middle text-white font-semibold leading-[1.1] seconds" id="second">{padZero(timeLeft.seconds)}</div>
        <span className="block font-medium uppercase xl:text-2sm text-2xs text-white">Seconds</span>
    </div>
</div>
      
);
}
