import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { addToCart, deleteItem } from '../api/products';

export default function CartCard({ item, user }) {
  const { name, price, url, options, quantity } = item;

  const onIncrement = () => {
    addToCart(user, { ...item, quantity: quantity + 1 });
  };

  const onDecrement = () => {
    if (item.quantity > 1) {
      addToCart(user, { ...item, quantity: quantity - 1 });
    } else {
      return item;
    }
  };

  const onDelete = () => {
    deleteItem(user, item);
  };

  return (
    <li className="flex justify-around items-center">
      <img className="w-48 border-moon-navy" src={url} alt="photo" />
      <div>
        <p className="text-lg">{name}</p>
        <p>option : {options}</p>
      </div>
      <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
      <div className="flex space-x-3 justify-center items-center">
        <button onClick={onDecrement}>
          <AiOutlineMinus />
        </button>
        <p>{quantity}</p>
        <button onClick={onIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
      <button onClick={onDelete}>
        <BsTrashFill />
      </button>
    </li>
  );
}
