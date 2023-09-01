import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Products from './Products'
import Product from './Product'
import Register from './Register'
import Cart from './Cart'
import ErrorPage from './ErrorPage'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
          <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default Home
