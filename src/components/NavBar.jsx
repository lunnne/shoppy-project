import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import CartBanner from './CartBanner';

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
      <header className="p-8 border-2 md:border-4 border-moon-navy text-moon-navy md:h-1/7">
        <Link to="/" className="flex items-center justify-center">
          <img className="w-12 sm:w-16 lg:w-36" src="/logo.png" alt="" />
          <span className="font-heading mx-2 lg:mx-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl ">SellerMoon</span>
          <img className="w-12 sm:w-16 lg:w-36" src="/logo.png" alt="" />
        </Link>
      </header>
      <nav className="flex items-center text-md border-x-2 border-b-2 md:text-2xl  md:border-x-4 md:border-b-4 font-bold [&>*]:p-3 [&>*]:flex-1 [&>*]: text-center [&>*]:text-moon-navy border-moon-navy">
        <Link to="/products">Items</Link>
        <Link to="/cart" className="flex justify-center items-center">
          <CartBanner />
        </Link>
        {user?.admin === true ? (
          <Link to="/upload" className="flex justify-center items-center">
            <FaEdit className="mx-2" />
          </Link>
        ) : (
          ''
        )}
        {user && <div className='flex justify-center'><img className="rounded-full w-5 h-5 md:w-8 md:h-8" src={user.photoURL} alt={user.displayName} /></div>}
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
