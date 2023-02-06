import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { name, price, url, id } = item;
  return (
    <button onClick={()=> navigate(`/products/${id}`, {state : item})} id='card' className='flex flex-col justify-center items-center border-b-2' >
      <img className="border-b-2" src={url} alt={name} />
      <p className='text-lg font-bold py-3 text-center hover:bg-moon-warm-pink w-full'>{name}</p>
    </button>
  );
}
