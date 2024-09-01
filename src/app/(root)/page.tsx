import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-5 lg:justify-between  flex-col p-2 py-5  lg:p-0 pt-24 lg:pt-20 lg:px-20">
      <div className="leading-none sharpie-text text-[4rem] w-full px-5 lg:px-10 md:text-[8rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[18rem] flex items-start justify-start lg:justify-center flex-col ">
        <p className="">
          DESIGNER <span className="text-primary">&</span>
        </p>
        <p>DEVELOPER</p>
      </div>
      <div className="w-full lg:h-full flex flex-col items-start lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-10 text-primary technor-text font-light justify-start">
        <p className="leading-snug rounded-full lg:bg-primary lg:text-black lg:px-6 lg:py-4">
          {/* <span>I am A. Akhmadjonov. </span> */}
          {/* <br /> */}
          <span>Crafting immersive digital </span>
          <br className="md:hidden" />
          <span>solutions that inspire.</span>
        </p>
      </div>

      <div className="flex self-end w-full items-end uppercase justify-center">
        <div className="absolute bg-primary text-4xl lg:text-8xl bottom-0 right-0 px-8 py-4 gap-3 lg:gap-6 flex items-center rounded-tl-[40px]">
          <div className="w-8 h-1/3 absolute left-0 -translate-x-full bg-primary bottom-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          <div className="w-8 h-1/2 absolute right-0 -translate-y-full bg-primary top-0">
            <div className="w-full h-full bg-custom-red rounded-br-[30px]"></div>
          </div>
          <p className="text-center mb-1 lg:mb-3">EXPLORE</p>
          <div className="flex h-full  gap-1 lg:gap-3 items-center">
            <div className="flex flex-col items-center gap-1 lg:gap-3">
              <div className="h-2 lg:h-5 w-2 lg:w-5 bg-black rounded-full"></div>
              <div className="h-2 lg:h-5 w-2 lg:w-5 bg-black rounded-full"></div>
            </div>
            <div className="flex items-center">
              <div className="h-2 lg:h-5 w-2 lg:w-5 bg-black rounded-full"></div>
            </div>
          </div>
          {/* <MdPlayArrow className="text-black inline-block" /> */}
        </div>
      </div>
    </div>
  );
}
