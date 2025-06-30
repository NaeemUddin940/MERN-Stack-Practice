import { Link } from "react-router";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Marquee } from "../Components/magicui/marquee";
import { ThreeDCardDemo } from "../Components/ProductCard/ThreeDCardDemo";
import { useCartContext } from "../Context/EcommerceContext";


export default function Home() {
  const { products } = useCartContext();
  return (
    <>
      <div className="px-5 bg-[#F2F0F1]">
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

      <div className="grid gap-2 grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(23rem,_1fr))]">
        {Array.isArray(products) &&
          products.map((product) => {
            return <ThreeDCardDemo key={product.id} product={product} />;
          })}
      </div>
      
    </>
  );
}
