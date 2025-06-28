import { Link, NavLink } from "react-router";
import {
  InputButton,
  InputButtonAction,
  InputButtonInput,
  InputButtonProvider,
  InputButtonSubmit,
} from "./animate-ui/buttons/input";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <NavLink className={"text-2xl"} to="/home">
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
          <Link to="/" className="btn btn-ghost text-3xl font-bold">
            Exclusive
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-xl font-bold">
              <NavLink to="/home">Home</NavLink>
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
          <InputButtonProvider>
            <InputButton>
              <InputButtonAction>Search Here....</InputButtonAction>
              <InputButtonSubmit>Search</InputButtonSubmit>
            </InputButton>
            <InputButtonInput type="text" placeholder="Search......" />
          </InputButtonProvider>
          <div className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
