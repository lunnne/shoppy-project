import React, { useEffect, useState } from 'react';
import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';
import ProductCard from '../components/ProductCard';
import { v4 as uuidv4 } from 'uuid';

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setItems([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) => {
          setItems((prev) => [...prev, item]);
        });
      }
    });
  }, []);

  console.log(items);
  return (
    <div className="border-2 border-moon-navy text-moon-navy">
      <div className="text-2xl text-center py-3">Products</div>
      <ul className="grid grid-cols-3">
        {' '}
        {items.map((item) => (
          <li key={uuidv4()}>
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
