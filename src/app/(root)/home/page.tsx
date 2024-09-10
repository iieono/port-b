"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { PiCursorLight } from "react-icons/pi";
import { PiCursorClick } from "react-icons/pi";

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
      gsap.from(".hero-title > div", {
        y: 60,
        x: -10,
        opacity: 0,
        border: "0px",
        delay: 0.5,
        filter: "blur(10px)",
        color: "white",
        duration: 1.3,
        stagger: 0.3,
        ease: "power1.out",
      });
      gsap.from(".hero-title > div", {
        delay: 2,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
      gsap.from(".hero-title > div div:not(.cursor-container)", {
        y: 10,
        x: -10,
        opacity: 0,
        delay: 2,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.2,
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
      gsap.from(".hero-title > div", {
        y: 10,
        x: -5,
        opacity: 0,
        border: "0px",
        delay: 0.5,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.3,
        ease: "power1.out",
      });
      gsap.from(".hero-title > div", {
        delay: 2,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
      gsap.from(".hero-title > div div", {
        y: 10,
        x: -5,
        opacity: 0,
        delay: 2,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.15,
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

    const cursortl = gsap.timeline({ repeat: -1, yoyo: true });
    gsap.to(".click-cursor", {
      opacity: 0,
      duration: 0,
      ease: "power2.inOut",
    });
    gsap.fromTo(
      ".cursor-container",
      {
        x: -40,
        y: 100,
      },
      {
        x: 20,
        y: 15,
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      }
    );
    cursortl.fromTo(
      ".cursor-container",
      {
        x: 20,
        y: 15,
        rotation: -5,
        opacity: 0.8,
      },
      {
        x: 0,
        y: 40,
        delay: 2,
        rotation: 5,
        opacity: 1,
        duration: 2.5,
        ease: "power1.inOut", // Smooth easing effect
        repeat: 1, // Infinite loop
        yoyo: true, // Reverses on repeat
      }
    );
    cursortl.to(".cursor-container", {
      x: 0,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    });
    cursortl.to(".click-cursor", {
      opacity: 1,
      duration: 0,
      ease: "power2.inOut",
    });

    cursortl.to(".and-sign", {
      rotate: "5deg",
      duration: 2,
      ease: "power2.inOut",
    });
    cursortl.to(".and-sign", {
      rotate: "-5deg",
      duration: 1,
      ease: "power2.inOut",
    });
    const leadtl = gsap.timeline();
    gsap.set(".lead-cursor-container", {
      y: 200,
      x: -40,
    });
    if (window.innerWidth > 1024) {
      leadtl.to(".lead-cursor-container", {
        y: 0,
        x: 0,
        duration: 2,
        ease: "power2.inOut",
      });
      leadtl.to(".click-cursor-lead", {
        opacity: 1,
        duration: 0,
        ease: "power2.inOut",
      });
      leadtl.fromTo(
        ".lead-border",
        {
          width: 0,
          height: 0,
          border: "0px",
          background: "#ffffe333",
          borderRadius: "0",
        },
        {
          width: "100%",
          background: "transparent",
          height: "100%",
          border: "2px solid #da392a",
          duration: 1.3,
          delay: 1,
          ease: "power2.inOut",
          borderRadius: "9999px",
        }
      );
      leadtl.to(".click-cursor-lead", {
        opacity: 0,
        duration: 0,
        ease: "power2.inOut",
      });
      leadtl.to(".lead-cursor-container", {
        x: 40,
        y: 40,
        duration: 1,
      });
      leadtl.to(
        ".lead-explore",
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=3.2"
      );
      leadtl.fromTo(
        ".lead-container",
        {
          boxShadow:
            "0 0 5px transparent, 0 0 25px transparent, 0 0 10px transparent, 0 0 200px #transparent",
        },
        {
          boxShadow:
            "0 0 5px #da392a, 0 0 25px #da392a, 0 0 10px #da392a, 0 0 200px #da392a",
          duration: 2.5,
        },
        "-=4"
      );
      leadtl.to(
        ".lead-container",
        {
          overflow: "hidden",
          pointerEvents: "auto",
          duration: 0,
        },
        "-=0.5"
      );
    }
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
            <div className="and-sign text-primary font-medium relative bg-primary/10">
              <div className="cursor-container text-primary z-40 absolute right-0 top-0">
                <PiCursorLight className="light-cursor h-5 w-5 lg:h-8 lg:w-8 text-custom-red absolute" />
                <PiCursorClick className="click-cursor h-5 w-5 lg:h-8 lg:w-8 absolute text-custom-red" />
              </div>
              <div className="absolute border border-custom-red w-full h-full">
                <div className="absolute w-3 lg:w-8 h-3 lg:h-8  border-t border-r rounded-tr-3xl border-custom-red -right-3 lg:-right-8 -top-3 lg:-top-8"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-primary -left-[2px] -top-[2px] lg:-left-1.5 lg:-top-1.5"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-primary -right-[2px] -top-[2px] lg:-right-1.5 lg:-top-1.5"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-primary -left-[2px] -bottom-[2px] lg:-left-1.5 lg:-bottom-1.5"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-primary -right-[2px] -bottom-[2px] lg:-right-1.5 lg:-bottom-1.5"></div>
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

      <div className=" hidden lg:flex pointer-events-none lead-container p-2 left-1/2 group rounded-tr-full rounded-bl-full lg:rounded-full -translate-x-1/2 absolute bottom-52 flex-col lg:flex-row lg:bottom-5 gap-0 lg:hover:gap-1 transition-all duration-300 delay-1000 hover:delay-500 items-center uppercase justify-center text-2xl">
        <div className="lead-border  left-0 top-0 rounded-tr-full rounded-bl-full lg:rounded-full -z-10 lg:z-40 absolute w-full h-full">
          <div className="lead-cursor-container z-40 absolute right-0 bottom-0">
            <PiCursorLight className="light-cursor-lead h-5 w-5 lg:h-8 lg:w-8 text-custom-red absolute" />
            <PiCursorClick className="click-cursor-lead opacity-0 h-5 w-5 lg:h-8 lg:w-8 absolute text-custom-red" />
          </div>
        </div>
        <div className="overflow-hidden transition-all group-hover:delay-0 lg:delay-500 duration-700 chillax-text opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-80 bg-primary p-0 group-hover:px-6 group-hover:py-2  rounded-full font-medium text-custom-red">
          Gallery
        </div>

        <div className="lead-explore overflow-hidden transition-all duration-700 opacity-0 delay-500 lg:delay-[1200ms] group-hover:delay-0 chillax-text origin-center text-center group-hover:text-primary group-hover:max-w-0 group-hover:translate-y-[150%] group-hover:p-0 max-w-80 bg-primary px-6 py-2 rounded-full font-medium text-custom-red">
          Explore
        </div>
        <div className="overflow-hidden transition-all group-hover:delay-0 lg:delay-500 duration-700 chillax-text opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-80 bg-primary p-0 group-hover:px-6 group-hover:py-2 rounded-full font-medium text-custom-red">
          Projects
        </div>
      </div>

      <div className="flex mob-gallery-container  self-end lg:hidden w-full italic px-1  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className=" w-full bg-primary text-primary shadow-primary/20 backdrop-blur-3xl shadow-2xl text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-between lg:rounded-none lg:rounded-tl-[50px]"
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
