import React from 'react';
import {useQueryClient, useMutation} from '@tanstack/react-query'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { addToCart, deleteItem } from '../api/products';

export default function CartCard({ item, user }) {
  const { name, price, url, options, quantity } = item;
  const queryClient = useQueryClient();

  const addNewToCart = useMutation(({ user, product }) => addToCart(user, product), {
    onSuccess: () =>  queryClient.invalidateQueries(['carts']),
  });

  const deleteItemFromCart = useMutation(({user,item})=> deleteItem(user,item), {
    onSuccess: () =>  queryClient.invalidateQueries(['carts']),
  })


  const onIncrement = () => {
    addNewToCart.mutate({user : user, product : {...item, quantity: quantity + 1 }})
  }

  const onDecrement = () => {
    if (item.quantity > 1) {
      addNewToCart.mutate({user : user, product : { ...item, quantity: quantity - 1 }})
    } else {
      return item;
    }
  };

  const onDelete = () => {
    deleteItemFromCart.mutate({user, item})
  };

  return (
    <li className="flex justify-around items-center text-sm md:text-lg">
      <img className="w-20 md:w-48 border-moon-navy" src={url} alt={name} />
      <div>
        <p className="md:text-lg">{name}</p>
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
