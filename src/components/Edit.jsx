import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../utils/DataContext';
import { nanoid } from 'nanoid';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const{id} =   useParams();
    const [data ,setData  ]  = useContext(DataContext) ;
   
      const [product ,setProduct] =  useState({
        image:"",
        title:"",
        category:"",
        price:"",
        description :"" 

      })
    
    const navigate = useNavigate();
      function handleClick(e)  {
           e.preventDefault();
           if(product.title.trim().length < 5 || product.category.length < 5 || product.price.length <1 || product.description.trim().length < 5){
              alert ("the fields must be filled with at least 4 characters. ");
              return ;
           }
          const copyData  = [...data]
          copyData[id] = {...data[id] , ...product};
       

          setData([...copyData]);
          

            localStorage.setItem("data",JSON.stringify(copyData));
            toast("Edited succesfully");  
            navigate(-1);
           
      }
   const changeHandler =  (e)=>{
     
      setProduct( {...product , [e.target.name]:e.target.value }  );    
  
      
   } 
    useEffect(()=>{
        setProduct(data[id]);
    },[id])
   
  return (
    <form onSubmit={ (e) => handleClick(e)} className='w-1/2   ml-[25%] p-20  flex  flex-col gap-4'>
    <label>Edit  Product</label>
     <input 
     className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
     type="url" 
    name='image'
    placeholder='enter your image url'
     onChange={ changeHandler }
     value={product && product.image}
       />

    <input 
     className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
     type="text" 
     name='title'
     placeholder='title'
     onChange={ changeHandler}
     value={product && product.title}
       />

       <div className=' flex gap-6'>
       <input 
     className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
     type="text" 
     name='category'
     placeholder='category'
     onChange={ changeHandler }
     value={product && product.category}
       />

       <input 
     className='bg-slate-100 rounded w-full h-10 p-2.5 focus:outline-none focus:ring focus:border-blue-500'
     type="number" 
     name='price'
     placeholder='price'
     onChange={ changeHandler}
     value={ product && product.price}
       />
       </div>

       <textarea 
       placeholder='enter the product description here...'
      className='bg-slate-100 focus:outline-none focus:ring focus:border-blue-500 rounded p-2.5 '
      name='description'
      onChange={ changeHandler}
      value={product && product.description}
       rows='10'
       />   

    <button  className='px-3 py-5  border rounded border-blue-200 text-blue-200
'>Edit Product </button>

</form>
  )
}

export default Edit