import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <nav className="bg-white shadow-md py-3 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">    
        <Link to="/home" className="text-3xl font-bold text-[#917337] flex items-center ">
        <img
            src="./1.png"
            alt="Logo"
            className="h-10 w-10 mr-2 rounded-full"
          /> 
          UrbanNest
        </Link>

        <div className="relative w-[860px] mx-4">
          <input
            type="text"
            placeholder="Search sofas, tables, etc..."
            className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-2.5 text-gray-700 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Navigation items on the right */}
        <div className="flex items-center space-x-11">
          <Link
            to="/home"
            className="text-gray-700 text-2xl hover:text-blue-600 transition"
          >
            <IoHomeSharp />
          </Link>
          <Link
            to="/shop"
            className="text-gray-700 text-2xl hover:text-blue-600 transition"
          >
            <FaShoppingBag />
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 text-2xl hover:text-blue-600 transition"
          >
            <FaCartShopping />
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 text-2xl hover:text-blue-600 transition"
          >
            <FaUser />
          </Link>
          <Link
            to="/SignIn"
            className="bg-gradient-to-b 
                      from-amber-900 
                      to-amber-600
                      text-white 
                      font-semibold 
                      px-4 
                      py-2.5 
                      rounded-2xl 
                      shadow-md
                      hover:scale-105 
                      hover:shadow-lg
                      active:scale-95
                      transition-all 
                      duration-200
                      focus:outline-none 
                      focus:ring-2 
                      focus:ring-white"
          >
            SignIn
          </Link>
        </div>
      </div>
    </nav>
  );
};
