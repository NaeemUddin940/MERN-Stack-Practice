import Navbar from "./Navbar";
import NotificationBar from "./NotificationBar";
import { cn } from "../../lib/utils";
import {useScrollContext} from '../../hooks/use-scroll-direction'
import React from "react";

const Header = () => {
  console.log("Rendering Header.....");
  const scrollDirection = useScrollContext()
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-transform duration-300 ease-in-out ",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      )}>
      <NotificationBar />
      <Navbar />
    </div>
  );
};

export default React.memo(Header);
