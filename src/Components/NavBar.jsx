import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { Modal } from './Modal';
import './NavBar.css'

export const NavBar = () => {
  const [ contador, setContador ] = useState(false)
    
  return (<>
  <ul className='nav-list'>
    <img src={require('./logo.png')} alt='' className='lista-img'/>
    
    <li><NavLink to="/" className="lista">Home</NavLink></li>
    <li><NavLink to="/Products" className="lista">Products</NavLink></li>
    <li><NavLink to="/AboutUs" className="lista">About Us</NavLink></li>
    <li><NavLink to="/Products" className="lista">Sign In</NavLink></li>
    <li><NavLink to="/AboutUs" className="lista">Sign Up</NavLink></li>

    <input type='text' placeholder='Buscar...' className='input-search'></input>
    <FiSearch className='icon-search'/>
    <HiOutlineShoppingCart className='icon-cart' onClick={()=>setContador(!contador)}/>
  </ul>
  {contador ? <Modal/> : console.log('El estado es falso')}
  </>)
}
