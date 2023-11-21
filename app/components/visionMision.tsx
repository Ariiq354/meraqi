import React from "react";

export default function VisionMision() {
  return (
    <div id="service" className="flex md:flex-row-reverse flex-col mx-8 my-40">
      <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-l-2 md:border-b-0 border-b-2 border-l-0 border-dashed border-black flex items-center justify-center">
        Vision & Mission
      </div>
      <div className="flex-1 p-8 flex flex-col gap-12 text-right">
        <div>
          <div className="font-bold text-4xl">Vission</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
            leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel ligula
            ut orci tempus sodales nec in quam
          </div>
        </div>
        <div>
          <div className="font-bold text-xl">Mission</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
            leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel ligula
            ut orci tempus sodales nec in quam
          </div>
        </div>
      </div>
    </div>
  );
}
