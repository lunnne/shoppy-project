import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';
import { UserAuth } from '../context/AuthContext';
import CartCard from '../components/CartCard';

export default function Cart() {
  const { user } = UserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setItems([]);
      const data = snapshot.val();
      const products = data.carts;
      if (data !== null) {
        Object.values(products).map((item) => {
          setItems((prev) => [...prev, item]);
        });
      }
    });
  }, []);

  const filtered = items.filter((item) => item.userId === user.uid);
  console.log(filtered);

  return (
    <>
      <section className="flex flex-col items-center">
      <h1 className="text-3xl">My cart</h1>
        {filtered.map((item, index) => (
          <ul index={index} className="w-2/3">
            <CartCard item={item} />
          </ul>
        ))}
        <h3> subtotal : </h3>
        <h3> shipping : </h3>
        <h3> total : </h3>
        <button>order</button>
      </section>
    </>
  );
}
