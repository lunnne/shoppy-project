import React, { useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function NavBar() {
  const { user, logOut } = UserAuth();
  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="p-5 border-4 text-xl border-moon-navy text-moon-navy h-1/7">
        <Link to="/" className="flex items-center justify-center">
          <img className="w-36" src="/logo.png" alt="" />
          <span className="mx-10 text-6xl font-heading">SellerMoon</span>
          <img className="w-36" src="/logo.png" alt="" />
        </Link>
      </header>
      <nav className="flex items-center text-lg border-x-4 border-b-4 [&>*]:p-3 [&>*]:flex-1 [&>*]: text-center [&>*]:text-moon-navy border-moon-navy">
        <Link to="/products">Items</Link>
        <Link to='/cart' className="flex justify-center items-center">
          Cart <BsFillCartFill className="mx-2" />
        </Link>
        {user?.admin === true ? (
          <Link to="/upload" className="flex justify-center items-center">
            <FaEdit className="mx-2" />
          </Link>
        ) : (
          ''
        )}
        {user && <p>Hi, {user.displayName}</p>}
        {user ? (
          <button onClick={handleSignOut} className="bg-moon-navy">
            <span className="text-moon-gray">LogOut</span>
          </button>
        ) : (
          <button onClick={handleSignIn} className="bg-moon-navy">
            <span className="text-moon-gray">LogIn</span>
          </button>
        )}
      </nav>
    </>
  );
}
