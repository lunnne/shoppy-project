import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const { state } = useLocation();
  const { category, price, description, name, options, url } = state;
  const optionArr = options.split(',');

  return (
    <div className=" border-moon-navy">
      <p className="border-x-4 border-moon-navy py-2 px-2 text-md text-moon-navy">
        {' '}
        category {'>'} {category}
      </p>
      <section className="flex border-4 border-moon-navy w-full">
        <img className="w-2/5 border-r-4  border-moon-navy" src={url} alt={name} />
        <div className="flex p-10 w-full flex-col justify-center items-center space-y-10">
          <p className="font-bold text-4xl uppercase">{name}</p>
          <p className="text-2xl font-bold">
            {'₩ '}
            {price}
          </p>
          <p className="text-2xl">{description}</p>
          <div className="flex space-x-2">
            <label htmlFor="options">Option : </label>
            <select name="options" id="options">
              <option value="select">Choose your option</option>
              {optionArr.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <button className="border-2 border-moon-navy w-3/4 py-2 text-xl hover:bg-moon-warm-pink">Add to Cart</button>
        </div>
      </section>
    </div>
  );
}
