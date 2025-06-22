import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlinePlusSquare,
  AiOutlineBook,
} from "react-icons/ai";

export default function ListMenu() {
  const baseStyle =
    "flex items-center space-x-3 px-6 py-3 rounded-xl transition duration-200 ease-in-out";

  const normalStyle = "hover:bg-white hover:shadow hover:scale-[1.01]";
  const activeStyle = "bg-white shadow-md font-bold";

  return (
    <ul className="flex flex-col w-full space-y-4 px-4">
      {/* Beranda */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle}`
          }
        >
          <AiOutlineHome className="text-xl" />
          <span>beranda</span>
        </NavLink>
      </li>

      {/* Cari */}
      <li>
        <NavLink
          to="/cari"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle}`
          }
        >
          <AiOutlineSearch className="text-xl" />
          <span>cari</span>
        </NavLink>
      </li>
        
        {/* Tambah Resep*/}
      <li>
        <NavLink
          to="/tambahresep"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle}`
          }
        >
          
          <AiOutlinePlusSquare className="text-xl" />
          <span>Tambah Resep</span>
        </NavLink>
      </li>
      
     

      {/* Simpan */}
      <li>
        <NavLink
          to="/simpan"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : normalStyle}`
          }
        >
          <AiOutlineBook className="text-xl" />
          <span>simpan</span>
        </NavLink>
      </li>
    </ul>
  );
}
