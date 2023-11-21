import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* first Part */}
      <div className="ml-32 pt-2 bg-black bg-opacity-20 px-8 h-screen">
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
            <Link href={""}>About Us</Link>
            <Link href={""}>Services</Link>
            <Link href={""}>Our Companies</Link>
            <Link href={""}>Vision & Mision</Link>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="flex flex-col gap-12">
            <div className="text-8xl">meraqi Movement</div>
            <div className="max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum vulputate ex, vel malesuada felis venenatis eget.
              Maecenas fringilla nibh vitae nulla semper, id maximus erat
              pharetra. Nulla eleifend ligula quis mi varius semper. Vestibulum
              posuere tristique interdum. Nam aliquet urna lacus, at mattis odio
              scelerisque vel. Cras vitae ligula nec lectus interdum aliquam
              vitae nec dui. Curabitur auctor vulputate euismod.
            </div>
          </div>
        </div>
      </div>

      {/* Second Part */}
    </div>
  );
}
