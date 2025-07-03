import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
  
    <>
        <header className="header">
                <div className="logo">
                    <img src="./public/images/logo.png" alt="logo"/>
                </div>
    
                <ul className="nav-link">
                    <NavLink to="/">Home</NavLink>
                    <li className="dropdown">
                        <NavLink to="/shop" className="drop-btn">Shop<i className="fa-solid fa-angle-down" id="caret-down"></i></NavLink>
                        <div className="dropdown-menu">
                            <NavLink to="/sweet">Sweet</NavLink>
                            <NavLink to="/namkeen">Namkeen</NavLink>
                            <NavLink to="/collection">Collection</NavLink>
                            <NavLink to="/best">Best Seller</NavLink>
                        </div>
                    </li>

                    <li className='dropdown'>
                      <NavLink to="/collection" className='dropdown-btn'>Collection <i className="fa-solid fa-angle-down" id="caret-down"></i></NavLink>
                      <div className="dropdown-menu2" style={{width:"300px"}}>
                            <NavLink to="/corporate">Corporate Collection</NavLink>
                            <NavLink to="/wedding">Wedding Collection</NavLink>
                           
                        </div>

                    </li>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/about">About us</NavLink>
                    <NavLink to="/contact">Contact us</NavLink>
                </ul>
                <div className="icon">
                    <a><i className="fa-solid fa-magnifying-glass"></i></a>
                    <a><i className="fa-solid fa-bag-shopping"></i></a>
                    <a><i className="fa-regular fa-user"></i></a>
                </div>
    
            </header>
    
    </>

  )
}

export default Navbar
