import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Catalog from './pages/Catalog'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="wrapper">
        <Header/>
          <Routes>
              <Route path='/' exact element={<Home />}/>
              <Route path='/catalog/:slug' element={<Product/>}/>
              <Route path='/catalog' element={<Catalog/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Contact/>
        <Footer/>
    </div>
  )
}

export default App