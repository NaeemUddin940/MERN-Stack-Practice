import { Link } from "react-router";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Marquee } from "../Components/magicui/marquee";
import ProductSection from "../Components/Reusable/ProductSection";
import { Footerdemo } from "../../src/Components/ui/footer-section";

export default function Home() {
  return (
    <>
      <div className="px-5">
        <HeroSection />
      </div>
      <Marquee reverse={true} className="bg-zinc-800 text-indigo-200 px-5">
        <Link className="text-5xl font-bold px-4 py-5">PANDA</Link>
        <Link className="text-5xl font-bold px-4 py-5">JORDAN</Link>
        <Link className="text-5xl font-bold px-4 py-5">PUMA</Link>
        <Link className="text-5xl font-bold px-4 py-5">GUCCI</Link>
        <Link className="text-5xl font-bold px-4 py-5">ZARA</Link>
        <Link className="text-5xl font-bold px-4 py-5">Calvin Klein</Link>
      </Marquee>

      <ProductSection
        title="New Arrival"
        filterFn={(product) => product.isNew === true}
      />
      <ProductSection
        title="T-shirt"
        filterFn={(product) => product.catagory === "t-shirt"}
      />
      <ProductSection
        title="Shirt"
        filterFn={(product) => product.catagory === "shirt"}
      />
      <ProductSection
        title="Shoes"
        filterFn={(product) => product.catagory === "shoes"}
      />
      <ProductSection
        title="Watch"
        filterFn={(product) => product.catagory === "watch"}
      />
      <Footerdemo />
    </>
  );
}
