import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/home" className="flex items-center">
          <img
            src="./1.png"
            alt="Logo"
            className="h-8 w-8 mr-2 rounded-full md:h-9 md:w-9"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#917337]">
            UrbanNest
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block md:flex-grow mx-4">
          <div className="relative">
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
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="text-gray-700 text-2xl hover:text-blue-600">
            <IoHomeSharp />
          </Link>
          <Link to="/shop" className="text-gray-700 text-2xl hover:text-blue-600">
            <FaShoppingBag />
          </Link>
          <Link to="/cart" className="text-gray-700 text-2xl hover:text-blue-600">
            <FaCartShopping />
          </Link>
          <Link to="/profile" className="text-gray-700 text-2xl hover:text-blue-600">
            <FaUser />
          </Link>
          <Link
            to="/SignIn"
            className="bg-gradient-to-b from-amber-900 to-amber-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            SignIn
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={!isMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
     {isMenuOpen && (
  <div className="md:hidden bg-white px-6 pt-4 pb-2 shadow-lg space-y-4">
    {/* Search Bar for Mobile */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search sofas, tables, etc..."
        className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

    {/* Mobile Nav Links */}
    <div className="flex flex-col space-y-3">
      <Link to="/home" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
        <IoHomeSharp className="text-xl" />
        <span>Home</span>
      </Link>
      <Link to="/shop" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
        <FaShoppingBag className="text-xl" />
        <span>Shop</span>
      </Link>
      <Link to="/cart" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
        <FaCartShopping className="text-xl" />
        <span>Cart</span>
      </Link>
      <Link to="/profile" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
        <FaUser className="text-xl" />
        <span>Profile</span>
      </Link>
      <Link
        to="/SignIn"
        className="bg-gradient-to-b from-amber-900 to-amber-600 text-white text-center font-semibold py-2 rounded-xl shadow-md"
      >
        SignIn
      </Link>
    </div>
  </div>
)}
    </nav>
  );
}