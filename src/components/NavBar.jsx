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
      <nav className="flex items-center text-lg border-x-4 border-b-4 [&>*]:p-3 [&>*]:flex-1 [&>*]: text-center [&>*]:text-moon-navy border-moon-navy">
        <Link to="/">Items</Link>
        <button className="flex justify-center items-center">
          Cart <BsFillCartFill className="mx-2" />
        </button>
        <Link to="/upload" className="flex justify-center items-center">
          <FaEdit className="mx-2" />
        </Link>
        <button className="bg-moon-navy"><span className='text-moon-gray'>LogIn</span></button>
      </nav>
    </>
  );
}
