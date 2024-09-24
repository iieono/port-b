"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import JapaneseInkMouseTrail from "@/components/JapaneseInkMouseTrail";
import WaveBackground from "@/components/WaveBackground";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
  useGSAP(() => {
    const menutl = gsap.timeline();
    menutl.from(".menu-container > div", {
      y: 20,
      duration: 0.6, // longer duration for smoother transition
      delay: 0.7,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)",
    });
    menutl.from(".menu-container > div.small", {
      width: "1rem",
      height: "1rem",
      duration: 0.6, // longer duration for smoother transition

      stagger: 0.3,
      ease: "elastic.out(1, 0.5)",
    });

    menutl.from(
      ".menu-container > div.large",
      {
        width: "1rem",
        height: "1rem",
        duration: 0.6, // increase duration for more noticeable elastic effect
        ease: "elastic.out(1, 0.5)", // elastic ease for a springy effect
      },
      "-=0.5" // overlap slightly before the first animation ends
    );
  });

  return (
    <main
      className=" antialiased bg-primary h-screen"
      style={{ perspective: "1000px" }}
    >
      {/* <WaveBackground /> */}
      <div className="w-full absolute top-0 left-0 backdrop-blur-sm flex items-center justify-between  py-3 px-5">
        <div className="pen-text text-secondary text-3xl font-extrabold">
          '//e0
        </div>
        <div className="menu-container flex items-center gap-1 cursor-pointer">
          <div className="h-6 w-2 large bg-bg rounded-full"></div>
          <div className="h-3 w-2 small bg-bg rounded-full"></div>
          <div className="h-6 w-2 large bg-bg rounded-full"></div>
        </div>
        <div className="chillax-text contact-container hidden lg:flex text-secondary text-2xl font-extalight">
          <div>email</div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
      {/* <JapaneseInkMouseTrail /> */}
    </main>
  );
}
