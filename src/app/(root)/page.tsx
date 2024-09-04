import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-3 lg:justify-between  flex-col p-2 py-5  lg:p-0 pt-20 lg:pt-10 lg:px-5">
      <div className=" text-2xl  text-primary absolute lg:relative lg:text-6xl lg:pl-5 top-6 left-7  pen-text">
        '//e0
      </div>
      <div className="hidden lg:flex h-[60%] 2xl:h-[90%] aspect-square bg-primary/10 z-20 backdrop-blur-sm shadow-2xl blur-sm rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 right-0 top-1/2"></div>

      <div className="leading-none sharpie-text text-[4rem] w-full h-full px-5 lg:px-10 md:text-[8rem] lg:text-[10rem] xl:text-[14rem] 2xl:text-[17rem] flex items-start justify-start lg:justify-center flex-col ">
        <div className="flex justify-between items-center w-full">
          <div className=" text-shadow-lg">
            DESIGNER{" "}
            <span className="text-primary lg:hidden lg:text-4xl">&</span>
          </div>
          <div className="text-lg hidden lg:flex flex-col items-end ps-10 justify-start lg:h-2/3  lg:w-1/3  lg:text-base  xl:text-lg perma font-light text-primary leading-snug rounded-3xl italic relative">
            {/* <p>I am A. Akhmadjonov. </p> */}
            <p> I craft immersive digital </p>

            <p> solutions that inspire.</p>
          </div>
        </div>
        <div className="self-end flex justify-end w-full items-start gap-5 relative">
          <div className="hidden lg:flex flex-col items-start justify-end  w-full  text-primary perma h-3/4 text-base jetbrains">
            <div className="hover:pl-3 transition-all duration-700">github</div>
            <div className="hover:pl-3 transition-all duration-700">email</div>
            <div></div>
          </div>
          {/* <div className="text-primary hidden lg:flex">&</div> */}
          <div className="text-shadow-lg">DEVELOPER</div>
        </div>
        <div className="text-lg flex lg:hidden flex-col items-start justify-center jura  lg:text-xl  xl:text-lg jetbrains  text-primary leading-snug rounded-3xl italic relative">
          <p>Hi! I am A. Akhmadjonov. </p>
          <p> I craft immersive digital </p>

          <p> solutions that inspire.</p>
        </div>
      </div>

      <div className="w-full gap-3 py-8 hidden lg:flex flex-col items-center lg:items-start tracking-widest  text-lg lg:text-2xl xl:text-4xl px-5 lg:px-3 text-primary  jura font-extralight justify-start">
        <div className="flex lg:self-end shadow-2xl  gap-3 w-72 lg:w-auto flex-col lg:flex-row text-lg lg:text-4xl items-start lg:items-center p-2 lg:px-2 lg:py-2 rounded-xl transition-all duration-700 rounded-bl-[100px] rounded-tr-[100px] lg:rounded-xl lg:rounded-br-[100px] lg:rounded-tl-[100px] uppercase  ">
          <div className=" self-end hover:shadow-2xl lg:mb-10 sharpie-text transition-all duration-700 rounded-full bg-custom-deepgray/80 backdrop-blur-lg px-4 py-2">
            See my works
          </div>
          <div className=" text-5xl sharpie-text self-center text-primary">
            &
          </div>
          <div className=" rounded-full kalam-text hover:shadow-2xl transition-all duration-700 bg-custom-deepgray/80 backdrop-blur-lg lg:mt-10 px-4 py-2">
            Reach out
          </div>
        </div>
      </div>

      <div className="flex self-end lg:hidden w-full italic  items-end uppercase justify-center ">
        <Link
          href="/gallery"
          className="absolute w-auto bg-primary shadow-2xl text-3xl  lg:text-8xl bottom-1 lg:bottom-0 left-1 right-1 lg:left-auto lg:right-0 px-6 py-2 gap-6 lg:gap-8 flex items-center rounded-[20px] justify-between lg:rounded-none lg:rounded-tl-[50px]"
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
