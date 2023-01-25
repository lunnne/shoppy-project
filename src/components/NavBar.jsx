import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="p-5 border-2 flex justify-between items-center text-xl text-moon-navy h-1/7">
      <Link to="/" className="mx-5 py-1">
        <img src="" alt="" />
        <span>SellerMoon</span>
      </Link>
      <div className="flex items-center mx-5 space-x-5">
        <button>Items</button>
        <button>
          <BsFillCartFill />
        </button>
        <Link to="/upload">
          <FaEdit />
        </Link>
        <button className="bg-moon-yellow px-3 py-1 rounded">LogIn</button>
      </div>
    </header>
  );
}
