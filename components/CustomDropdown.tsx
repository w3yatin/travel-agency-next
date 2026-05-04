"use client";
import { useState } from "react";

const options = ["Jaipur", "Goa", "Kerala", "Manali"];

export default function CustomDropdown() {
  const [selected, setSelected] = useState("Jaipur");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      
      <div
        onClick={() => setOpen(!open)}
        className="py-2.5 px-3.5 text-lg bg-black/5 rounded-lg font-normal text-[#9e9e9e] h-11.25 w-full flex justify-between items-center"
      >
        <span>{selected}</span>
            <span className="text-sm">
                <span
                className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                }`}
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-300" 
                        fill="none"
                        stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </span>
        </div>

      {open && (
        <ul className="absolute left-0 w-full bg-white shadow-md mt-2 z-10 rounded-md">
          {options.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}