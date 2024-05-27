import React from 'react'

function Products({name,data}) {
  return (
    <div className='w-full h-screen bg-black text-slate-200'>
        <h1>{name}</h1>
        <h1>{data.age}</h1>
        <h1>{data.sname}</h1>
    </div>

  )
}

export default Products