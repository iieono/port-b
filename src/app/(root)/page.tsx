"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  const roundRef = useRef<HTMLDivElement | null>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const initialPosition = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Fixed speed of movement in pixels per frame
  const speed = 0.05; // Adjust this value to control the movement speed
  const maxDistance = 40; // Maximum distance the element can move from its initial position

  useEffect(() => {
    return;
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const updatePosition = () => {
      if (roundRef.current) {
        const rect = roundRef.current.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calculate the distance to the target
        const dx =
          targetPosition.current.x - (elementCenterX + position.current.x);
        const dy =
          targetPosition.current.y - (elementCenterY + position.current.y);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 0) {
          // Normalize direction vector and scale by speed
          const moveX = (dx / distance) * speed;
          const moveY = (dy / distance) * speed;

          // Update position with bounds
          position.current.x += moveX;
          position.current.y += moveY;

          // Calculate the distance from the initial position
          const distFromInitial = Math.sqrt(
            Math.pow(position.current.x, 2) + Math.pow(position.current.y, 2)
          );

          // Constrain the movement within the maxDistance
          if (distFromInitial > maxDistance) {
            const scale = maxDistance / distFromInitial;
            position.current.x *= scale;
            position.current.y *= scale;
          }

          // Apply the transform with the -50%, -50% centering and offset by the current position
          roundRef.current.style.transform = `translate(-50%, -50%) translate(${position.current.x}px, ${position.current.y}px)`;
        }
      }

      // Request the next frame update
      requestAnimationFrame(updatePosition);
    };

    if (roundRef.current) {
      // Set the initial position
      const rect = roundRef.current.getBoundingClientRect();
      initialPosition.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    window.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-3 lg:justify-between  flex-col p-2 py-5  lg:p-5 pt-20">
      <div className=" text-2xl  text-primary absolute  lg:text-4xl lg:pl-5 lg:top-8 lg:left-12 xl:left-16 top-6 left-8 md:left-9 pen-text">
        '//e0
      </div>
      {/* <div
        ref={roundRef}
        className="hidden lg:flex  h-[60%] 2xl:h-[90%] aspect-square z-20 bg-primary/5  backdrop-blur-sm shadow-2xl blur-sm rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 top-1/2"
      ></div> */}

      <div className="leading-none chillax-text font-semibold text-custom-red text-[3.15rem] w-full h-full  px-5 lg:px-10 md:text-[6rem] lg:text-[8rem] xl:text-[12rem] 2xl:text-[14rem] flex items-start justify-start lg:justify-center flex-col ">
        <div className="flex justify-between items-center w-full">
          <div className=" ">
            DESIGNER
            <span className="text-primary lg:hidden lg:text-4xl">&</span>
          </div>
          <div className="text-lg hidden lg:flex flex-col items-end ps-10 justify-start lg:h-full pt-3 md:pr-2 xl:pt-8 xl:pr-3 lg:w-1/3  lg:text-base  xl:text-lg perma font-light text-primary leading-snug rounded-3xl italic relative">
            {/* <p>I am A. Akhmadjonov. </p> */}
            <p> I craft immersive digital </p>

            <p> solutions that inspire.</p>
          </div>
        </div>
        <div className="self-end flex lg:justify-end w-full  items-start gap-5 relative">
          <div className="hidden lg:flex flex-col items-start justify-end  w-full h-full pb-5 md:pl-3 xl:pb-11 xl:pl-6  text-primary perma text-base jetbrains">
            <div className="hover:pl-3 transition-all duration-700">github</div>
            <div className="hover:pl-3 transition-all duration-700">email</div>
            <div></div>
          </div>
          {/* <div className="text-primary hidden lg:flex">&</div> */}
          <div className="">DEVELOPER</div>
        </div>
        <div className="text-sm leading-6 px-1 md:px-2 flex lg:hidden flex-col items-start pt-3 justify-center jetbrains  lg:text-xl  xl:text-lg jetbrains  text-primary  rounded-3xl italic relative">
          <p>Hi! I am A. Akhmadjonov. </p>
          <p> I craft immersive digital </p>

          <p> solutions that inspire.</p>
        </div>
      </div>

      {/* <div className="w-full gap-3 py-2 hidden lg:flex flex-col items-center lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-3 text-primary  jura font-extralight justify-start">
        <div className="flex lg:self-end shadow-2xl  gap-3 w-72 lg:w-auto flex-col lg:flex-row text-lg lg:text-4xl items-start lg:items-center p-2 lg:px-2 lg:py-2 rounded-xl transition-all duration-700 rounded-bl-[100px] rounded-tr-[100px] lg:rounded-xl lg:rounded-br-[100px] lg:rounded-tl-[100px] uppercase bg-primary ">
          <div className=" self-end hover:shadow-2xl lg:mb-10 sharpie-text transition-all duration-700 rounded-full bg-custom-deepgray/100 backdrop-blur-lg px-4 py-2">
            See my works
          </div>
          <div className=" text-5xl sharpie-text self-center text-custom-deepgray">
            &
          </div>
          <div className=" rounded-full kalam-text hover:shadow-2xl transition-all duration-700 bg-custom-deepgray/100 backdrop-blur-lg lg:mt-10 px-4 py-2">
            Reach out
          </div>
        </div>
      </div> */}

      <div className="flex self-end lg:hidden w-full italic  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className="absolute w-auto bg-primary backdrop-blur-lg shadow-2xl text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-between lg:rounded-none lg:rounded-tl-[50px]"
        >
          <div className=" hidden lg:flex w-8 h-1/3 absolute left-0 -translate-x-full bg-primary bottom-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          <div className=" hidden lg:flex w-8 h-1/2 absolute right-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          {/* <div className="hidden w-8 h-1/2 absolute left-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-bl-[30px]"></div>
          </div> */}
          <p className="text-center text-custom-deepgray technor-text lg:pb-1 font-extralight">
            Explore
          </p>
          <div className="flex h-full  gap-1 lg:gap-2 items-center ">
            <div className="flex lg:flex-col  items-center gap-1 lg:gap-2 ">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="lg:hidden h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
            <div className="flex items-center flex-col ">
              <div className="h-1 lg:h-3 w-1 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
