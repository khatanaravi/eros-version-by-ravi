import './Navbar.css'
import { NavLink } from 'react-router-dom'
import img1 from "../assets/logo.png"
import { useState } from 'react'
const Navbar = () => {

    const [menuName, setMenuName] =  useState('fa-solid fa-bars');
    const Display=()=>{
       
        if(menuName === 'fa-solid fa-bars')
        {
            let menu = document.querySelector("#nav");
            menu.style.display ="flex";
            setMenuName("fa-solid fa-xmark")
        }
        else{
            let menu = document.querySelector("#nav");
            menu.style.display ="none";
            setMenuName("fa-solid fa-bars")
            
        }

    }

    const Hide=()=>{
       let menu = document.querySelector("#nav");
       menu.style.display = "none"
    }
  return (
  
    <>
        <header className="header">
                <div className="logo">
                    <img src={img1} alt="logo"/>
                </div>
              <div className="menu-bar">
              <i className={menuName} id="menu-btn"onClick={Display}></i>
              </div>
                <ul className="nav-link"  id="nav">
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
                    <a><i className="fa-solid fa-magnifying-glass" ></i></a>
                    <a><i className="fa-solid fa-bag-shopping"></i></a>
                    <a><i className="fa-regular fa-user" id="user"></i></a>
                </div>
    
            </header>
    
    </>

  )
}

export default Navbar
