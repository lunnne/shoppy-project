import React, { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { useQuery } from '@tanstack/react-query';
import { onValue, ref } from 'firebase/database';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../api/products';

export default function Products() {
  const { isLoading, error, data:items } = useQuery(['products'], getAllProducts);

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  return (
    <div className="border-4 border-moon-navy text-moon-navy">
      <ul className="grid grid-cols-4 gap-y-10 my-10 justify-center items-center">
        {items.map((item) => (
          <li className="flex flex-col items-center" key={item.id}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
