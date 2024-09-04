"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useGSAP(() => {
    if (window.innerWidth > 1024) {
      gsap.from(hamRef.current, {
        duration: 2,
        y: 100,
        ease: "power2.out",
      });
    }
  });

  const pathname = usePathname();
  const mainContainerRef = useRef(null);
  const hamRef = useRef(null);
  const innerNavRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [funText, setFunText] = useState<string>("");
  // fun texts
  const attributes: Record<string, string> = {
    "/": "Figuratively.",
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
  return (
    <main
      className="min-h-screen antialiased bg-custom-red overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={mainContainerRef}
        className={`h-screen main-container flex flex-col  p-1 bg-primary rounded-none ${
          navOpen && "lg:rounded-bl-none"
        } lg:rounded-tr-none lg:rounded-br-none  lg:rounded-[100px] transition-all duration-700 `}
      >
        <div className="h-full transition-all duration relative rounded-3xl lg:rounded-tr-none lg:rounded-[100px]  bg-custom-red">
          {children}
          <div
            ref={hamRef}
            className="absolute overflow-hidden flex items-center  justify-center w-20 h-20 lg:bg-custom-gray top-0 lg:bottom-0 lg:top-auto cursor-pointer right-0 lg:left-0 rounded-full lg:border-4 border-primary"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <div
              ref={innerNavRef}
              className="nav-open-1 transition-all duration-700 delay-500 absolute   flex items-center flex-col gap-1 justify-center z-20 "
            >
              <div
                className={`${
                  navOpen ? "w-5 h-1 bg-custom-red" : "w-8 h-2 bg-primary"
                }  rounded-full transition-all duration-700 lg:bg-primary`}
              ></div>
              <div
                className={`${
                  navOpen ? "w-8 h-2 bg-custom-red" : "w-5 h-1 bg-primary"
                }  rounded-full transition-all duration-700  lg:bg-primary`}
              ></div>
            </div>
            <div className="nav-open-2 transition-all duration-700 delay-300 flex items-center flex-col absolute -translate-x-16  translate-y-16  rotate-45  z-40 w-full h-full rounded-full justify-center">
              <div className="w-6 h-1.5 bg-primary rounded-full rotate-[45deg] translate-x-3 "></div>
              <div className="w-10 h-1.5 bg-primary rounded-full"></div>
              <div className="w-6 h-1.5 bg-primary rounded-full -rotate-[45deg] translate-x-3"></div>
            </div>
          </div>
        </div>
        <div
          className={`w-full ${
            navOpen ? "h-full lg:h-28 rounded-t-none" : "h-0 rounded-t-full"
          } overflow-hidden flex justify-between  transition-all bg-primary lg:rounded-t-none lg:bg-transparent duration-700 gap-5 left-0 bottom-0 absolute lg:relative `}
        >
          <div className="absolute select-none opacity-60 bottom-1 left-0 right-0 w-full h-full flex items-end justify-center text-xs pointer-events-none kalam-text">
            {funText}
          </div>
          <div className="h-full w-full flex flex-col lg:flex-row  items-center justify-center gap-10 lg:gap-0 lg:justify-between px-20 text-5xl lg:text-5xl uppercase array-text pb-0 font-light">
            <Link href="/" passHref>
              <div
                data-attr="Figuratively."
                className={`nav-item px-4 py-2 rounded-full ${
                  pathname === "/" ? "active" : ""
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
