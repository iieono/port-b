"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { PiCursorLight } from "react-icons/pi";
import { PiCursorClick } from "react-icons/pi";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      y: "-100%",
      duration: 1.25,
      ease: "power3.out",
    });
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full h-full page-container">
      <div
        ref={overlayRef}
        className="absolute inset-0 z-50 bg-red-600"
        // style={{ transform: "translateY(100%)" }}
        aria-hidden="true"
      ></div>
      <div className="w-full h-full flex flex-col justify-end">
        {/* <div className="text-bg text-4xl chillax-text">
          Hi! I am Abdusamadbek Akhmadjonov
        </div> */}
        <div className="text-[2.9rem] lg:text-[8.7rem] leading-none -mt-3 chillax-text font-light text-accent">
          I craft ideas
        </div>
        <div className="font-semibold uppercase flex flex-col text-9xl lg:text-[24rem] leading-none overflow-hidden text-custom-red styro-text">
          <div className="lg:-mt-10 relative w-min">
            Designer
            {/* <div className="absolute text-[10rem] lowercase flex flex-col  w-max text-accent -right-36 bottom-9">
              and
            </div> */}
          </div>
          <div className=" -mt-7 lg:-mt-20 lg:-mb-10 overflow-hidden">
            Developer
          </div>
        </div>
      </div>
    </div>
  );
}
