import { NavLink } from "react-router-dom";

const menuClass = ({ isActive }) =>
    `text-base font-semibold tracking-wide px-3 py-1 transition duration-200 border-b-2 ${
  isActive
    ? "text-black border-black"
    :"text-orange-500 border-transparent hover:text-orange-500 hover:border-orange-500"

}`


export default function ListMenu() {
    return (
        <>
            <NavLink to="/" className={menuClass}>Home</NavLink>
            <NavLink to="/about" className={menuClass}>About</NavLink>
        </>
    );
}
