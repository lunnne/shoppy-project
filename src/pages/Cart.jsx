import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { FaPlus, FaEquals } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/products';
import CartCard from '../components/CartCard';

export default function Cart() {
  const { user } = UserAuth();
  const { isLoading, error, data: listOfCart } = useQuery(['carts', user], () => getCart(user));

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  const subTotal = listOfCart.map((item) => item.price * item.quantity).reduce((acc, cur) => (acc + cur), 0);
  const total = parseInt(subTotal)+ 3000;
  

  return (
    <>
      <section className="flex flex-col p-5 text-moon-dark-navy items-center md:my-10 [&>*]:w-full">
        <h1 className="text-lg md:text-3xl md:py-5 border-b-2 border-moon-navy  md:mb-5">My cart</h1>
        <ul className="my-10 [&>*]:py-3">
          {listOfCart.map((item, index) => (
            <CartCard key={index} item={item} user={user}/>
          ))}
        </ul>
        <div className="flex justify-evenly items-center mb-10 [&>h3]: text-center py-5">
          <h3 className="bg-moon-gray px-5 py-3 rounded-lg">
            <p className="py-2">subtotal</p>
            <p>{subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
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
            <p className="py-2">total</p> <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </h3>
        </div>
        <button className="bg-moon-pink py-3 hover:bg-moon-green" onClick={()=>alert('your order is placed!😍')}>order</button>
      </section>
    </>
  );
}
