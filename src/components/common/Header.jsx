import React from "react";
import OsumareLogo from "../../assets/OsumareLogo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()
  const login = location.pathname.startsWith("/login")
  return (
    <nav className="flex justify-between px-10">
      <img src={OsumareLogo} alt="" />

      <div className="p-3 flex justify-center items-center">
      { login ? <Link
        to="/"
         className="[text-decoration:none] md:px-10 px-5 py-3 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out rounded-full border-2 border-black">
          Home
        </Link>
        :
        <Link
        to="/login"
         className="[text-decoration:none] md:px-10 px-5 py-3 hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out rounded-full border-2 border-black">
          Login
        </Link>
       }
      </div>
    </nav>
  );
}

export default Header;
