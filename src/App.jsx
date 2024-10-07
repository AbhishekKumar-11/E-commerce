import { useEffect, useState } from 'react'
import './App.css'
import { Routes , Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'


function App() {
   const {search , pathname} =  useLocation();
   let filter = decodeURIComponent(search.split('=')[1])  ;
    console.log(pathname) ;
    console.log(filter != 'undefined')
  return (

   
      <div className='h-screen w-screen flex  '>
     <span>  <Link to={'/'} className = {`text-red-500 absolute  left-[20%] top-[5%] ${ (filter == 'undefined' && pathname == '/') ? 'hidden': ''} `} >Home </Link></span>
        <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route path='/details/:id' element={<Details/>}/>
       
        </Routes>

      </div>
      

      
    
  ) 
}

export default App
