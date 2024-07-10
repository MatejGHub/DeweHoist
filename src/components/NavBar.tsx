import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="flex flex-row sticky z-50 top-50 py-3 backdrop-blur-lg border-b border-gray-500">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center flex-shrink-0 ">
            <img src={logo} alt="logo" className="h-10 w-8 mr-1" />
            <span className="text-lg tracking-tight">DeweHoist</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-10">
            {navItems.map((navItem: any, index: any) => {
              return (
                <li key={index}>
                  <a href={navItem.href}>{navItem.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex flex-row justify-center space-x-6 items-center">
            <a href="#" className="py-1 px-2 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="hidden lg:flex flex-row bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
