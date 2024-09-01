export default function Home() {
  return (
    <div className=" h-full w-full flex items-center lg:items-start lg:justify-between justify-evenly flex-col p-2 lg:p-10 lg:px-20 text-9xl">
      <div className="leading-none sharpie-text text-[4rem] lg:text-[14rem] flex flex-col ">
        <p className="">
          DESIGNER <span className="text-primary">&</span>
        </p>
        <p>DEVELOPER</p>
      </div>
      <div className="w-full flex flex-col items-end text-2xl px-5 text-primary technor-text font-light justify-end">
        <p>
          <p>Hi! I am A. Akhmadjonov.</p>
          <p>I craft immersive digital</p>
          <p>solutions that inspire.</p>
        </p>
      </div>
    </div>
  );
}
