"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { PiCursorClick, PiCursorLight } from "react-icons/pi";

function GalleryItem({ size = "small" }) {
  useGSAP(() => {
    const galleritemtl = gsap.timeline();
    galleritemtl.fromTo(
      ".gallery-item",
      {
        y: 100,
        opacity: 0,
        x: -10,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power1.inOut",
        delay: 1,
        stagger: 0.3,
      }
    );
    galleritemtl.to(".gallery-click-cursor", {
      opacity: 0,
      duration: 0,
    });
    galleritemtl.to(".gallery-cursor-container", {
      x: () => 200,
      y: () => 40,
      delay: 0.5,
      stagger: 0.2,
      opacity: 0,
      duration: 1.3,
    });
  });
  return (
    <div
      className={`gallery-item ${
        size == "large" && "large"
      } relative flex items-center justify-center bg-custom-deepgray/20 text-custom-primary `}
    >
      <div className="gallery-cursor-container text-custom-red z-50 absolute right-20 bottom-20 bg-black">
        <PiCursorLight className="gallery-light-cursor h-5 w-5 lg:h-8 lg:w-8 text-custom-red absolute" />
        <PiCursorClick className="gallery-click-cursor h-5 w-5 lg:h-8 lg:w-8 absolute text-custom-red" />
      </div>
      gallery hellooooooooooooooooooooooooo
    </div>
  );
}

export default GalleryItem;
