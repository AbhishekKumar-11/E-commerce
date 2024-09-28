import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';
import axios from '../utils/axios';

function Details() {

  
  const{id} =   useParams();
    const [data,setData] =  useState(null); 
    const getProduct  = async ()=>{
      const product = await axios.get(`/products/${id}`)
    //  console.log(product.data);
      setData(product.data);
      
    }
   getProduct() ;
    
    //console.log(data);
    
  return (
    <> {data ? 
      <div className='w-[70%] h-full  m-auto px-[5%] py-[10%]   flex  '>
   <img className='h-[80%] w-[50%] object-contain' src={data.image}  alt=''/>
   <div className=' content h-full w-full flex flex-col px-20  py-2'>
    
    <h1 className='text-4xl '>{data.title} </h1>
    <h3 className='text-zinc-400 my-5'>{data.category}</h3>
    <h2 className='text-red-300'>${data.price} </h2>
    <p className='my-4'>{data.description}</p>
  <div className='my-5 '>
  <Link className='px-3 py-5  border rounded border-blue-200 text-blue-200 w-[80%] text-center
    '>Edit</Link>
    <Link className='px-3 py-5  border rounded border-red-200 text-red-200 w-[30%] text-center ml-10
    '>Delete</Link>
  </div>
   
   </div>
     </div> : <Loading/>  }
   
    
    </>
  )
}

export default Details