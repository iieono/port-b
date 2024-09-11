"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiCursorLight } from "react-icons/pi";
import { PiCursorClick } from "react-icons/pi";

export default function Home() {
  const pathname = usePathname();
  const [percent, setPercent] = useState(0);
  const router = useRouter();
  // percent
  useEffect(() => {
    const minIncrement = 6;
    const maxIncrement = 15;
    const maxPercent = 100;
    let currentValue = 0;

    const increment = () => {
      const randomIncrement =
        Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) +
        minIncrement;
      if (currentValue + randomIncrement > maxPercent) {
        setPercent(maxPercent);
        return;
      }
      currentValue += randomIncrement;
      setPercent(currentValue);
      gsap.to(
        {},
        {
          duration: 0.3, // Duration of each increment
          onComplete: increment,
        }
      );
    };

    increment();

    return () => {
      gsap.killTweensOf({}); // Cleanup gsap animations on unmount
    };
  }, []);

  useEffect(() => {
    if (percent === 100) {
      // Animate the hiding of the .welcome-container
      gsap.to(".welcome-container", {
        visibility: "hidden",
        duration: 0,
        delay: 1,
        onComplete: () => {
          // Navigate to /home after hiding the .welcome-container
          router.push("/home");
        },
      });
      const layouttl = gsap.timeline();
      if (pathname == "/home") {
        if (window.innerWidth > 1024) {
          gsap.from(".hamburger-container", {
            duration: 2,
            y: 100,
            x: -100,
            filter: "blur(10px)",
            ease: "power2.out",
          });
        } else {
          gsap.from(".hamburger-container", {
            duration: 3,
            // y: 40,
            opacity: 0,
            filter: "blur(10px)",
            ease: "power2.out",
          });
        }
      }
    }
  }, [percent, router]);
  return (
    <div className=" h-full w-full flex items-center justify-center">
      <div className="percent-container fixed bg-black  w-full h-full  z-50 flex items-end justify-end text-custom-red boxing-text text-5xl lg:text-[10rem] active">
        <div className=" w-full h-full flex items-center lg:items-end p-5 lg:p-20 justify-center lg:justify-end grainy-bg active">
          {percent}%
        </div>
      </div>
    </div>
  );
}
