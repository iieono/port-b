import React from "react";

function About() {
  return (
    <div className=" h-full w-full flex items-start flex-col lg:flex-row justify-between gap-3 text-primary p-1 pb-0 lg:p-0 overflow-auto">
      <div className="text-4xl lg:text-8xl pen-text text-primary py-[4rem] w-full h-screen lg:h-full flex items-center flex-col gap-6">
        <div className=" absolute lg:relative top-5 left-5 self-center w-full lg:w-2/3  px-3">
          Hello<span className="text-custom-red">!</span>
        </div>
        <p className="text-lg lg:text-2xl chillax-text w-full lg:w-2/3 px-6">
          My name is Abdusamadbek Akhmadjonov. I'm a UX/UI designer and
          full-stack developer based in Uzbekistan. My passion for technology
          drives me to continually explore and learn new aspects of the field. I
          am dedicated to creating engaging designs and building effective
          solutions, always eager to expand my knowledge.
        </p>
        <div className="h-40 w-40 mt-10 lg:mt-5 bg-custom-red rounded-full blur-lg"></div>
      </div>
      <div className="w-full h-full py-20 flex flex-col items-center">
        heloo
      </div>
    </div>
  );
}

export default About;
