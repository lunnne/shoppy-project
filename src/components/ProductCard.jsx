import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const { name, price, url, id } = item;
  return (<div id='thecard'>
    <button  id='card' onClick={()=> navigate(`/products/${id}`, {state : item})}  className='flex flex-col justify-center items-center' >
      <img className='border-b-2' src={url} alt={name} />
        <p className='md:text-xl font-bold pt-1 text-moon-dark-navy'>{name}</p>
        <p className='md:text-lg font-bold py-1  text-moon-dark-navy'>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
    </button>
    <button id='theback' onClick={()=> navigate(`/products/${id}`, {state : item})} > <img className='w-2/3 m-auto' src="/magicwand.png" alt="" /></button>
    </div>
  );
}
