import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Navbar} from './components/index.js'
import Home from "./Pages/Home.jsx";
import Products from './Pages/Products.jsx';
import Orders from "./Pages/Orders.jsx";
import Settings from "./Pages/Settings.jsx";
import SignUp from './Pages/SignUp.jsx';
import Statistics from './Pages/Statistics.jsx';




const App=()=> {
  

  return (
    <div className="">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />}/>
          <Route path='/home' element={<Home/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path='/statistics' element={<Statistics/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
