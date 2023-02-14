import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';

export default function CartCard({ item }) {
  const { name, price, url, options } = item;
  return (
    <li className="flex justify-around items-center">
      <img className="w-48 border-moon-navy" src={url} alt="photo" />
      <div>
          <p className='text-lg'>{name}</p>
          <p>option : {options}</p>
      </div>
      <p>{price}</p>
      <div className='flex space-x-3 justify-center items-center'>
        <AiOutlineMinus /><p>1</p><AiOutlinePlus/>
      </div>
      <div>
        <BsTrashFill />
      </div>
    </li>
  );
}
