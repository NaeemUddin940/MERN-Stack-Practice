import GradientText from "./GradientText/GradientText";
import ShinyText from "./ShinyText/ShinyText";

const Header = () => {
  return (
    <div className="bg-zinc-950 flex justify-center items-center">
      <div className="flex min-w-170 py-2">
        <GradientText
          colors={[
            "#3188FF",
            "#D34BE9",
            "#FF994B",
            "#3188FF",
            "#D34BE9",
            "#FF994B",
          ]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class">
          Get Your Favorite Products with 25% off Click to Shop Now.
        </GradientText>
        <ShinyText
          text="Shop Now"
          disabled={false}
          speed={3}
          className="custom-class text-xl font-bold border-2 border-violet-600 px-2 py-1 rounded-3xl text-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
