"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      gsap.from(".hero-title span", {
        y: 40,
        x: -10,
        opacity: 0,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.05,
        ease: "power1.out",
      });
    } else {
      gsap.from(".hero-title", {
        y: 10,
        x: -5,
        opacity: 0,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
      });
    }
    gsap.from(".hero-para", {
      y: 40,
      x: -10,
      opacity: 0,
      delay: 0.2,
      filter: "blur(3px)",
      duration: 1.3,
      stagger: -0.3,
      ease: "power1.out",
    });
    gsap.from(".hero-para-small p", {
      y: 10,
      x: -10,
      opacity: 0,
      delay: 1,
      filter: "blur(3px)",
      duration: 1.3,
      stagger: 0.3,
      ease: "power1.out",
    });
    gsap.from(".hero-name", {
      color: "#da392a",
      width: 0,
      filter: "blur(3px)",
      delay: 0.3,
      duration: 2.6,
      ease: "power1.out",
    });
  });
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-3 lg:justify-between  flex-col p-2 py-5  lg:p-5 pt-20">
      <div className="hero-name text-2xl  w-32 overflow-hidden text-primary absolute  lg:text-4xl lg:pl-5 lg:top-12 lg:left-12 xl:left-16 top-6 left-8 md:left-9 pen-text">
        '//e0
      </div>

      <div className="leading-none chillax-text font-semibold text-custom-red text-[3.15rem] w-full h-full  px-5 lg:px-10 md:text-[6rem] lg:text-[8rem] xl:text-[12rem] 2xl:text-[14rem] flex items-start justify-start lg:justify-center flex-col ">
        <div className="flex justify-betwee items-center w-full">
          <div className="hero-title origin-top-left flex uppercase lg:px-1">
            <span>d</span>
            <span>e</span>
            <span>s</span>
            <span>i</span>
            <span>g</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <div className="text-primary font-medium relative">
              <div className="absolute border border-primary w-full h-full">
                <div className="absolute w-5 h-5  border-t border-r -right-5 -top-5"></div>
                <div className="absolute w-3 h-3 rounded-full bg-primary -left-1.5 -top-1.5"></div>
                <div className="absolute w-3 h-3 rounded-full bg-primary -right-1.5 -top-1.5"></div>
                <div className="absolute w-3 h-3 rounded-full bg-primary -left-1.5 -bottom-1.5"></div>
                <div className="absolute w-3 h-3 rounded-full bg-primary -right-1.5 -bottom-1.5"></div>
              </div>
              &
            </div>
          </div>
          <div className="hero-para text-lg group hidden lg:flex flex-col items-end ps-10 justify-start lg:h-full pt-3 md:pr-2 xl:pt-6 xl:pr-3 lg:w-1/3  lg:text-base  xl:text-lg perma font-light text-primary leading-snug rounded-3xl italic relative">
            {/* <p>I am A. Akhmadjonov. </p> */}
            <p className=" flex group-hover:pr-2 transition-all duration-1000">
              I craft immersive digital
            </p>

            <p className="  flex group-hover:pr-8 transition-all delay-300 duration-1000">
              solutions that inspire.
            </p>
          </div>
        </div>
        <div className="self-end flex lg:justify-end w-full  items-start gap-5 relative">
          <div className="hero-para hidden lg:flex flex-col items-start justify-end  h-full pb-5 md:pl-3 xl:pb-8 xl:pl-6  text-primary perma text-base jetbrains">
            <div className="hover:pl-3 transition-all duration-700 cursor-pointer">
              github
            </div>
            <div className="hover:pl-3 transition-all duration-700  cursor-pointer">
              email
            </div>
            <div></div>
          </div>
          {/* <div className="text-primary hidden lg:flex">&</div> */}
          <div className="uppercase origin-top-left flex lg:px-1 lg:justify-end w-full hero-title">
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </div>
        </div>
        <div className="hero-para-small text-sm leading-6 px-1 md:px-2 flex lg:hidden flex-col items-start pt-3 justify-center jetbrains  lg:text-xl  xl:text-lg chillax-text  text-primary  rounded-3xl italic relative">
          <p>Hi! I am A. Akhmadjonov. </p>
          <p> I craft immersive digital </p>

          <p> solutions that inspire.</p>
        </div>
      </div>

      {/* <div className="w-full gap-3 py-2 hidden lg:flex flex-col items-center lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-3 text-primary  jura font-extralight justify-start">
        <div className="flex lg:self-end shadow-2xl  gap-3 w-72 lg:w-auto flex-col lg:flex-row text-lg lg:text-4xl items-start lg:items-center p-2 lg:px-2 lg:py-2 rounded-xl transition-all duration-700 rounded-bl-[100px] rounded-tr-[100px] lg:rounded-xl lg:rounded-br-[100px] lg:rounded-tl-[100px] uppercase bg-primary ">
          <div className=" self-end hover:shadow-2xl lg:mb-10 sharpie-text transition-all duration-700 rounded-full bg-custom-deepgray/100 backdrop-blur-lg px-4 py-2">
            See my works
          </div>
          <div className=" text-5xl sharpie-text self-center text-custom-deepgray">
            &
          </div>
          <div className=" rounded-full kalam-text hover:shadow-2xl transition-all duration-700 bg-custom-deepgray/100 backdrop-blur-lg lg:mt-10 px-4 py-2">
            Reach out
          </div>
        </div>
      </div> */}

      <div className="flex self-end lg:hidden w-full italic  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className="absolute w-auto bg-primary backdrop-blur-lg shadow-2xl text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-between lg:rounded-none lg:rounded-tl-[50px]"
        >
          <div className=" hidden lg:flex w-8 h-1/3 absolute left-0 -translate-x-full bg-primary bottom-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          <div className=" hidden lg:flex w-8 h-1/2 absolute right-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          {/* <div className="hidden w-8 h-1/2 absolute left-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-bl-[30px]"></div>
          </div> */}
          <p className="text-center text-custom-deepgray technor-text lg:pb-1 font-extralight">
            Explore
          </p>
          <div className="flex h-full  gap-1 lg:gap-2 items-center ">
            <div className="flex lg:flex-col  items-center gap-1 lg:gap-2 ">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="lg:hidden h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
            <div className="flex items-center flex-col ">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
