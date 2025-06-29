import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import star from "../../../public/Vector.png";
import CountUp from "../CountUp/CountUp";

export default function HeroSection() {
  return (
    <div className="bg-[url(../public/Rectangle.png)] py-7 bg-right bg-contain bg-no-repeat flex flex-col justify-center items-start md:px-10 space-y-5 relative lg:px-20">
      <h2 className=".integral-font font-bold text-sm md:text-6xl lg:text-7xl xl:text-8xl">
        FIND CLOTHES
        <br /> THAT MATCHES
        <br /> YOUR STYLE
      </h2>
      <img src={star} className="absolute left-220" />
      <img src={star} className="absolute right-10 top-20 size-25" />
      <p className="text-sm md:text-md lg:text-xl">
        Browse through our diverse range of meticulously crafted garments,{" "}
        <br />
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <InteractiveHoverButton />
      <div className="flex gap-5">
        <div className="border-2 border-zinc-500 px-5 py-3 rounded-xl">
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
        <div className="border-2 border-zinc-500 px-5 py-3 rounded-xl">
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
        <div className="border-2 border-zinc-500 px-5 py-3 rounded-xl">
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
  );
}
