import React from 'react';

export default function AddProduct() {
  return (
    <div className='flex flex-col space-y-2'>
      <div>chooseFile</div>
      <label htmlFor="name"></label> <input type="text" id="name" placeholder="제품명" />
      <label htmlFor="price"></label>
      <input type="text" id="price" placeholder="가격" />
      <label htmlFor="category"></label>
      <input type="text" id="category" placeholder="카테고리" />
      <label htmlFor="description"></label>
      <input type="text" id="description" placeholder="제품설명" />
      <label htmlFor="options"></label>
      <input type="text" id="options" placeholder="options.." />
    </div>
  );
}
