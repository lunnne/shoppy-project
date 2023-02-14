import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';
import { UserAuth } from '../context/AuthContext';
import CartCard from '../components/CartCard';
import { FaPlus, FaEquals } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/products';

export default function Cart() {
  const { user } = UserAuth();
  const { isLoading, error, data: listOfCart } = useQuery(['cart', user], () => getCart(user));

  console.log(listOfCart);
  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  return (
    <>
      <section className="flex flex-col items-center my-10 [&>*]:w-full">
        <h1 className="text-3xl py-5 border-b-2 mb-5">My cart</h1>
        <ul className="my-10 [&>*]:py-3">
          {listOfCart.map((item, index) => (
            <CartCard key={index} item={item} />
          ))}
        </ul>
        <div className="flex justify-evenly items-center mb-10 [&>h3]: text-center py-5">
          <h3 className="bg-moon-gray px-5 py-3 rounded-lg">
            <p className="py-2">subtotal</p>
            <p>20,000</p>
          </h3>
          <h3>
            <FaPlus />
          </h3>
          <h3 className="bg-moon-gray px-5 py-3 rounded-lg">
            <p className="py-2">shipping</p> <p>3,000</p>
          </h3>
          <h3>
            <FaEquals />
          </h3>
          <h3 className="bg-moon-gray px-5 py-3 rounded-lg">
            <p className="py-2">total</p> <p>23,000</p>
          </h3>
        </div>
        <button className="bg-moon-pink py-3">order</button>
      </section>
    </>
  );
}
