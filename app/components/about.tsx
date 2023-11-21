import React from "react";

export default function About() {
  return (
    <div id="about" className="flex">
      <div className="bg-black bg-opacity-20 flex-[3]"></div>
      <div className="flex-[4] px-14 py-40">
        <div className="md:text-8xl text-6xl">About Us</div>
        <div className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          vulputate ex, vel malesuada felis venenatis eget. Maecenas fringilla
          nibh vitae nulla semper, id maximus erat pharetra. Nulla eleifend
          ligula quis mi varius semper. Vestibulum posuere tristique interdum.
          Nam aliquet urna lacus, at mattis odio scelerisque vel. Cras vitae
          ligula nec lectus interdum aliquam vitae nec dui. Curabitur auctor
          vulputate euismod.
        </div>
      </div>
    </div>
  );
}
