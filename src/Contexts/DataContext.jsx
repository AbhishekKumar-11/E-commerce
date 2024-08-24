import { createContext, useEffect, useState } from "react";

 export const DataContext = createContext([]);


  export function DataProvider  ({children})  {

     const [data , setdata] = useState([]); 

  
   useEffect(  () =>{
     fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(json=>setdata(json));
   
  } ,[]);
  console.log(data)


return (
  <>
 
  <DataContext.Provider value={{data}} >
  {children}
  </DataContext.Provider>
  </>
)

 }

