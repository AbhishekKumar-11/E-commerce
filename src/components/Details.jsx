import React, {  useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading';
import axios from '../utils/axios';
import { DataContext } from '../utils/DataContext';

function Details() {

  const [ data ,setdata]  =  useContext(DataContext);
  const navigate = useNavigate();
  //console.log(data)
  const [product , setProduct ] = useState(null);
  const{id} =   useParams();
  //console.log(id);
  
   // const [data,setData] =  useState(null); 
    const getProduct  = async ()=>{
      setProduct(data.filter((p) => p.id == id)[0])  ;
      
     // console.log(product)
    }
    useEffect(()=>{ getProduct() },[product])

   function  deleHandler (pid)  {
     
    setdata( data.filter((p) => p.id !== pid) );
      navigate("/");

    }
    
  return (
    <> {product ? 
      <div className='w-[70%] h-full  m-auto px-[5%] py-[10%]   flex  '>
   <img className='h-[80%] w-[50%] object-contain' src={product.image}  alt=''/>
   <div className=' content h-full w-full flex flex-col px-20  py-2'>
    
    <h1 className='text-4xl '>{product.title} </h1>
    <h3 className='text-zinc-400 my-5'>{product.category}</h3>
    <h2 className='text-red-300'>${product.price} </h2>
    <p className='my-4'>{product.description}</p>
  <div className='my-5 '>
  <Link className='px-3 py-5  border rounded border-blue-200 text-blue-200 w-[80%] text-center
    '>Edit</Link>
    <button onClick={ () => deleHandler(product.id)}  className='px-3 py-5  border rounded border-red-200 text-red-200 w-[30%] text-center ml-10
    '>Delete</button>
  </div>
   
   </div>
     </div> : <Loading/>  }
   
    
    </>
  )
}

export default Details