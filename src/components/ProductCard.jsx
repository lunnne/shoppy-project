import React from 'react';

export default function ProductCard({ item }) {
  const { name, price, url } = item;
  return (
    <div className='p-10 flex-col justify-center items-center'>
      <img className='w-52' src={url} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
