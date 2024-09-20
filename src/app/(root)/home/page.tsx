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
        delay: 1,
        background: "transparent",
        duration: 1,
        ease: "power1.out",
      });
      gsap.from(".hero-title > p", {
        delay: 1,
        opacity: 0,
        x: -20,
        y: 20,
        stagger: 0.3,
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
      gsap.from(".mob-explore-container", {
        y: 20,
        x: -10,
        opacity: 0,
        delay: 1.5,
        filter: "blur(10px)",
        color: "white",
        duration: 1,
        stagger: 0.15,
        ease: "power1.out",
      });
      const arrowtl = gsap.timeline({ repeat: -1 });
      arrowtl.to(".mob-arrow-dot", {
        scale: "1.5",
        delay: 2,
        backgroundColor: "#da392a",
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      });
      arrowtl.to(".mob-arrow-dot", {
        scale: "1",
        // backgroundColor: "#45474B",
        backgroundColor: "white",
        duration: 0.3,
        stagger: 0.1,
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
          border: "2px solid black",
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
      // leadtl.fromTo(
      //   ".lead-container",
      //   {
      //     boxShadow:
      //       "0 0 5px transparent, 0 0 25px transparent, 0 0 10px transparent, 0 0 200px #transparent",
      //   },
      //   {
      //     boxShadow:
      //       "0 0 5px #da392a, 0 0 25px #da392a, 0 0 10px #da392a, 0 0 200px #da392a",
      //     duration: 2.5,
      //   },
      //   "-=4"
      // );
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
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-3 lg:justify-between  flex-col p-2 py-2  lg:p-5 pt-20">
      <div className="hero-name text-2xl  w-32 overflow-hidden text-black font-bold absolute  lg:text-4xl lg:pl-5 lg:top-9 lg:left-12 xl:left-16 top-6 left-8 md:left-9 pen-text">
        '//e0
      </div>
      <div className="chillax-text absolute top-9 right-12 pr-3 lg:flex gap-2 hidden text-xl italic text-custom-deepgray font-medium">
        <div className="group hover:bg-custom-red hover:-rotate-12  rounded-full transition-all duration-300 hover:delay-300 delay-700 ">
          <div className="opacity-0 group-hover:opacity-100  transition-all duration-300 group-hover:delay-0 delay-500 h-full absolute right-0 rounded-full flex items-center justify-end px-2 text-3xl jetbrains text-white shadow-sm">{`->`}</div>
          <div className=" transition-all px-3 py-1 bg-primary/40 backdrop-blur-sm border border-transparent group-hover:delay-300 delay-500 group-hover:border-custom-red/40 duration-300 rounded-full cursor-pointer group-hover:translate-y-6 group-hover:translate-x-1  group-hover:rotate-12 ease-in">
            github
          </div>
        </div>
        <div className="group hover:bg-custom-red hover:-rotate-12  rounded-full transition-all duration-300 hover:delay-300 delay-700 ">
          <div className="opacity-0 group-hover:opacity-100  transition-all duration-300 group-hover:delay-0 delay-500 h-full absolute right-0 rounded-full flex items-center justify-end px-2 text-3xl jetbrains text-white shadow-sm">{`->`}</div>
          <div className=" transition-all px-3 py-1 bg-primary/40 backdrop-blur-sm border border-transparent group-hover:delay-300 delay-500 group-hover:border-custom-red/40 duration-300 rounded-full cursor-pointer group-hover:translate-y-6 group-hover:translate-x-1  group-hover:rotate-12 ease-in">
            email
          </div>
        </div>
      </div>

      <div className="leading-none chillax-text font-semibold text-custom-deepgray text-[3.15rem] w-full h-full  px-5 lg:px-10 md:text-[6rem] lg:text-[8rem] xl:text-[12rem] 2xl:text-[14rem] flex items-center justify-start lg:justify-center flex-col ">
        <div className="flex justify-center lg:justify-between items-center w-full">
          <div className="hero-title select-none origin-top-left flex border bg-primary rounded-md lg:rounded-3xl uppercase relative lg:pl-1">
            {/* <p className="absolute hidden lg:flex lines w-3/4 h-[1px] top-0 -left-2 lg:-left-5  border-t-[1px] border-black/40 border-dashed"></p>
            <p className="absolute hidden lg:flex lines w-2/5 h-[1px] bottom-0 -left-5  border-t-[1px] border-black/40 border-dashed"></p>
            <p className="absolute hidden lg:flex lines h-[115%] w-[1px] left-0 top-1/2 -translate-y-1/2 border-l-[1px] border-black/40 border-dashed"></p> */}
            <span>d</span>
            <span>e</span>
            <span>s</span>
            <span>i</span>
            <span>g</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <div className="and-sign text-white font-medium lg:rounded-xl relative shadow-2xl bg-custom-deepgray/10">
              <div className="cursor-container text-primary z-40 absolute right-0 top-0">
                <PiCursorLight className="light-cursor h-6 w-6 lg:h-8 lg:w-8 text-black absolute" />
                <PiCursorClick className="click-cursor h-6 w-6 lg:h-8 lg:w-8 absolute text-black" />
              </div>
              <div className="absolute border-[1px] border-black/40 lg:rounded-xl border-dashed w-full h-full">
                <div className="absolute w-3 lg:w-8 h-3 lg:h-8  border-t border-r rounded-tr-3xl border-custom-deepgray -right-3 lg:-right-8 -top-3 lg:-top-8"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-custom-deepgray -left-[2px] -top-[2px] lg:-left-1 lg:-top-1"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-custom-deepgray -right-[2px] -top-[2px] lg:-right-1 lg:-top-1"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-custom-deepgray -left-[2px] -bottom-[2px] lg:-left-1 lg:-bottom-1"></div>
                <div className="absolute w-1 lg:w-3 h-1 lg:h-3 rounded-full bg-custom-deepgray -right-[2px] -bottom-[2px] lg:-right-1 lg:-bottom-1"></div>
              </div>
              &
            </div>
          </div>
          <div className="hero-para text-lg group hidden lg:flex flex-col items-end ps-10 justify-start lg:h-full pt-3 md:pr-2 xl:pt-6 xl:pr-4 lg:w-1/3  lg:text-base  xl:text-xl chillax-text  text-custom-deepgray   leading-snug rounded-3xl italic relative">
            {/* <p>I am A. Akhmadjonov. </p> */}
            <p className=" flex group-hover:pr-2 transition-all duration-1000">
              I craft immersive digital
            </p>

            <p className="  flex group-hover:pr-8 transition-all delay-300 duration-1000">
              solutions that inspire.
            </p>
          </div>
        </div>
        <div className="  flex justify-center lg:justify-end w-full  items-start gap-5 relative">
          {/* <div className="hiddenhero-para hidden lg:flex flex-col items-start justify-end  h-full pb-5 md:pl-3 xl:pb-8 xl:pl-6  text-custom-deepgray chillax-text text-lg jetbrains">
            <div className="hover:pl-3 transition-all duration-700 cursor-pointer">
              github
            </div>
            <div className="hover:pl-3 transition-all duration-700  cursor-pointer">
              email
            </div>
            <div></div>
          </div> */}
          {/* <div className="text-primary hidden lg:flex">&</div> */}
          <div className="uppercase select-none origin-top-left relative  rounded-md lg:rounded-3xl flex lg:px-1 lg:justify-end  hero-title">
            {/* <p className="absolute hidden lg:flex lines w-1/3 h-[1px] top-0 -right-5  border-t-[1px] border-black/40 border-dashed"></p>
            <p className="absolute hidden lg:flex lines w-[103%] h-[1px] bottom-0 -right-2 lg:-right-5  border-t-[1px] border-black/40 border-dashed"></p>
            <p className="absolute hidden lg:flex lines h-[115%] w-[1px] right-0 bottom-1/2 translate-y-1/2 border-l-[1px] border-black/40 border-dashed"></p>
            <p className="absolute hidden lg:flex lines h-[115%] w-[1px] left-0 bottom-1/2 translate-y-1/2 border-l-[1px] border-black/40 border-dashed"></p> */}
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
        <div className="hero-para-small -mt-2 w-full text-sm leading-6 clear-start text-center px-1 md:px-2 flex lg:hidden flex-col items-center pt-3 justify-center jetbrains  lg:text-xl  xl:text-lg chillax-text  text-custom-deepgray  rounded-3xl italic relative">
          <p className="text-pretty">
            I am A. Akhmadjonov. I craft immersive digital solutions that
            inspire.
          </p>

          {/* <p> solutions that inspire.</p> */}
        </div>
      </div>

      <div className=" hidden lg:flex select-none pointer-events-none lead-container p-2 left-1/2 group rounded-tr-full rounded-bl-full lg:rounded-full -translate-x-1/2 absolute bottom-52 flex-col lg:flex-row lg:bottom-5 gap-0 lg:hover:gap-1 transition-all duration-300 delay-1000 hover:delay-500 items-center uppercase justify-center text-2xl">
        <div className="lead-border  left-0 top-0 rounded-tr-full rounded-bl-full lg:rounded-full -z-10 lg:z-40 absolute w-full h-full">
          <div className="lead-cursor-container z-40 absolute right-0 bottom-0">
            <PiCursorLight className="light-cursor-lead h-5 w-5 lg:h-8 lg:w-8 text-black absolute" />
            <PiCursorClick className="click-cursor-lead opacity-0 h-5 w-5 lg:h-8 lg:w-8 absolute text-black" />
          </div>
        </div>
        <div className="overflow-hidden transition-all group-hover:delay-0 lg:delay-500 duration-700 chillax-text opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-80 bg-black p-0 group-hover:px-6 group-hover:py-2  rounded-full font-medium text-white">
          Gallery
        </div>

        <div className="lead-explore overflow-hidden transition-all duration-700 opacity-0 delay-500 lg:delay-[1200ms] group-hover:delay-0 chillax-text origin-center text-center group-hover:text-black group-hover:max-w-0 group-hover:translate-y-[150%] group-hover:p-0 max-w-80 bg-black px-6 py-2 rounded-full font-medium text-white">
          Explore
        </div>
        <div className="overflow-hidden transition-all group-hover:delay-0 lg:delay-500 duration-700 chillax-text opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-80 bg-black p-0 group-hover:px-6 group-hover:py-2 rounded-full font-medium text-white">
          Projects
        </div>
      </div>

      <div className="flex mob-explore-container  self-end lg:hidden w-full italic  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className=" w-full bg-black text-white shadow-custom-deepgray backdrop-blur-sm shadow-2xl text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-2xl justify-between lg:rounded-none lg:rounded-tl-[50px]"
        >
          {/* <div className="w-full h-full absolute bg-custom-deepgray/60  top-10 left-0 blur-sm"></div> */}
          <div className=" hidden lg:flex w-8 h-1/3 absolute left-0 -translate-x-full bg-primary bottom-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          <div className=" hidden lg:flex w-8 h-1/2 absolute right-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          {/* <div className="hidden w-8 h-1/2 absolute left-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-bl-[30px]"></div>
          </div> */}
          <p className="text-center  technor-text lg:pb-1 font-extralight">
            Explore
          </p>
          <div className="flex h-full  gap-1 lg:gap-2 items-center ">
            <div className="flex lg:flex-col  items-center gap-1 lg:gap-2 ">
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
              <div className="mob-arrow-dot lg:hidden h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center flex-col ">
              <div className="mob-arrow-dot h-1 lg:h-3 w-1 lg:w-3 bg-white rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
