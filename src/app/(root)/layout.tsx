"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    const layouttl = gsap.timeline();
    if (window.innerWidth > 1024) {
      layouttl.from(hamRef.current, {
        duration: 2,
        y: 100,
        x: -100,
        filter: "blur(10px)",
        ease: "power2.out",
      });
    } else {
      layouttl.from(hamRef.current, {
        duration: 3,
        // y: 40,
        opacity: 0,
        filter: "blur(10px)",
        ease: "power2.out",
      });
    }
  });

  const pathname = usePathname();
  const mainContainerRef = useRef(null);
  const hamRef = useRef(null);
  const innerNavRef = useRef(null);
  const funTextRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [funText, setFunText] = useState<string>("");
  // fun texts
  const attributes: Record<string, string> = {
    "/home": "Figuratively.",
    "/about":
      "The page where I make myself sound way cooler than I actually am.",
    "/gallery": "My digital show-off gallery.",
    "/projects": "My world domination (or to-do app) attempts.",
  };

  useEffect(() => {
    // Set funText based on the current pathname
    setFunText(attributes[pathname] || "");
    // if (window.innerWidth <= 1024) {
    setNavOpen(false);
    // }
  }, [pathname]);
  useLayoutEffect(() => {
    gsap.fromTo(
      ".menu-pathname",
      {
        y: 40,
        x: -40,
      },
      {
        y: 0,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      funTextRef.current,
      {
        rotate: "5deg",
        y: 20,
      },
      {
        ease: "power2.out",
        duration: 0.7,
        y: 0,
        rotate: "0deg",
      }
    );
  }, [pathname]);
  return (
    <main
      className=" antialiased bg-white grainy-bg overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={mainContainerRef}
        className={`h-screen main-container flex flex-col bg-white rounded-none ${
          navOpen && " delay-0"
        }   transition-all duration-700 delay-700  `}
      >
        <div
          className={`${
            navOpen
              ? "h-full lg:h-[calc(100%-7rem)] lg:rounded-b-[100px]"
              : "h-full delay-700 lg:delay-500 duration-1000"
          } inner-container transition-all duration-1000 relative  bg-black `}
        >
          <div
            className={`${navOpen && "lg:rounded-b-[100px]"}
            child-container w-full  h-full grainy-bg  transition-all duration-700 delay-300 overflow-hidden `}
          >
            {children}
          </div>
          <div
            ref={hamRef}
            className="hamburger-container absolute overflow-hidden flex items-center  justify-center lg:justify-start w-20 lg:w-44 z-20 rounded-br-none rounded-bl-none rounded-tl-none h-14 lg:h-auto  top-3 lg:bottom-9 lg:top-auto cursor-pointer right-0 lg:left-20 lg:pl-1 "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <div
              ref={innerNavRef}
              className="nav-open-1 transition-all duration-700 delay-500 absolute   flex items-center flex-col gap-1 justify-center z-20 "
            >
              <div
                className={`${
                  navOpen
                    ? "w-5 h-1 bg-custom-red lg:bg-custom-deepgray"
                    : "w-8 h-2 bg-white lg:bg-white lg:delay-500"
                }  rounded-full transition-all duration-700 `}
              ></div>
              <div
                className={`${
                  navOpen
                    ? "w-8 h-2 bg-custom-red lg:bg-white"
                    : "w-5 h-1 bg-white lg:bg-custom-deepgray lg:delay-500"
                }  rounded-full transition-all duration-700  `}
              ></div>
            </div>
            <div className="nav-open-2 transition-all duration-700 delay-300 flex items-center flex-col absolute -translate-x-16  translate-y-16  rotate-45  z-40  rounded-full justify-center">
              <div className="w-5 h-1.5 bg-primary rounded-full rotate-[45deg] translate-x-3 "></div>
              <div className="w-8 h-1.5 bg-primary rounded-full"></div>
              <div className="w-5 h-1.5 bg-primary rounded-full -rotate-[45deg] translate-x-3"></div>
            </div>
            <div className="hidden lg:flex pl-12 h-min text-custom-deepgray chillax-text font-semibold uppercase text-2xl overflow-hidden">
              <span className="menu-pathname inline-block">
                {pathname.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-full ${
            navOpen
              ? "h-full lg:h-28 rounded-t-none duration-700"
              : "h-0 rounded-t-full  lg:delay-500 duration-1000"
          } overflow-hidden flex justify-between  transition-all bg-white backdrop-blur-3xl lg:rounded-t-none lg:bg-white text-black lg:text-black gap-5 left-0 bottom-0 absolute lg:relative `}
        >
          <div
            ref={funTextRef}
            className="absolute select-none opacity-60 bottom-1 left-0 right-0 w-full h-full flex items-end justify-center text-xs pointer-events-none kalam-text"
          >
            {funText}
          </div>
          <div className="h-full w-full flex flex-col lg:flex-row  items-center justify-center gap-10 lg:gap-0 lg:justify-between px-20 text-5xl lg:text-5xl uppercase array-text pb-0 font-light">
            <Link href="/home" passHref>
              <div
                data-attr="Figuratively."
                className={`nav-item px-4 py-2 rounded-full ${
                  pathname === "/home" ? "active" : ""
                }`}
              >
                Home
              </div>
            </Link>

            <Link href="/about" passHref>
              <div
                data-attr="The page where I make myself sound way cooler than I actually am."
                className={`nav-item transition-all duration-300 ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </div>
            </Link>

            <Link href="/gallery" passHref>
              <div
                data-attr="My digital show-off gallery."
                className={`nav-item transition-all duration-300 ${
                  pathname === "/gallery" ? "active" : ""
                }`}
              >
                Gallery
              </div>
            </Link>

            <Link href="/projects" passHref>
              <div
                data-attr="My world domination (or to-do app) attempts."
                className={`nav-item transition-all duration-300 ${
                  pathname === "/projects" ? "active" : ""
                }`}
              >
                Projects
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
