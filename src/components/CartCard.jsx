import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';

export default function CartCard({ item }) {
  const { name, price, url } = item;
  return (
    <li className="w-full flex justify-between items-center">
      <img className="w-48 border-2 border-moon-navy" src={url} alt="photo" />
      <p>{name}</p>
      <p>{price}</p>
      <div className='flex'>
        <AiOutlinePlus /> <p>num</p><AiOutlineMinus />
      </div>
      <div>
        <BsTrashFill />
      </div>
    </li>
  );
}
