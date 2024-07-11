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
    <nav className="flex flex-row sticky z-50 top-0 py-3 backdrop-blur-lg border-b border-gray-500">
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
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 top-16 bg-neutral-900 w-full py-5 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((navItem: any, index: any) => {
                  return (
                    <li className="py-2" key={index}>
                      <a href={navItem.href}>{navItem.label}</a>
                    </li>
                  );
                })}
              </ul>
              <div className="lg:hidden md:flex flex-row justify-center space-x-6 items-center pt-7">
                <a href="#" className="py-1 px-2 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="lg:hidden md:flex flex-row bg-gradient-to-r from-orange-500 to-orange-800 py-1 px-2 rounded-md"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
