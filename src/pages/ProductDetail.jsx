import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ref, set } from 'firebase/database';
import { db } from '../utils/firebase';
import { UserAuth } from '../context/AuthContext';
import { v4 as uuidv4 } from 'uuid';


export default function ProductDetail() {
  const { user } = UserAuth();
  const { state } = useLocation();
  const { category, price, description, name, options, url } = state;
  const [option, setOption] = useState('')
  const navigate = useNavigate()
  const optionArr = options.split(',');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    set(ref(db, `/carts/${uuid}}`), {
      name,
      category,
      price,
      description,
      name,
      options : option,
      url,
      userId : user.uid
    })
    navigate('/')
  }

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
            <select name="options" id="options" onChange={(e)=>setOption(e.target.value)}>
              <option value="select">Choose your option</option>
              {optionArr.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
          <button onClick={handleSubmit} className="border-2 border-moon-navy w-3/4 py-2 text-xl hover:bg-moon-warm-pink">Add to cart</button>
        </div>
      </section>
    </div>
  );
}
