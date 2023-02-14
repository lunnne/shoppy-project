import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';

export default function CartCard({ item, onIncrement, onDelete }) {
  const {id, name, price, url, options, quantity } = item;

  return (
    <li className="flex justify-around items-center">
      <img className="w-48 border-moon-navy" src={url} alt="photo" />
      <div>
        <p className="text-lg">{name}</p>
        <p>option : {options}</p>
      </div>
      <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      <div className="flex space-x-3 justify-center items-center">
        <button>
          <AiOutlineMinus />
        </button>
        <p>{quantity}</p>
        <button onClick={()=>onIncrement(id)}>
          <AiOutlinePlus />
        </button>
      </div>
      <button onClick={onDelete}>
        <BsTrashFill />
      </button>
    </li>
  );
}
