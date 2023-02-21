import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../api/products';
import { uploadFile } from '../api/upload';

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
    uploadFile(image)
      .then((data) => {
        setProduct({ ...product, url: data.url });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({});
    navigate('/');
  };

  return (
    <section className='px-5 space-y-6'>
      <div>{product.url && <img className="w-50 md:w-72" src={product.url} alt={product.name} />}</div>
      <div className="w-full h-12 flex items-center">
        <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
        <button className="p-2 bg-moon-gray rounded-md" onClick={uploadImage}>
          Upload
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center [&>input]:w-full [&>input]:h-12 [&>select]:h-12 space-y-2 md:space-y-4">
        <input type="text" id="name" placeholder="제품명" onChange={(e) => setProduct({ ...product, name: e.target.value })} />
        <input type="text" id="price" placeholder="가격" onChange={(e) => setProduct({ ...product, price: e.target.value })} />
        <input type="text" id="category" placeholder="카테고리" onChange={(e) => setProduct({ ...product, category: e.target.value })} />
        <input type="text" id="description" placeholder="제품설명" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
        <input type="text" id="options" placeholder="Options.." onChange={(e) => setProduct({ ...product, options: e.target.value })} />
        <button type="submit" className='bg-moon-gray w-full py-2 hover:bg-moon-pink'>Upload a item</button>
      </form>
    </section>
  );
}
