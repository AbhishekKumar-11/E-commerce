import React, { useState } from 'react'

const Create = () => {
    const [image,setImage]  = useState();
    const [title,setTitle]  = useState();
    const [category,setCategory]  = useState();
    const [price,setPrice]  = useState();
    const [description,setdescription]  = useState();

      function handleClick(e)  {
           e.preventDefault();
           console.log({
            image,
            title,
            category,
            price,
            description

           })
           

      }
    
  return (
    <form className='w-1/2   ml-[25%] p-20  flex  flex-col gap-4'>
         <label>Add New Product</label>
          <input 
          className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
          type="url" 
          value={image}
          placeholder='enter your image url'
          onChange={(e) => setImage(e.target.value) }
            />

         <input 
          className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
          type="text" 
          value={title}
          placeholder='title'
          onChange={(e) => setTitle(e.target.value) }
            />

            <div className=' flex gap-6'>
            <input 
          className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
          type="text" 
          value={category}
          placeholder='category'
          onChange={(e) => setCategory(e.target.value) }
            />

            <input 
          className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
          type="text" 
          value={price}
          placeholder='price'
          onChange={(e) => setPrice(e.target.value) }
            />
            </div>

            <textarea 
            placeholder='enter the product description here...'
           className='bg-slate-100 focus:outline-none focus:ring focus:border-blue-500 rounded p-2.5 '
           value={description}
           onChange={(e) =>setdescription(e.target.value)}
            rows='10'
            />

         <button onClick={ (e) => handleClick(e)} className='px-3 py-5  border rounded border-blue-200 text-blue-200
    '>Add new Product </button>

    </form>
  )
}

export default Create