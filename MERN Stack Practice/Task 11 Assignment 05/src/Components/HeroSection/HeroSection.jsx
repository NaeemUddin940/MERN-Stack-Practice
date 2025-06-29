import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import star from "../../../public/Vector.png";
import CountUp from "../CountUp/CountUp";
import heroImg from "../../../public/Rectangle.png";

export default function HeroSection() {
  return (
    <div>
      <div className="md:bg-[url(../public/Rectangle.png)] py-7 bg-right bg-contain bg-no-repeat md:px-5 space-y-5 relative flex flex-col justify-center items-start">
        <h2 className=".integral-font font-black text-5xl md:leading-16 md:text-5xl lg:text-6xl xl:text-7xl">
          FIND CLOTHES
          <br /> THAT MATCHES
          <br /> YOUR STYLE
        </h2>
        {/* <img src={star} className="absolute lg:left-220" />
      <img src={star} className="absolute lg:right-10 lg:top-20 lg:size-25" /> */}
        <p className="text-md text-gray-500 md:text-md lg:text-xl">
          Browse through our diverse range of meticulously crafted garments,{" "}
          <br className="hidden md:flex" />
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <InteractiveHoverButton />
        <div className="">
          <div className="grid grid-cols-3 grid-rows-1 text-center gap-3 ">
            <div className="md:border-2 md:border-zinc-500 px-5 py-3 rounded-xl">
              <CountUp
                from={0}
                to={200}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl md:text-2xl font-bold"
              />
              <span className="text-4xl  md:text-3xl font-bold">+</span>
              <p className="text-gray-700">International Brands</p>
            </div>
            <div className="md:border-2 md:border-zinc-500 px-5 py-3 rounded-xl">
              <CountUp
                from={0}
                to={2000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl font-bold"
              />
              <span className="text-4xl font-bold">+</span>
              <p className="text-gray-700">High-Quality Products</p>
            </div>
            <div className="md:border-2 md:col-span-2 lg:col-span-1 max-[1120px]:text-center md:border-zinc-500 px-4 py-3 rounded-xl">
              <CountUp
                from={0}
                to={30000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-4xl font-bold"
              />
              <span className="text-4xl font-bold">+</span>
              <p className="text-gray-700">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden justify-center relative items-center">
        <img src={star} className="absolute size-20 top-10 right-10" />
        <img src={star} className="absolute left-5" />
        <img src={heroImg} alt="Hero Image" />
      </div>
    </div>
  );
}
