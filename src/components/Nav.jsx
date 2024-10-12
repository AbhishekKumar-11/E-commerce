import React, { useContext, useEffect } from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { DataContext } from '../utils/DataContext';
import axios from '../utils/axios';
function Nav() {

  const [data ,setData  ]  = useContext(DataContext) ;

 
  let dictictCategories = data && data.reduce((acc,cv)=>[...acc,cv.category.trim()],[]);

  dictictCategories = [...new Set(dictictCategories)]



  function color(){
      return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.5)`
  }
  
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
    <a href='/create' className='px-3 py-5  border rounded border-blue-200 text-blue-200
    '>Add new Product </a>
    <hr className='w-full mt-3'/>
    <h1 className='text-2xl  mb-3 w-[80%] '>Category Filter </h1> 
    <div className='w-[80%] '>
      {dictictCategories.map((elem,index)=>
      <Link  to={`/?category=${elem}`} key={index} className='mb-3 flex items-center '>
        
      <span style={{backgroundColor:color()}} className=' rounded-full inline-block w-[10px] h-[10px]  mr-1'></span>
      {elem}
      </Link>)}
       
    </div>
  </nav>
  )
}

export default Nav