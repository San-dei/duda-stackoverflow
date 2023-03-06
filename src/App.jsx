import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'


import { ErrorPage } from './Pages/ErrorPage'
import { AboutUs } from './Pages/AboutUs'
import { Products } from './Pages/Products'
import { HomePage } from './Pages/HomePage'
import { User } from './Pages/User';
import { SignIn } from './Pages/SignIn';
import { SingUp } from './Pages/SingUp';
import { NavBar } from './Components/NavBar'

import './App.css'

export default function App (){
  return (<>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/User' element={<User/>}/>
          <Route path='/User/SingIn' element={<SignIn/>}/>
          <Route path='/User/SingUp' element={<SingUp/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>)
}

