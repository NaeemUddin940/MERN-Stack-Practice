import { Link, NavLink } from "react-router";
import Input from "./Input";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import { useEcommerceContext } from "../../Context/EcommerceContext";
import FilterSidebar from "../FIlterBar/FilterSidebar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../animate-ui/base/popover";
import Switch from "../Footer/switch";
import React from "react";

const Navbar = () => {
  console.log("Rendering Nav Bar");
  const { cart, setIsDarkMode, isDarkMode } = useEcommerceContext();
  const cartLength = cart.length;
  return (
    <div>
      <div className="flex bg-white dark:bg-black md:shadow-sm lg:px-20 md:px-10 px-5 border-b-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="dark:bg-violet-500 block md:hidden btn p-2 rounded-xl mr-4 drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay">
                  <ul className="menu bg-base-200 text-base-content dark:bg-black dark:text-gray-200 min-h-full w-70 p-4">
                    <details className="bg-zinc-900 border-2 py-1 px-3 rounded-2xl cursor-pointer hover:bg-black">
                      <summary className="text-2xl font-bold flex items-center justify-between">
                        <span>Menu</span>
                        <Switch
                          className="block md:hidden"
                          checked={isDarkMode}
                          onCheckedChange={() => setIsDarkMode((prev) => !prev)}
                        />
                      </summary>
                      {/* Sidebar content here */}
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
                    </details>
                    <FilterSidebar />
                  </ul>
                </label>
              </div>
            </div>
          </div>
          <Link to="/" className="text-3xl font-bold">
            ShopEase
          </Link>
        </div>

        <div className="navbar-center hidden md:flex lg:flex">
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
          <div className="flex gap-3 items-center">
            <Input />
            <Switch
              className="hidden md:block"
              checked={isDarkMode}
              onCheckedChange={() => setIsDarkMode((prev) => !prev)}
            />
          </div>
          <Popover>
            <PopoverTrigger>
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
                  <p className="text-[13px] text-black font-black">
                    {cartLength}
                  </p>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <ShoppingCart />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
