"use client";

import GalleryItem from "@/components/GalleryItem";
import React from "react";

function Gallery() {
  const galleryItems = [
    { size: "small" },
    { size: "small" },
    { size: "large" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
    { size: "small" },
  ];

  return (
    <div className="h-full relative w-full flex items-start justify-evenly gap-3 overflow-hidden text-primary p-1 pb-0 lg:p-0">
      <div className="absolute w-full z-10 h-5 bg-black/80 shadow-2xl blur-2xl top-0 self-center"></div>
      <div className="absolute w-full z-10 h-5 bg-black/80 shadow-2xl blur-2xl bottom-0 self-center"></div>
      <div className="absolute lg:relative top-6 left-8 text-xl p-1">menu</div>
      <div className="w-11/12 lg:w-3/5 flex flex-col h-full justify-start items-center gallery-container overflow-auto">
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} size={item.size} index={index} />
        ))}
      </div>
      <div className="absolute lg:relative top-6 right-8 text-xl p-1">info</div>
    </div>
  );
}

export default Gallery;
