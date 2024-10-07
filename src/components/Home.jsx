import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import {     Link, useLocation } from 'react-router-dom'
import { DataContext, DataProvider } from '../utils/DataContext';
import Loading from './Loading';
import axios from '../utils/axios';



function Home() { 
      

  const [data , setData]   =  useContext(DataContext) ;
 // console.log(data);
  const [filterdP ,setfilteredP] = useState(null);

  // console.log(filterdP );
  
   const {search , pathname}=  useLocation();

   const decodedValue =  decodeURIComponent(search.split('=')[1]);

   //console.log(decodedValue);
    
    async function filterData () {
      try {
        const {data} =  await axios.get(`products/category/${decodedValue}`)
        // console.log("first")
        // console.log(data); 
        setfilteredP(data);      
       // console.log("second") 
      } catch (error) {

        console.log(error);

      }
    }

    useEffect(() =>{
      if(decodedValue != 'undefined')filterData();
      else{console.log("uhvgui")
        if(data)setfilteredP([...data])
      }
    },[search,data])
  
  return (
    <>
   
  

   {  filterdP ? <>  <Nav/>
    <div   className='h-full w-[85%]  p-12 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

{filterdP.map((product , index)=>(
   <Link key={product.id} to={`/details/${product.id}`} className=' hover:scale-110 hover:text-blue-600 p-5 border shadow  w-[18%]  h-[25vh] flex  flex-col justify-center items-center rounded-xl m-2'>
   
   <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5 ' 
    style={{backgroundImage:`url(${product.image})`,}}></div> 
    <h1 className=''> {product.title} </h1>
 </Link>
))}

</div> </>  :  < Loading/>}
   
    
    </>
  )
}

export default Home