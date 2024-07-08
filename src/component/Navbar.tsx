import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SearchIcon,
  HomeIcon,
  UserCircleIcon,
  ClipboardListIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/solid";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 border-b border-gray-700 w-full">
      <div className="flex justify-between items-center mx-auto w-full px-4 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-full">
        <div className="flex items-center">
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <div className="hidden md:flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            <Link
              to="/"
              className="text-white flex items-center space-x-1 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <HomeIcon className="h-6 w-6" />
              <span>Home</span>
            </Link>
            <Link
              to="/dashboard"
              className="text-white flex items-center space-x-1 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <ClipboardListIcon className="h-6 w-6" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/login"
              className="text-white flex items-center space-x-1 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <UserCircleIcon className="h-6 w-6" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="text-white flex items-center space-x-1 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <UserCircleIcon className="h-6 w-6" />
              <span>Signup</span>
            </Link>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="pl-8 pr-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600"
            placeholder="Search..."
          />
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            to="/"
            className="block px-4 py-2 text-white flex items-center space-x-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </Link>
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-white flex items-center space-x-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <ClipboardListIcon className="h-6 w-6" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-white flex items-center space-x-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <UserCircleIcon className="h-6 w-6" />
            <span>Login</span>
          </Link>
          <Link
            to="/signup"
            className="block px-4 py-2 text-white flex items-center space-x-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <UserCircleIcon className="h-6 w-6" />
            <span>Signup</span>
          </Link>
        </div>
      )}
    </nav>
  );
};
