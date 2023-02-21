import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BsFillCartFill } from 'react-icons/bs';
import { getCart } from '../api/products';
import { UserAuth } from '../context/AuthContext';

export default function CartBanner() {
  const { user } = UserAuth();
  const { data } = useQuery(['carts', user], () => getCart(user));

  return (
    <>
      <BsFillCartFill />
      {data && <p className="rounded-full w-5 h-5 md:text-lg text-center bg-moon-pink lg:w-6 lg:h-6 -translate-x-1.5 -translate-y-1.5">{data.length}</p>}
    </>
  );
}
