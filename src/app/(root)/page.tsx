"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

export default function Component() {
  const pathname = usePathname();
  const router = useTransitionRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Overlay animation (bottom to top)
    tl.to(overlayRef.current, {
      y: "-100%",
      duration: 2.5,
      ease: "power3.inOut",
    });

    // Text container animation
    tl.to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=2"
    );

    // Color transition
    tl.to(
      containerRef.current,
      {
        backgroundColor: "#212121",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=1"
    );

    // Welcome text typing animation
    const welcomeText = "WELCOME";
    welcomeRef.current!.innerHTML = welcomeText
      .split("")
      .map((char) => `<span class="welcome-char">${char}</span>`)
      .join("");

    gsap.from(".welcome-char", {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 1.5,
    });

    // Text color change
    tl.to(
      ".welcome-char",
      {
        color: "#f6f6f6",
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.05,
        // onComplete: () => {
        //   setTimeout(() => {
        //     router.push("/home");
        //   }, 1000);
        // },
      },
      "-=0.5"
    );
    tl.to(overlayRef.current, {
      y: "100%",
      duration: 0,
      ease: "power3.inOut",
    });
    tl.to(overlayRef.current, {
      y: "0%",
      duration: 1.25,
      ease: "power3.in",
      onComplete: () => {
        router.push("/home");
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center relative bg-bg overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        ref={overlayRef}
        className="absolute z-50 inset-0 bg-red-600"
        style={{ transform: "translateY(100%)" }}
        aria-hidden="true"
      ></div>
      <div
        ref={textRef}
        className="text-5xl lg:text-8xl font-bold flex flex-col gap-8 items-center text-red-600 opacity-0 transform translate-y-10"
        style={{ zIndex: 10 }}
      >
        {/* <div className="welcome-dot-container flex items-center gap-1 cursor-pointer">
          <div className="h-4 w-4 large bg-bg rounded-full"></div>
          <div className="h-4 w-4 small bg-bg rounded-full"></div>
          <div className="h-4 w-4 large bg-bg rounded-full"></div>
        </div> */}
        <div
          ref={welcomeRef}
          className="flex chillax-text"
          aria-label="Welcome"
        ></div>
      </div>
    </div>
  );
}
