import { MdPlayArrow } from "react-icons/md";
export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start justify-start gap-5 lg:justify-between  flex-col p-2 py-5 pt-24 lg:p-10 lg:px-20">
      <div className="leading-none sharpie-text text-[4rem] lg:text-[14rem] flex flex-col ">
        <p className="">
          DESIGNER <span className="text-primary">&</span>
        </p>
        <p>DEVELOPER</p>
      </div>
      <div className="w-full flex flex-col items-start lg:items-end text-xl lg:text-2xl px-5 text-primary technor-text font-light justify-end">
        <p>
          <p>Hi! I am A. Akhmadjonov.</p>
          <p>I craft immersive digital</p>
          <p>solutions that inspire.</p>
        </p>
      </div>
      <div className="flex self-end w-full h-full items-end uppercase justify-center">
        <div className="absolute bg-primary text-4xl bottom-0 right-0 px-6 py-4 rounded-tl-[50px]">
          <div className="aspect-square h-full absolute left-0 -translate-x-full bg-primary bottom-0">
            <div className="w-full h-full bg-custom-red rounded-br-[20px]"></div>
          </div>
          <p className="text-center">
            EXPLORE <MdPlayArrow className="text-black inline-block" />
          </p>
        </div>
      </div>
    </div>
  );
}
