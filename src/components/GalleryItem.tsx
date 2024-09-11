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
        y: 80,
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
  });
  return (
    <div
      className={`gallery-item ${
        size == "large" ? "large" : ""
      } relative flex items-center justify-center bg-custom-deepgray/20 text-custom-primary `}
    >
      gallery hellooooooooooooooooooooooooo
    </div>
  );
}

export default GalleryItem;
