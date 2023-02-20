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

      <section className="flex justify-around text-xl w-full">
        <img className="w-2/5" src={url} alt={name} />
        <div className="flex p-20 flex-col border-4  border-moon-navy space-y-5">
          <h1 className="font-bold border-b-2 pb-5 text-4xl font-albert uppercase">{name}</h1>
          <p className="flex pb-5">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
          </p>
          <p className='text-xl'>{description}</p>
          <div className="flex space-x-3">
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
          <p className="text-2xl py-5 font-bold">
            {'₩ '}
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
          <button onClick={handleSubmit} className="border-2 border-moon-navy py-3 text-xl font-bold hover:bg-moon-warm-pink">
            Add to cart
          </button>
        </div>
      </section>
    </>
  );
}
