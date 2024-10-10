import { createContext, useEffect, useState } from "react";
import axios from '../utils/axios'

 export const DataContext = createContext();


  export function DataProvider  ({children})  {

     const [data , setdata] = useState( JSON.parse(localStorage.getItem("data")) ||null); 
        
   const getProducts = async  () =>{
    try {
        const response = await axios.get("/products");
     // console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log(error);
      
    }
   }
  
   useEffect(  () =>{
    getProducts();
   
  } ,[]);

 console.log(data);

return (
  
 
  <DataContext.Provider value={[ data ,setdata]} >
  {children}
  </DataContext.Provider>
  
)

 }

