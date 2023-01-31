import React from 'react';

export default function ProductCard({ item }) {
  const { name, price, url } = item;
  return (
    <div id='card' className='flex flex-col justify-center items-center border-b-2' >
      <img className="border-b-2" src={url} alt={name} />
      <p className='text-lg font-bold py-3 text-center hover:bg-moon-warm-pink w-full'>{name}</p>
    </div>
  );
}
