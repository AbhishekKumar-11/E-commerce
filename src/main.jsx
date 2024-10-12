
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './utils/DataContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <DataProvider>
    <BrowserRouter>
        <App />
        <ToastContainer />
    </BrowserRouter>
    </DataProvider>
   
  
)
