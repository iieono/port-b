"use client";

import React, { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [percent, setPercent] = useState<number>(0);
  const router = useRouter();
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const minIncrement = 15;
    const maxIncrement = 20;
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
          duration: 0.7,
          onComplete: increment,
        }
      );
    };

    increment();

    return () => {
      gsap.killTweensOf({});
    };
  }, []);

  useEffect(() => {
    if (percent === 100) {
      gsap.to(".welcome-container", {
        visibility: "hidden",
        duration: 0,
        delay: 1,
        onComplete: () => {
          router.push("/home");
        },
      });

      if (pathname === "/home") {
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
            opacity: 0,
            filter: "blur(10px)",
            ease: "power2.out",
          });
        }
      }
    }
  }, [percent, router, pathname]);

  useGSAP(() => {
    digitRefs.current.forEach((ref, index) => {
      if (ref) {
        const digit = percent.toString().padStart(3, "0")[index];
        gsap.to(ref, {
          y: `-${parseInt(digit) * 10}%`,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [percent]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="percent-container fixed bg-white w-full h-full z-50 flex items-end justify-end text-custom-red font-bold sharpie-text text-4xl lg:text-[10rem] active">
        <div className="w-full h-full flex items-center lg:items-end p-5 lg:p-20 justify-center lg:justify-end grainy-bg ">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative w-[0.6em] h-[1em] overflow-hidden mx-[2px]"
            >
              <div
                ref={(el) => (digitRefs.current[index] = el)}
                className="absolute top-0 left-0 flex flex-col"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <span
                    key={num}
                    className="flex justify-center items-center h-[1em] w-[0.6em]"
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
