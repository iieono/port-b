"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect, useState } from "react";

type GalleryItemProps = {
  size?: "small" | "medium" | "large"; // Define as per your use case
  index: number; // Define index as number
};

function GalleryItem({ size = "small", index }: GalleryItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(
        itemRef.current,
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
          delay: index * 0.1, // Stagger based on index
        }
      );
    }
  }, [isVisible, index]);

  return (
    <div
      ref={itemRef}
      className={`gallery-item ${
        size === "large" ? "large" : ""
      } relative flex items-center justify-center bg-custom-deepgray/20 text-custom-primary`}
    >
      gallery hellooooooooooooooooooooooooo
    </div>
  );
}

export default GalleryItem;
