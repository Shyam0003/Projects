import React, { useState } from 'react';
import Products from './Products';

export default function App() {
  const [a, setA] = useState(70);

  return (
    <>
      <div className='w-full h-screen bg-black text-[#fff]'>
        <h1>{a}</h1>
        <button onClick={() => setA(a + 1)}>Click</button>
        <Products name="Hello World" age="17" sname="Shyam" />
      </div>
    </>
  );
}
