import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-5 lg:justify-between  flex-col p-2 py-5  lg:p-0 pt-24 lg:pt-20 lg:px-20">
      <div className="lg:hidden text-3xl  text-primary absolute top-5 left-7  pen-text">
        iieo
      </div>
      <div className="leading-none sharpie-text text-[4rem] w-full px-5 lg:px-10 md:text-[8rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[17rem] flex items-start justify-start lg:justify-center flex-col ">
        <p className="">
          DESIGNER <span className="text-primary ">&</span>
        </p>
        <p className="">DEVELOPER</p>
      </div>
      <div className="w-full lg:h-full flex flex-col items-start lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-10 text-custom-whiteish  jura font-extralight justify-start">
        <p className="leading-snug rounded-3xl italic relative">
          {/* <span>I am A. Akhmadjonov. </span> */}
          {/* <br /> */}
          <span>Crafting immersive digital </span>
          <br className="md:hidden" />
          <span>solutions that inspire.</span>
        </p>
      </div>

      <div className="flex self-end w-full italic  items-end uppercase justify-center ">
        <div className="absolute w-auto bg-primary text-6xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-center lg:rounded-none lg:rounded-tl-[50px]">
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
            EXPLORE
          </p>
          <div className="flex h-full  gap-1 lg:gap-2 items-center ">
            <div className="flex flex-col items-center gap-1 lg:gap-2">
              <div className="h-2 lg:h-3 w-2 lg:w-3 bg-custom-deepgray rounded-full"></div>
              <div className="h-2 lg:h-3 w-2 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
            <div className="flex items-center flex-col ">
              <div className="h-2 lg:h-3 w-2 lg:w-3 bg-custom-deepgray rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
