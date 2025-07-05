import { Link } from "react-router";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Marquee } from "../Components/magicui/marquee";
import { TabDemo } from "../Components/Tabs/tabs-like-bookmark";
import { useEcommerceContext } from "../Context/EcommerceContext";
import ThreeDCardDemo from "../Components/ProductCard/ThreeDCardDemo";

export default function Home() {
  const { allProducts } = useEcommerceContext();

  return (
    <>
      <div className="px-5">
        <HeroSection />
      </div>
      <Marquee reverse={true} className="bg-zinc-800 text-indigo-200 px-5">
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          PANDA
        </Link>
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          JORDAN
        </Link>
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          PUMA
        </Link>
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          GUCCI
        </Link>
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          ZARA
        </Link>
        <Link to="#" className="text-5xl font-bold px-4 py-5">
          Calvin Klein
        </Link>
      </Marquee>
      <div className="block">
        {allProducts.products ? <TabDemo /> : <p>Loading....</p>}
      </div>
      <div>
        <h2 className="text-5xl font-bold bg-gray-200 text-gray-800 dark:bg-zinc-900 dark:text-white py-8 text-center">All Products List</h2>
        <div className="grid gap-5 px-10 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
          {allProducts.searchFilter.map((product) => (
            <ThreeDCardDemo key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
