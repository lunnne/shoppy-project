import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BsFillCartFill } from 'react-icons/bs';
import { getCart } from '../api/products';
import { UserAuth } from '../context/AuthContext';

export default function CartBanner() {
  const { user } = UserAuth();
  const { data } = useQuery(['carts', user], () => getCart(user));

  console.log(data);
  return (
    <>
      <BsFillCartFill />
      {data && <p className="rounded-full text-center text-base bg-moon-pink w-6 h-6 -translate-x-1 -translate-y-2">{data.length}</p>}
    </>
  );
}
