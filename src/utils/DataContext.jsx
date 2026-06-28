import { createContext, useEffect, useState } from 'react'
import axios from '../utils/axios'

export const DataContext = createContext()

export function DataProvider ({ children }) {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('data')) || null)

  const getProducts = async () => {
    try {
      
      if(data == null){
        const response = await axios.get('/products')
        setdata(response.data)
      localStorage.setItem('data', JSON.stringify(response.data))
      console.log("api call done");
      }else{
        console.log("api cal not done");
        console.log(data);
      }
     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <DataContext.Provider value={[data, setdata]}>
      {children}
    </DataContext.Provider>
  )
}
