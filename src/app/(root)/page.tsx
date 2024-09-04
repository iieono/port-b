import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-3 lg:justify-between  flex-col p-2 py-5  lg:p-0 pt-20 lg:pt-10 lg:px-5">
      <div className=" text-2xl  text-primary absolute lg:relative lg:text-6xl lg:pl-5 top-6 left-7  pen-text">
        '//e0
      </div>

      <div className="leading-none sharpie-text text-[4rem] w-full h-full px-5 lg:px-10 md:text-[8rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[17rem] flex items-start justify-start lg:justify-start flex-col ">
        <p className="">
          DESIGNER <span className="text-primary ">&</span>
        </p>
        <p className="">DEVELOPER</p>
        <p className="text-lg lg:text-xl   xl:text-3xl jura font-extralight text-custom-whiteish leading-snug rounded-3xl italic relative">
          <span>Crafting immersive digital </span>
          <br className="md:hidden" />
          <span>solutions that inspire.</span>
        </p>
      </div>
      <div className="w-full gap-3 py-5 hidden lg:flex flex-col items-center lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-0 text-custom-whiteish  jura font-extralight justify-start">
        <div className="flex lg:self-end gap-3 w-72 lg:w-auto flex-col lg:flex-row text-lg lg:text-4xl items-start lg:items-center p-2 lg:px-1 lg:py-1 rounded-xl rounded-bl-[100px] rounded-tr-[100px] lg:rounded-xl lg:rounded-br-[100px] lg:rounded-tl-[100px] uppercase bg-primary ">
          <div className=" self-end lg:mb-10 rounded-full bg-custom-deepgray px-4 py-2">
            See my works
          </div>
          <div className=" text-5xl sharpie-text self-center text-black">&</div>
          <div className=" rounded-full bg-custom-deepgray lg:mt-10 px-4 py-2">
            Reach out
          </div>
        </div>
      </div>

      <div className="flex self-end lg:hidden w-full italic  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className="absolute w-auto bg-primary text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-between lg:rounded-none lg:rounded-tl-[50px]"
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
