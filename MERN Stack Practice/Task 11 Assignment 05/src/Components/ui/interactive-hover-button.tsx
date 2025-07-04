import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, path,rounded, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        `group relative w-full md:w-80 cursor-pointer overflow-hidden rounded-${rounded} border-3 dark:border-violet-500 border-black bg-background p-2 text-center font-semibold`,
        className
      )}
      {...props}>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 dark:text-violet-500 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 shadow-2xl flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 dark:hover:text-white font-bold group-hover:opacity-100">
        <Link to={path}>{text}</Link>
        <ArrowRight />
      </div>
      <div className="absolute left-[15%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full dark:bg-violet-500 group-hover:w-full group-hover:scale-[1.8] dark:group-hover:bg-violet-500"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
