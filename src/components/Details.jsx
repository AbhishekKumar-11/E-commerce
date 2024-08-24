import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from '../Contexts/DataContext';

function Details() {

  const {data}  = useContext(DataContext) ;
  const{id} =   useParams();
   
   
  return (
    <>
     <div className='w-[70%] h-full  m-auto px-[5%] py-[10%]   flex  '>
   <img className='h-[80%] w-[50%] object-contain' src={data[id].image}  alt=''/>
   <div className=' content h-full w-full flex flex-col px-20  py-2'>
    
    <h1 className='text-4xl '>{data[id].title} </h1>
    <h3 className='text-zinc-400 my-5'>{data[id].category}</h3>
    <h2 className='text-red-300'>${data[id].price} </h2>
    <p className='my-4'>{data[id].description}</p>
  <div className='my-5 '>
  <Link className='px-3 py-5  border rounded border-blue-200 text-blue-200 w-[80%] text-center
    '>Edit</Link>
    <Link className='px-3 py-5  border rounded border-red-200 text-red-200 w-[30%] text-center ml-10
    '>Delete</Link>
  </div>
   
   </div>
     </div>
    
    </>
  )
}

export default Details