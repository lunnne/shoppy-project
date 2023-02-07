import React, { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setItems([]);
      const data = snapshot.val();
      const products = data.products
      if (data !== null) {
        Object.values(products).map((item) => {
          setItems((prev) => [...prev, item]);
        });
      }
    });
  }, []);

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
