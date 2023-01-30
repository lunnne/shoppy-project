import React from 'react';

export default function ProductCard({ item }) {
  const { name, price, url } = item;
  return (
    <div id='card' className='' >
      <img className="w-60 rounded-md" src={url} alt={name} />
      <p>{name}</p>
    </div>
  );
}
