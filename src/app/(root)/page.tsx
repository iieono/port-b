"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [percent, setPercent] = useState<number>(0);
  const router = useRouter();

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

  const separateDigits = (number: number): string[] => {
    return number.toString().split("");
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="percent-container fixed bg-black w-full h-full z-50 flex items-end justify-end text-custom-red chillax-text text-3xl lg:text-[10rem] active">
        <div className="w-full h-full flex items-center lg:items-end p-5 lg:p-20 justify-center lg:justify-end grainy-bg active">
          {separateDigits(percent).map((digit, index) => (
            <div
              key={index}
              className="relative w-[0.8em]  h-[1em] overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 flex flex-col transition-transform duration-500"
                style={{
                  transform: `translateY(calc(-${parseInt(
                    digit
                  )} * 100% / 10))`,
                }}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <span
                    key={num}
                    className={`flex justify-center items-center transition-all duration-1000 h-[1em] w-[1em] ${
                      num.toString() !== digit ? "blur-[10px] scale-50" : ""
                    }`}
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
