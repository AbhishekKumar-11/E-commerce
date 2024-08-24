import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a href='/create' className='px-3 py-5  border rounded border-blue-200 text-blue-200
    '>Add new Product </a>
    <hr className='w-full mt-3'/>
    <h1 className='text-2xl  mb-3 w-[80%] '>Category Filter </h1> 
    <ul className='w-[80%] '>
      <li className='mb-3 flex items-center '>
        
        <span className='bg-blue-400 rounded-full inline-block w-[10px] h-[10px]  mr-1'></span>
        Category one 
        </li>
        <li className='mb-3 flex items-center '>
        
        <span className='bg-blue-400 rounded-full inline-block w-[10px] h-[10px] mr-1'></span>
        Category two 
        </li>
        <li className='mb-3 flex items-center '>
        
        <span className='bg-blue-400 rounded-full inline-block w-[10px] h-[10px] mr-1'></span>
        Category three 
        </li>
    </ul>
  </nav>
  )
}

export default Nav