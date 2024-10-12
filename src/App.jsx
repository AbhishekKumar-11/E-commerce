import { useEffect, useState } from 'react'
import './App.css'
import { Routes , Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'


function App() {
   const {search , pathname} =  useLocation();
   let filter = decodeURIComponent(search.split('=')[1])  ;
    
  return (

   
      <div className='h-screen w-screen flex  '>
     <span>  <Link to={'/'} className = {`text-red-500 absolute  left-[20%] top-[4%] ${ (filter == 'undefined' && pathname == '/') ? 'hidden': ''} `} >Home </Link></span>
        <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route path='/create' element={<Create/>} />
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>

      </div>
      

      
    
  ) 
}

export default App
