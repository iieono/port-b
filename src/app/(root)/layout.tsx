"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import { useState } from "react";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <main className="min-h-screen antialiased bg-custom-red overflow-hidden">
      <div className="h-screen flex flex-col  p-1 bg-white rounded-b-none rounded-none lg:rounded-[100px] ">
        <div className="h-full relative rounded-3xl lg:rounded-[100px]  bg-custom-red">
          {children}
          <div
            className="absolute flex items-center  justify-center w-20 h-20 lg:bg-custom-gray top-0 lg:bottom-0 lg:top-auto cursor-pointer right-0 lg:left-0 rounded-full lg:border-4 border-white"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <div className="flex items-center flex-col gap-1 justify-center z-20 ">
              <div
                className={`${
                  navOpen ? "w-5 h-1 bg-custom-red" : "w-8 h-2 bg-white"
                }  rounded-full transition-all duration-700 lg:bg-white`}
              ></div>
              <div
                className={`${
                  navOpen ? "w-8 h-2 bg-custom-red" : "w-5 h-1 bg-white"
                }  rounded-full transition-all duration-700  lg:bg-white`}
              ></div>
            </div>
            {/* <CiLocationArrow1 className="text-white text-5xl pt-1 pr-1" /> */}
          </div>
        </div>
        <div
          className={`w-full ${
            navOpen ? "h-full lg:h-28 rounded-t-none" : "h-0 rounded-t-full"
          } overflow-hidden flex justify-between   transition-all bg-white lg:rounded-t-none lg:bg-transparent duration-700 gap-5 left-0 bottom-0 absolute lg:relative `}
        >
          <div className="h-full w-full flex flex-col lg:flex-row  items-center justify-center gap-10 lg:gap-0 lg:justify-between px-20 text-4xl uppercase raleway font-light">
            <div>Home</div>
            <div>About</div>
            <div>Gallery</div>
            <div>Projects</div>
          </div>
        </div>
      </div>
    </main>
  );
}
