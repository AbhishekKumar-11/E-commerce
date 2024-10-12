import { createContext, useEffect, useState } from "react";
import axios from '../utils/axios'

 export const DataContext = createContext();


  export function DataProvider  ({children})  {

     const [data , setdata] = useState( JSON.parse(localStorage.getItem("data")) || null); 
        
   const getProducts = async  () =>{
    try {
        const response = await axios.get("/products");
    
      setdata(JSON.parse(localStorage.getItem("data"))||response.data);
    } catch (error) {
      console.log(error);
      
    }
   }
  
   useEffect(  () =>{
    getProducts();
  } ,[]);



return (
  
 
  <DataContext.Provider value={[ data ,setdata]} >
  {children}
  </DataContext.Provider>
  
)

 }

