import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ListMenu from "./ListMenu";
import logo from "/public/Img/Logo.png"; // 

export default function Header() {
  return (
<header className="bg-[#F4F1DE] shadow-md border-b border-gray-700 sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Kiri: Logo + Menu */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <img src="/Img/Logo.png" alt="ManJa Logo" className="h-15 w-auto" />
          <div className="text-3xl font-extrabold tracking-tight text-white">
          </div>

          {/* Menu (hanya tampil md ke atas) */}
          <nav className="hidden md:flex space-x-6 text-black font-semibold">
            <ListMenu />
          </nav>
        </div>

        {/* Kanan: Search, Cart, Login/Register */}
        <div className="flex items-center space-x-5 text-orange-500 text-xl relative">


          {/* Login/Register */}
          <NavLink to="/login" className="hidden sm:block text-sm hover:text-yellow-400 transition-colors duration-200">
            Login
          </NavLink>
          <NavLink to="/register" className="hidden sm:block text-sm hover:text-yellow-400 transition-colors duration-200">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
}
