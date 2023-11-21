import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* first Part */}
      <div className="flex">
        <div className="flex-[1]"></div>
        <div className="flex-[10] flex flex-col pt-2 bg-black bg-opacity-20 px-8 min-h-screen">
          <div className="flex items-center gap-8">
            <Image
              src={"/Logo1.png"}
              width={160}
              height={160}
              alt="logo"
              className="w-20"
            />
            <div className="md:flex gap-8 hidden">
              <Link href={""}>Home</Link>
              <Link href={"#about"}>About Us</Link>
              <Link href={"#service"}>Services</Link>
              <Link href={""}>Our Companies</Link>
              <Link href={""}>Vision & Mision</Link>
            </div>
          </div>
          <div className=" flex-1 flex items-center">
            <div className="flex flex-col gap-12">
              <div className="md:text-8xl text-6xl">meraqi Movement</div>
              <div className="max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum vulputate ex, vel malesuada felis venenatis eget.
                Maecenas fringilla nibh vitae nulla semper, id maximus erat
                pharetra. Nulla eleifend ligula quis mi varius semper.
                Vestibulum posuere tristique interdum. Nam aliquet urna lacus,
                at mattis odio scelerisque vel. Cras vitae ligula nec lectus
                interdum aliquam vitae nec dui. Curabitur auctor vulputate
                euismod.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div id="about" className="flex">
        <div className="bg-black bg-opacity-20 flex-[3]"></div>
        <div className="flex-[4] px-14 py-40">
          <div className="md:text-8xl text-6xl">About Us</div>
          <div className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum vulputate ex, vel malesuada felis venenatis eget. Maecenas
            fringilla nibh vitae nulla semper, id maximus erat pharetra. Nulla
            eleifend ligula quis mi varius semper. Vestibulum posuere tristique
            interdum. Nam aliquet urna lacus, at mattis odio scelerisque vel.
            Cras vitae ligula nec lectus interdum aliquam vitae nec dui.
            Curabitur auctor vulputate euismod.
          </div>
        </div>
      </div>

      {/* Third Part */}
      <div id="service" className="flex md:flex-row flex-col mx-8">
        <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-r-2 md:border-b-0 border-b-2 border-r-0 border-dashed border-black flex items-center justify-center">
          Our Services
        </div>
        <div className="flex-1 p-8 flex flex-col gap-12">
          <div>
            <div className="font-bold text-xl">Lorem Ipsum</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel
              ligula ut orci tempus sodales nec in quam
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">Lorem Ipsum</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel
              ligula ut orci tempus sodales nec in quam
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">Lorem Ipsum</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel
              ligula ut orci tempus sodales nec in quam
            </div>
          </div>
        </div>
      </div>

      {/* Forth Part */}
      <div className="flex flex-col gap-12 py-40">
        <div className="md:text-8xl text-4xl text-center">Our Company</div>
        <div className="flex justify-center md:flex-row flex-col items-center">
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
          <Image src={"/Logo1.png"} alt="" width={160} height={160}></Image>
        </div>
      </div>

      {/* Fifth Part */}
      <div id="service" className="flex md:flex-row-reverse flex-col mx-8">
        <div className="flex-1 md:text-8xl text-6xl text-center p-4 md:border-l-2 md:border-b-0 border-b-2 border-l-0 border-dashed border-black flex items-center justify-center">
          Vision & Mission
        </div>
        <div className="flex-1 p-8 flex flex-col gap-12 text-right">
          <div>
            <div className="font-bold text-4xl">Vission</div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel
              ligula ut orci tempus sodales nec in quam
            </div>
          </div>
          <div>
            <div className="font-bold text-xl">Mission</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              leo, luctus sed nulla sed, gravida ultrices nisl. Integer vel
              ligula ut orci tempus sodales nec in quam
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black bg-opacity-50 flex items-center justify-center text-white py-20">
        <div className="text-center">
          © 2023 meraqi | Terms of Service | Contact | Instagram | Facebook |
          Twitter
        </div>
      </div>
    </div>
  );
}
