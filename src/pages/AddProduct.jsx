import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ref, set } from 'firebase/database';
import { db } from '../utils/firebase';
import { v4 as uuidv4 } from 'uuid';

export default function AddProduct() {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    category: '',
    description: '',
    options: '',
    url: '',
    id: '',
  });

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'zegih5rl');
    data.append('cloud_name', 'drhck7yy');
    axios
      .post('https://api.cloudinary.com/v1_1/drhck7nyy/image/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data.url);
        setProduct({ ...product, url: data.url });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    const {name, category, price, description, options, url} = product
    set(ref(db, `/products/${uuid}`), {
      name,
      category,
      price,
      description,
      options,
      url,
      id: uuid,
    });
    setProduct({});
    navigate('/');
  };

  return (
    <>
      <div>
      {product.url && <img className="w-72" src={product.url} alt="image" />}
      </div>
      <div className="w-full h-12 flex items-center">
        <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
        <button className="p-2 bg-moon-gray rounded-md" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center [&>input]:w-full [&>input]:h-12 [&>select]:h-12 space-y-2">
        <input type="text" id="name" placeholder="제품명" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <input type="text" id="price" placeholder="가격" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <input type="text" id="category" placeholder="카테고리" onChange={(e) => setProduct({ ...product, category: e.target.value })} />
        <input type="text" id="description" placeholder="제품설명" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        <input type="text" id="options" placeholder="Options.." onChange={(e) => setProduct({ ...product, options: e.target.value })} />
        <button type="submit">Upload a item</button>
      </form>
    </>
  );
}
