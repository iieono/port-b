"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import WaveBackground from "@/components/WaveBackground";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);
  const [funText, setFunText] = useState<string>("");

  // Fun texts for different routes
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
    setNavOpen(false);
  }, [pathname]);

  useGSAP(() => {
    if (pathname == "/gallery") {
      const menutl = gsap.timeline();
    }
    if (pathname == "/home") {
      const menutl = gsap.timeline();
      menutl.from(".menu-container > div", {
        y: 20,
        duration: 0.6,
        delay: 1,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
      });
      menutl.from(".menu-container > div.small", {
        width: "1rem",
        height: "1.5rem",
        duration: 0.6,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
      });

      menutl.from(
        ".menu-container > div.large",
        {
          width: "1rem",
          height: "1rem",
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5"
      );
      menutl.from(
        ".name-text",
        {
          clipPath: "inset(100% 0 0 0)",
          y: 100,
          opacity: 0,
          rotationX: -45,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.2"
      );
      menutl.from(
        ".connect-text > div",
        {
          clipPath: "inset(100% 0 0 0)",
          y: 100,
          opacity: 0,
          rotationX: -45,
          stagger: 0.3,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.5"
      );
    }
  }, [pathname]);
  useGSAP(() => {
    gsap.to(".menu-container > .large:first-child", {
      x: navOpen ? 5 : 0,
      height: navOpen ? "1.5rem" : "1.5rem",
      rotate: navOpen ? 45 : 0,
      delay: navOpen ? 0.3 : 0.8,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(".menu-container > .large:last-child", {
      x: navOpen ? -5 : 0,
      height: navOpen ? "0.75rem" : "1.5rem",
      marginTop: navOpen ? "0.75rem" : "0rem",
      rotate: navOpen ? -45 : 0,
      delay: navOpen ? 0.3 : 0.8,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(".menu-container > .small", {
      marginTop: navOpen ? "0.75rem" : "0rem",
      backgroundColor: navOpen ? "transparent" : "#f1f1f1",
      delay: navOpen ? 0 : 0.9,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  }, [navOpen]);
  const handleMouseEnter = () => {
    gsap.to(".menu-container > div.small", {
      marginBottom: "0.75rem",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".menu-container > div.small", {
      marginBottom: "0rem",
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <main
      className="antialiased bg-bg h-screen"
      style={{ perspective: "1000px" }}
    >
      {/* <WaveBackground /> */}
      <div className="w-full absolute top-0 left-0 backdrop-blur-sm px-5">
        <div className="main-container grid grid-cols-[1fr_auto_1fr] items-center justify-center">
          <div className="name-text pen-text opacity-0 lg:opacity-100 select-none  text-secondary text-3xl font-extrabold">
            '//e0
          </div>

          <div
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={() => {
              setNavOpen((prev) => !prev);
            }}
            className={`menu-container  transition-all h-16 duration-700 grid grid-flow-col group items-center gap-1 cursor-pointer ${
              navOpen && ""
            }`}
          >
            <div className="h-6 w-2 large bg-primary rounded-full"></div>
            <div className={`h-3 w-2 small bg-primary rounded-full relative`}>
              <div
                className={` absolute navbar shadow-2xl shadow-bg/10 backdrop-blur-3xl flex flex-col lg:flex-row gap-3 z-[99999999] justify-between  overflow-hidden text-accent text-2xl lg:text-xl chillax-text uppercase rounded-2xl left-1/2 -translate-x-1/2 ${
                  navOpen
                    ? "h-[90vh] sm:h-[92vh] lg:h-[92vh] w-[96vw] lg:w-[98vw] top-10 active bg-oriolas"
                    : " top-0 h-3 w-2 bg-primary"
                }`}
              >
                <div className="font-bold text-6xl p-3 lg:text-8xl">
                  <div className="nav-item">Home</div>
                  <div className="nav-item">About</div>
                  <div className="nav-item">Gallery</div>
                  <div className="nav-item">Projects</div>
                </div>
                {/* <div className="absolute lg:hidden lowercase right-4 -bottom-2 py-10  text-bg  text-9xl pen-text  font-bold">
                  //////e0
                </div> */}

                <div className="lowercase w-full text-5xl items-end flex justify-end self-end">
                  <div className="flex items-end lg:hidden bg-secondary text-bg rounded-tl-3xl px-5 border-t-4 border-l-4 border-bg font-bold text-2xl uppercas gap-3">
                    <div>connect</div>
                  </div>
                  {/* <div className="hidden lg:flex capitalize text-bg font-bold text-9xl styro-text px-6 py-2">
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                  </div> */}
                </div>
              </div>
            </div>
            <div className="h-6 w-2 large bg-primary rounded-full"></div>
          </div>

          <div className="connect-text chillax-text overflow-hidden contact-container hidden lg:flex items-center gap-1 text-secondary text-xl font-extalight justify-self-end">
            <div className="w-2 h-2 rounded-2xl bg-oriolas mr-3"></div>
            <div className="rounded-full border border-accent hover:border-oriolas px-3 py-[2px]">
              github
            </div>
            <div className="rounded-full border border-accent hover:border-oriolas px-3 py-[2px]">
              email
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full">{children}</div>
      {/* <JapaneseInkMouseTrail /> */}
    </main>
  );
}
