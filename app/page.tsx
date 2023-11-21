import Heading from "./components/heading";
import About from "./components/about";
import Service from "./components/service";
import Company from "./components/company";
import VisionMision from "./components/visionMision";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Heading />
      <About />
      <Service />
      <Company />
      <VisionMision />
      <Footer />
    </div>
  );
}
