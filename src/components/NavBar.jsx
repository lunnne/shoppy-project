import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <header className="p-5 border-4 text-xl border-moon-navy text-moon-navy h-1/7">
        <Link to="/" className="flex items-center justify-center">
          <img className="w-40" src="/logo.png" alt="" />
          <span className="mx-10 text-6xl font-heading">SellerMoon</span>
          <img className="w-40" src="/logo.png" alt="" />
        </Link>
      </header>
      <nav className=" flex items-center text-2xl justify-evenly border-x-4 border-b-4 border-moon-navy">
        <button>Items</button>
        <button>
          <BsFillCartFill />
        </button>
        <Link to="/upload">
          <FaEdit />
        </Link>
        <button className="bg-moon-yellow px-3 py-1 rounded">LogIn</button>
      </nav>
    </>
  );
}
