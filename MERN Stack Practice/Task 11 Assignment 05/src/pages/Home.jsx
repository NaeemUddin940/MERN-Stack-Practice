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

      {!products.length ? (
        <p>No products available.</p>
      ) : (
        <div className="grid gap-6 px-5 w-full mx-auto grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {Array.isArray(products) &&
            products.map((product) => {
              return <ThreeDCardDemo key={product.id} product={product} />;
            })}
        </div>
      )}
    </>
  );
}
