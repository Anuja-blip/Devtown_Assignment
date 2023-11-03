import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Components/Products';
const App = () => {
  return (
    //<React.StrictMode>
      <BrowserRouter>
      <Routes>    
     
        <Route path="/" element={<Products/>}/>
       

      </Routes>
      </BrowserRouter>
   // </React.StrictMode>
  )
}

export default App
