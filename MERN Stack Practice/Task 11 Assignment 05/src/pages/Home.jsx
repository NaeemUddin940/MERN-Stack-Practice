import { Link } from "react-router";
import HeroSection from "../Components/HeroSection/HeroSection";
import { Marquee } from "../Components/magicui/marquee";
import { TabDemo } from "../Components/Tabs/tabs-like-bookmark";

export default function Home() {
  return (
    <>
      <div className="px-5">
        <HeroSection />
      </div>
      <Marquee reverse={true} className="bg-zinc-800 text-indigo-200 px-5">
        <Link to='#' className="text-5xl font-bold px-4 py-5">PANDA</Link>
        <Link to='#' className="text-5xl font-bold px-4 py-5">JORDAN</Link>
        <Link to='#' className="text-5xl font-bold px-4 py-5">PUMA</Link>
        <Link to='#' className="text-5xl font-bold px-4 py-5">GUCCI</Link>
        <Link to='#' className="text-5xl font-bold px-4 py-5">ZARA</Link>
        <Link to='#' className="text-5xl font-bold px-4 py-5">Calvin Klein</Link>
      </Marquee>
      <div className="block">
        <TabDemo />
      </div>
    </>
  );
}
