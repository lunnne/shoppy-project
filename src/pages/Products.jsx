import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../api/products';

export default function Products() {
  const { isLoading, error, data: items } = useQuery(['products'], getAllProducts);

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  return (
    <div className="border-moon-navy text-moon-navy border-4">
      <ul className="grid grid-cols-4 justify-center items-center">
        {items.map((item) => (
          <li id='maincontainer' className="flex flex-col items-center border-r-2 border-b-2" key={item.id}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
