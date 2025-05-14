import React from "react";
import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-gray-50 text-gray-800 rounded-2xl px-4 sm:px-6 py-6 shadow-sm">
      {/* Top Row: Search & Profile */}
      <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <FaSearch className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-gray-700 placeholder-gray-400 text-base outline-none border-none"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">Cia Natasya</p>
            <p className="text-xs text-gray-500">Creator</p>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="mt-6 relative rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8 text-center text-white overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Create Your Perfect AI Avatar in Seconds
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Upload a photo or start from scratch. Our AI generates realistic,
            stylized, or fantasy avatars personalized just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
