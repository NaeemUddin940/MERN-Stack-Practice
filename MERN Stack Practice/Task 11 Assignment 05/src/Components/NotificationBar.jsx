import React from "react";
import GradientText from "./GradientText/GradientText";
import ShinyText from "./ShinyText/ShinyText";

export default function NotificationBar() {
  return (
    <div className="bg-zinc-950 flex justify-center items-center">
      <div className="flex min-w-170 py-1">
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
          className="custom-class text-xl font-bold underline rounded-3xl text-center cursor-pointer"
        />
      </div>
    </div>
  );
}
