import GradientText from "../GradientText/GradientText";
import ShinyText from "../ShinyText/ShinyText";

export default function NotificationBar() {
  console.log("Rendering Notification Bar.....");
  return (
    <div className="bg-zinc-800 flex justify-center items-center">
      <div className="flex w-auto py-1 gap-2">
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
          Get Your Favorite Products with 25% off Go to.
        </GradientText>
        <ShinyText
          text="Shop Now"
          disabled={false}
          speed={3}
          className="custom-class text-xl font-bold underline max-sm:text-sm rounded-3xl text-center cursor-pointer"
        />
      </div>
    </div>
  );
}
