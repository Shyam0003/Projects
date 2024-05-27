import React, { useState } from 'react'
import Products from './Products';

export default function App() {
  var [a,b] = useState(70);
  return (
    <>
    <div className='w-full h-screen bg-black text-[#fff]'>
    <h1>{a}</h1>
    <button onClick={()=>b(a+1)}>Click</button>
    <Products name="Hello World " data={{age:"17",sname:"Shyam"}}/>
    </div>
    </>
  )
}

