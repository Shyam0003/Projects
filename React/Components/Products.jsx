import React from 'react';

function Products({ name, age, sname }) {
  return (
    <div className='w-full h-screen bg-black text-slate-200'>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{sname}</h1>
    </div>
  );
}

export default Products;
