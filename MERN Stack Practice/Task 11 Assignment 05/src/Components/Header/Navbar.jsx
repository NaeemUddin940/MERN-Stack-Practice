import { Link, NavLink } from "react-router";
import Input from "../animate-ui/InputButton/Input";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "../ui/morphing-popover";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import ShoppingCart from "../../pages/ShoppingCart";
import { useCartContext } from "../../Context/EcommerceContext";

const Navbar = () => {
  const { cart } = useCartContext();
  const cartLength = cart.length
  return (
    <div>
      <div className="flex bg-base-100 md:shadow-sm lg:px-20 md:px-10 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="pr-4 cursor-pointer lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 h-50 w-50 p-2 shadow">
              <li className=" font-bold">
                <NavLink to="/" className={"text-2xl"}>
                  Home
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink className={"text-2xl"} to="/about">
                  About
                </NavLink>
              </li>
              <li className=" font-bold">
                <NavLink className={"text-2xl"} to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold">
            Exclusive
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl font-bold">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-xl font-bold">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="text-xl font-bold">
              <NavLink to="/shop">Shop</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Input />
          <MorphingPopover>
            <MorphingPopoverTrigger asChild>
              <Button variant="outline">
                <motion.span
                  layoutId="morphing-popover-basic-label"
                  layout="position">
                  <div className="pl-5 relative w-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 cursor-pointer">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <div
                      id="cart"
                      className="bg-red-400 absolute -top-1 -right-1 h-4 w-4 flex justify-center items-center rounded-full">
                      <p className="text-[12px] font-bold">{cartLength}</p>
                    </div>
                  </div>
                </motion.span>
              </Button>
            </MorphingPopoverTrigger>
            <MorphingPopoverContent className="w-110 h-160 bg-gray-100 text-black top-0 right-0 p-4 flex justify-center items-center z-1 shadow-sm">
              <ShoppingCart />
            </MorphingPopoverContent>
          </MorphingPopover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
