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
      delay: 0.3,
      ease: "power4.out",
    });

    tl.from(
      ".hero-title",
      {
        clipPath: "inset(100% 0 0 0)",
        y: 100,
        opacity: 0,
        rotationX: -45,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=0.5"
    );
    tl.from(
      ".ideas-text",
      {
        clipPath: "inset(100% 0 0 0)",
        y: 50,
        opacity: 0,
        rotationX: -45,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1"
    );
    tl.from(
      ".mob-links > div",
      {
        clipPath: "inset(100% 0 0 0)",
        y: 20,
        opacity: 0,
        rotationX: -45,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1"
    );
    tl.from(
      ".mob-explore",
      {
        clipPath: "inset(100% 0 0 0)",
        y: 100,
        opacity: 0,
        rotationX: -45,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1"
    );
  });
  const overlayRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full h-full page-container">
      <div
        ref={overlayRef}
        className="absolute inset-0 z-50 bg-oriolas"
        // style={{ transform: "translateY(100%)" }}
        aria-hidden="true"
      ></div>
      <div className="w-full h-full flex flex-col justify-end">
        {/* <div className="text-bg text-4xl chillax-text">
          Hi! I am Abdusamadbek Akhmadjonov
        </div> */}
        <div className="ideas-text text-[2.9rem] -z-10 lg:text-[8.7rem] leading-none -mb-3 chillax-text font-light text-shift">
          I craft ideas
        </div>
        <div className="font-semibold -z-10 uppercase flex flex-col text-9xl  lg:text-[24rem] leading-none overflow-hidden text-accent styro-text">
          <div className="hero-title lg:-mt-10 relative w-min flex">
            <div>D</div>
            <div>e</div>
            <div>s</div>
            <div>i</div>
            <div>g</div>
            <div>n</div>
            <div>e</div>
            <div>r</div>
            <div className="mob-links absolute lg:hidden text-[1.8rem] lowercase flex flex-col  w-max text-oriolas -right-12 bottom-4">
              <div>github</div>
              <div>email</div>
            </div>
          </div>
          <div className="hero-title -mt-7 lg:-mt-20 lg:-mb-10 overflow-hidden flex">
            <div>D</div>
            <div>e</div>
            <div>v</div>
            <div>e</div>
            <div>l</div>
            <div>o</div>
            <div>p</div>
            <div>e</div>
            <div>r</div>
          </div>
        </div>
        <div className="lg:hidden -z-10 mob-explore -mt-5 text-[4.2rem] leading-none chillax-text uppercase font-extrabold text-oriolas pb-3 -ml-1 flex items-center justify-start">
          Explore
        </div>
        {/* <div className="bg-custom-red/80 w-full h-5/6 origin-top-right  absolute right-0 bottom-0 -rotate-45"></div> */}
      </div>
    </div>
  );
}
