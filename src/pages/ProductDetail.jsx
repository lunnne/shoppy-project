import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../api/products';
import { UserAuth } from '../context/AuthContext';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

export default function ProductDetail() {
  const { user } = UserAuth();
  const { state } = useLocation();
  const { category, price, description, name, options, url } = state;
  const [option, setOption] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const addNewToCart = useMutation(({ user, product }) => addToCart(user, product), {
    onSuccess: () => queryClient.invalidateQueries(['carts']),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const product = { ...state, options: option, quantity: 1 };
      addNewToCart.mutate({ user, product });
      alert('Go to the cart page?');
      navigate('/cart');
    } else {
      alert('Sign-in is required!');
      navigate('/');
    }
  };

  return (
    <>
      <p className="border-moon-navy py-2 px-2 mb-10 text-md text-moon-navy">
        {' '}
        category {'>'} {category}
      </p>

      <section className="grid grid-col-1 md:grid-cols-2 md:px-10 justify-center md:text-xl w-full">
        <div className='flex justify-center'><img className="w-2/3 md:w-full" src={url} alt={name} /></div>
        <div className="flex flex-col text-sm p-8 sm:border-2 md:border-4 md:justify-between md:p-12  border-moon-navy space-y-5">
          <h1 className="font-albert uppercase text-xl pb-3 font-bold border-b-2 sm:pb-3 lg:text-4xl ">{name}</h1>
          <p className="flex pb-5">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </p>
          <p className='md:text-lg'>{description}</p>
          <div className="flex space-x-3 md:text-lg">
            <label htmlFor="options">Option : </label>
            <select name="options" id="options" onChange={(e) => setOption(e.target.value)}>
              <option value="select">Choose your option</option>
              {options &&
                options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <p className="text-md md:text-2xl font-bold">
            {'₩ '}
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <button onClick={handleSubmit} className="border-2 border-moon-navy py-3 md:text-xl font-bold hover:bg-moon-warm-pink">
            Add to cart
          </button>
        </div>
      </section>
    </>
  );
}
