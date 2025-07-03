import React, { useState } from 'react'
import './buttons.css'
import Logo from '../assets/nicol-logo.png'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Location_icon from '../assets/address_location_icon.png'
import Phone_icon from '../assets/phone_icon.png'
import Mail_icon from '../assets/mail_icon.png'
import Facebook_icon from '../assets/facebook_icon.png'
import Instagram_icon from '../assets/instagram_icon.png'
import Twitter_icon from '../assets/twitter_icon.png'
import productImg from '../assets/cake_img.png'
import no_results_found_png from '../assets/no_results_found.png'

const NavBar_Footer = () => {
    const dummyItems = [
        {
            name: 'Forrero Rocher Cake',
            category: 'special cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Chocolate Cake',
            category: 'special cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Vanilla Cake',
            category: 'special cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Pound Cake',
            category: 'special cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Sponge Cake',
            category: 'nicol cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Carrot Cake',
            category: 'nicol cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Red Velvet Cake',
            category: 'nicol cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Fruit Cake',
            category: 'nicol cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Tiramisu',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Cheesecake',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Aayushi Cake',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'bakery',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'ravi',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'pvp',
            category: 'chocolate cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'xyz',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'abc',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'all cakes',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'cakes',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'special cakes',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'new cakes',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'hello',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'dummy data cakes',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'lorem ipsum',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'Java Chip',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
        {
            name: 'QQ',
            category: 'cheese cake',
            img: 'https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f4a69991a2.jpg'
        },
    ]
    const inputQueryUpdate = (e) => {
        setSearchQuery(e);
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResultClasses, setSearchResultClasses] = useState('search_result_section display_none');
    const toggleSearchResultClasses = () => {
        if (searchResultClasses === 'search_result_section') {
            setSearchResultClasses('search_result_section display_none');
        }
        else {
            setSearchResultClasses('search_result_section');
        }
    }
    const CloseSearchResult = () => {
        setSearchQuery('');
        document.getElementById('search_query_input').value = "";
    }
    const [search_filters, setSearch_filters] = useState('all');
    const changeSearch_filters = (e) => {
        console.log('before',search_filters);
        var selectedValue = e.target.value;
        setSearch_filters(selectedValue);
        console.log('after',search_filters);
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [responsiveNavbarClasses, setResponsiveNavbarClasses] = useState('hide responsive_navbar');
    const closeNavbarOnRoute = () => {
        setIsMenuOpen(!isMenuOpen);
        if(isMenuOpen){
            setResponsiveNavbarClasses('hide responsive_navbar');
        }
        else{
            setResponsiveNavbarClasses('responsive_navbar');
        }
    }
    const goToCart = ()=>{
        navigate('/cart');
    }
    const goToFav = ()=>{
        navigate('/profile-favourites');
    }
    const location = useLocation();
  return (
    <>
    
    <div className="offer_section">Any particular sale! - GET instant 50% Discount!</div>

    {/* Navbar  */}
    <div className="sticky_div">

    <div className="navbar">
        <div className="navbar_logo">
            <img src={Logo} alt="" onClick={()=>{navigate('/');ScrollToTop()}}/>
        </div>

        <div className="navbar_links">
            <NavLink to='/' onClick={()=>{ScrollToTop()}} className='link'>Home</NavLink>
            <NavLink to='/products' onClick={()=>{ScrollToTop()}} className='link'>Products</NavLink>
            <NavLink to='/categories' onClick={()=>{ScrollToTop()}} className='link'>Categories</NavLink>
            <NavLink to='/customize' onClick={()=>{ScrollToTop()}} className='link'>Customize</NavLink>
            {/* <NavLink to='/blog' className={location.pathname==='/blog'?'link_active link':'link'}>Blog</NavLink> */}
            <NavLink to='/about-us' onClick={()=>{ScrollToTop()}} className='link'>About Us</NavLink>
            <NavLink to='/contact-us' onClick={()=>{ScrollToTop()}} className='link'>Contact Us</NavLink>
        </div>
        <div className="login_signup_button_navbar">
            <button className='login_button' onClick={()=>navigate('/login')}>Login</button>
        </div>
        <div className="navbar_menu_bars">
            {
                isMenuOpen?<svg onClick={()=>{closeNavbarOnRoute()}} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.23652 0.368171L7.5 5.63165L12.7362 0.395443C12.8519 0.272334 12.9912 0.173851 13.1458 0.1059C13.3005 0.0379486 13.4673 0.00192859 13.6362 0C13.9978 0 14.3447 0.143664 14.6004 0.399388C14.8561 0.655112 14.9998 1.00195 14.9998 1.3636C15.003 1.53078 14.9719 1.69684 14.9086 1.8516C14.8453 2.00636 14.751 2.14655 14.6316 2.26357L9.32722 7.49978L14.6316 12.8042C14.8563 13.024 14.9881 13.3218 14.9998 13.636C14.9998 13.9976 14.8561 14.3444 14.6004 14.6002C14.3447 14.8559 13.9978 14.9996 13.6362 14.9996C13.4624 15.0068 13.289 14.9778 13.127 14.9144C12.9651 14.851 12.818 14.7546 12.6953 14.6314L7.5 9.3679L2.25016 14.6177C2.13494 14.7368 1.9973 14.8318 1.84517 14.8973C1.69304 14.9628 1.52945 14.9976 1.36382 14.9996C1.00217 14.9996 0.655334 14.8559 0.39961 14.6002C0.143886 14.3444 0.000221866 13.9976 0.000221866 13.636C-0.00295735 13.4688 0.0280602 13.3027 0.0913714 13.148C0.154682 12.9932 0.248951 12.853 0.368393 12.736L5.67278 7.49978L0.368393 2.19539C0.143652 1.97552 0.0118665 1.67779 0.000221866 1.3636C0.000221866 1.00195 0.143886 0.655112 0.39961 0.399388C0.655334 0.143664 1.00217 0 1.36382 0C1.69108 0.00409079 2.00471 0.13636 2.23652 0.368171Z" fill="black" fill-opacity="0.4"/>
                </svg>:<svg className='navbar_menu_bars' onClick={()=>{closeNavbarOnRoute()}} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 14.5C18.3852 14.5002 18.7556 14.6486 19.0344 14.9144C19.3132 15.1802 19.479 15.5431 19.4975 15.9279C19.516 16.3127 19.3858 16.6898 19.1338 16.9812C18.8818 17.2726 18.5274 17.4558 18.144 17.493L18 17.5H2C1.61478 17.4998 1.24441 17.3514 0.965613 17.0856C0.686821 16.8198 0.520988 16.4569 0.502476 16.0721C0.483964 15.6873 0.614192 15.3102 0.866175 15.0188C1.11816 14.7274 1.47258 14.5442 1.856 14.507L2 14.5H18ZM18 7.5C18.3978 7.5 18.7794 7.65804 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9C19.5 9.39782 19.342 9.77936 19.0607 10.0607C18.7794 10.342 18.3978 10.5 18 10.5H2C1.60218 10.5 1.22064 10.342 0.93934 10.0607C0.658035 9.77936 0.5 9.39782 0.5 9C0.5 8.60218 0.658035 8.22064 0.93934 7.93934C1.22064 7.65804 1.60218 7.5 2 7.5H18ZM18 0.5C18.3978 0.5 18.7794 0.658035 19.0607 0.93934C19.342 1.22064 19.5 1.60218 19.5 2C19.5 2.39782 19.342 2.77936 19.0607 3.06066C18.7794 3.34196 18.3978 3.5 18 3.5H2C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5H18Z" fill="black"/>
                </svg>
            }
        </div>
    </div>
    <div className={responsiveNavbarClasses}>
        <div className="responsive_navbar_links">
            <NavLink to='/' onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} className='link'>Home</NavLink>
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute();}} to='/products' className='link'>Products</NavLink>
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/categories' className='link'>Categories</NavLink>
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/customize' className='link'>Customize</NavLink>
            {/* <NavLink onClick={()=>{closeNavbarOnRoute()}} to='/blog' className={location.pathname==='/blog'?'link_active link':'link'}>Blog</NavLink> */}
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/about-us' className='link'>About Us</NavLink>
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/contact-us' className='link'>Contact Us</NavLink>
            <NavLink onClick={()=>{ScrollToTop(); closeNavbarOnRoute()}} to='/profile-user' className='link'>Profile</NavLink>
            <div className="responsive_navbar_cart_wishlist">
                <div className="fav_cart_icons">

                <svg onClick={()=>{ScrollToTop();goToFav();closeNavbarOnRoute()}} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="23" r="23" fill="white"/>
                <path d="M23.5 31L22.2675 29.921C17.89 26.1035 15 23.5777 15 20.4959C15 17.97 17.057 16 19.675 16C21.154 16 22.5735 16.6621 23.5 17.7003C24.4265 16.6621 25.846 16 27.325 16C29.943 16 32 17.97 32 20.4959C32 23.5777 29.11 26.1035 24.7325 29.921L23.5 31Z" fill="#F16855"/>
                </svg>

                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{ScrollToTop();goToCart();closeNavbarOnRoute();}}>
                <circle cx="23" cy="23" r="23" fill="white"/>
                <path d="M27.8 27.8C26.912 27.8 26.2 28.512 26.2 29.4C26.2 29.8243 26.3686 30.2313 26.6686 30.5314C26.9687 30.8314 27.3757 31 27.8 31C28.2243 31 28.6313 30.8314 28.9314 30.5314C29.2314 30.2313 29.4 29.8243 29.4 29.4C29.4 28.9757 29.2314 28.5687 28.9314 28.2686C28.6313 27.9686 28.2243 27.8 27.8 27.8ZM15 15V16.6H16.6L19.48 22.672L18.392 24.632C18.272 24.856 18.2 25.12 18.2 25.4C18.2 25.8243 18.3686 26.2313 18.6686 26.5314C18.9687 26.8314 19.3757 27 19.8 27H29.4V25.4H20.136C20.083 25.4 20.0321 25.3789 19.9946 25.3414C19.9571 25.3039 19.936 25.253 19.936 25.2C19.936 25.16 19.944 25.128 19.96 25.104L20.68 23.8H26.64C27.24 23.8 27.768 23.464 28.04 22.976L30.904 17.8C30.96 17.672 31 17.536 31 17.4C31 17.1878 30.9157 16.9843 30.7657 16.8343C30.6157 16.6843 30.4122 16.6 30.2 16.6H18.368L17.616 15M19.8 27.8C18.912 27.8 18.2 28.512 18.2 29.4C18.2 29.8243 18.3686 30.2313 18.6686 30.5314C18.9687 30.8314 19.3757 31 19.8 31C20.2243 31 20.6313 30.8314 20.9314 30.5314C21.2314 30.2313 21.4 29.8243 21.4 29.4C21.4 28.9757 21.2314 28.5687 20.9314 28.2686C20.6313 27.9686 20.2243 27.8 19.8 27.8Z" fill="#F16855"/>
                </svg>

                </div>
                <button className='button_1' onClick={()=>{navigate('/login');closeNavbarOnRoute()}}>Login</button>
            </div>
        </div>
    </div>

    {/* Search Section  */}

    <div className="search_section">
        <div className="search_input">
            <div className="search">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.658 13.6877C14.2938 13.052 14.7981 12.2972 15.1422 11.4666C15.4862 10.6359 15.6633 9.74562 15.6633 8.84652C15.6633 7.94743 15.4862 7.05713 15.1422 6.22647C14.7981 5.39581 14.2938 4.64106 13.658 4.0053C13.0223 3.36954 12.2675 2.86523 11.4369 2.52116C10.6062 2.17709 9.7159 2 8.8168 2C7.9177 2 7.02741 2.17709 6.19675 2.52116C5.36609 2.86523 4.61133 3.36954 3.97558 4.0053C2.6916 5.28927 1.97028 7.03071 1.97028 8.84652C1.97028 10.6623 2.6916 12.4038 3.97558 13.6877C5.25955 14.9717 7.00099 15.693 8.8168 15.693C10.6326 15.693 12.3741 14.9717 13.658 13.6877ZM13.658 13.6877L17.9703 18" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" name="" id="search_query_input" placeholder='Search for your item' onChange={(e)=>{setSearchQuery(e.target.value.toLowerCase());toggleSearchResultClasses();}}/>
                <svg width="15" onClick={CloseSearchResult} className={searchQuery==''?'display_none':''} height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.23652 0.368171L7.5 5.63165L12.7362 0.395443C12.8519 0.272334 12.9912 0.173851 13.1458 0.1059C13.3005 0.0379486 13.4673 0.00192859 13.6362 0C13.9978 0 14.3447 0.143664 14.6004 0.399388C14.8561 0.655112 14.9998 1.00195 14.9998 1.3636C15.003 1.53078 14.9719 1.69684 14.9086 1.8516C14.8453 2.00636 14.751 2.14655 14.6316 2.26357L9.32722 7.49978L14.6316 12.8042C14.8563 13.024 14.9881 13.3218 14.9998 13.636C14.9998 13.9976 14.8561 14.3444 14.6004 14.6002C14.3447 14.8559 13.9978 14.9996 13.6362 14.9996C13.4624 15.0068 13.289 14.9778 13.127 14.9144C12.9651 14.851 12.818 14.7546 12.6953 14.6314L7.5 9.3679L2.25016 14.6177C2.13494 14.7368 1.9973 14.8318 1.84517 14.8973C1.69304 14.9628 1.52945 14.9976 1.36382 14.9996C1.00217 14.9996 0.655334 14.8559 0.39961 14.6002C0.143886 14.3444 0.000221866 13.9976 0.000221866 13.636C-0.00295735 13.4688 0.0280602 13.3027 0.0913714 13.148C0.154682 12.9932 0.248951 12.853 0.368393 12.736L5.67278 7.49978L0.368393 2.19539C0.143652 1.97552 0.0118665 1.67779 0.000221866 1.3636C0.000221866 1.00195 0.143886 0.655112 0.39961 0.399388C0.655334 0.143664 1.00217 0 1.36382 0C1.69108 0.00409079 2.00471 0.13636 2.23652 0.368171Z" fill="black" fill-opacity="0.4"/>
                </svg>
            </div>
            <div className="search_filter_dropdown">
                <select name="search_filter" id="search-filter" onChange={(e)=>{changeSearch_filters(e)}}>
                    <option value="all" selected>All Categories</option>
                    <option value="special cakes">Special Cakes</option>
                    <option value="nicol cakes">Nicol Cakes</option>
                    <option value="chocolate cakes">Chocolate Cakes</option>
                    <option value="cheese cakes">Cheese Cakes</option>
                </select>
            </div>
        </div>
        <div className="fav_cart_icons fav_cart_icons_hide">

            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{goToFav();ScrollToTop()}}>
            <circle cx="23" cy="23" r="23" fill="white"/>
            <path d="M23.5 31L22.2675 29.921C17.89 26.1035 15 23.5777 15 20.4959C15 17.97 17.057 16 19.675 16C21.154 16 22.5735 16.6621 23.5 17.7003C24.4265 16.6621 25.846 16 27.325 16C29.943 16 32 17.97 32 20.4959C32 23.5777 29.11 26.1035 24.7325 29.921L23.5 31Z" fill="#F16855"/>
            </svg>

            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{goToCart();ScrollToTop()}}>
            <circle cx="23" cy="23" r="23" fill="white"/>
            <path d="M27.8 27.8C26.912 27.8 26.2 28.512 26.2 29.4C26.2 29.8243 26.3686 30.2313 26.6686 30.5314C26.9687 30.8314 27.3757 31 27.8 31C28.2243 31 28.6313 30.8314 28.9314 30.5314C29.2314 30.2313 29.4 29.8243 29.4 29.4C29.4 28.9757 29.2314 28.5687 28.9314 28.2686C28.6313 27.9686 28.2243 27.8 27.8 27.8ZM15 15V16.6H16.6L19.48 22.672L18.392 24.632C18.272 24.856 18.2 25.12 18.2 25.4C18.2 25.8243 18.3686 26.2313 18.6686 26.5314C18.9687 26.8314 19.3757 27 19.8 27H29.4V25.4H20.136C20.083 25.4 20.0321 25.3789 19.9946 25.3414C19.9571 25.3039 19.936 25.253 19.936 25.2C19.936 25.16 19.944 25.128 19.96 25.104L20.68 23.8H26.64C27.24 23.8 27.768 23.464 28.04 22.976L30.904 17.8C30.96 17.672 31 17.536 31 17.4C31 17.1878 30.9157 16.9843 30.7657 16.8343C30.6157 16.6843 30.4122 16.6 30.2 16.6H18.368L17.616 15M19.8 27.8C18.912 27.8 18.2 28.512 18.2 29.4C18.2 29.8243 18.3686 30.2313 18.6686 30.5314C18.9687 30.8314 19.3757 31 19.8 31C20.2243 31 20.6313 30.8314 20.9314 30.5314C21.2314 30.2313 21.4 29.8243 21.4 29.4C21.4 28.9757 21.2314 28.5687 20.9314 28.2686C20.6313 27.9686 20.2243 27.8 19.8 27.8Z" fill="#F16855"/>
            </svg>

        </div>
    </div>
    <div className={searchQuery==''?'search_result_section display_none':'search_result_section'}>
        {   

            dummyItems.filter((e)=>e.name.toLowerCase().includes(searchQuery))
            .map((item, index)=>{
                return (
                    <>
                    <div className="productCard">
                        <div className="productImageContainer">
                        <img src={item.img} alt="" srcset=""/>
                        </div>
                        <div>{item.name}</div>
                    </div>
                    </>
                )
            })
        }
        <h3>{dummyItems.filter((e)=>e.name.toLowerCase().includes(searchQuery)).length==0
        ?<div className='no_result_found_container'><img src={no_results_found_png} alt="" srcset="" height={200}/>No items found</div>
        :''}</h3>
    </div>
    </div>
    
    <Outlet></Outlet>

    <div className="footer_main">
        <div className="footer_section_1">
            <div className="footer_contact_information">
                <div className="footer_logo_section">
                    <div className="footer_logo"><img src={Logo} alt="" srcset="" /></div>
                    Contact Information
                </div>
                <div className='footer_contact_info_all_cards'>
                    <div className="footer_contact_info_card">
                        <img src={Location_icon} alt="" />
                        One world, B-611, Nr. Sheetal Park, 150 ft. Ring Road, Rajkot-360001, Gujarat (India).
                    </div>
                    <div className="footer_contact_info_card">
                        <img src={Phone_icon} alt="" />
                        +123 4567 890
                    </div>
                    <div className="footer_contact_info_card">
                        <img src={Mail_icon} alt="" />
                        contact@nicolscake.com
                    </div>
                </div>
            </div>
            <div className="footer_quick_links">
                <div className='primary_color'>Quick Links</div>
                <div>
                    <div className='footer_link' onClick={()=>{navigate('/');ScrollToTop()}}>Home</div>
                    <div className='footer_link' onClick={()=>{navigate('/products');ScrollToTop()}}>Products</div>
                    <div className='footer_link' onClick={()=>{navigate('/categories');ScrollToTop()}}>Categories</div>
                    <div className='footer_link' onClick={()=>{navigate('/customize');ScrollToTop()}}>Customize</div>
                    <div className='footer_link' onClick={()=>{navigate('/about-us');ScrollToTop()}}>About Us</div>
                    <div className='footer_link' onClick={()=>{navigate('/contact-us');ScrollToTop()}}>Contact Us</div>
                </div>
            </div>
            <div className="footer_policies">
                <div className='primary_color'>Policies</div>
                <div>
                    <div className='footer_link' onClick={()=>{navigate('/');ScrollToTop()}}>FAQs</div>
                    <div className='footer_link' onClick={()=>{navigate('/policy-payment-shipping');ScrollToTop()}}>Payment & Shipings</div>
                    <div className='footer_link' onClick={()=>{navigate('/policy-return-refund');ScrollToTop()}}>Return & Refund</div>
                    <div className='footer_link' onClick={()=>{navigate('/privacy-policy');ScrollToTop()}}>Privacy Policy</div>
                    <div className='footer_link' onClick={()=>{navigate('/terms-and-condition');ScrollToTop()}}>Terms & Condition</div>
                </div>
            </div>
            <div className="footer_follow_us">
                <div className='primary_color'>Follow Us</div>
                <div>
                    <img src={Facebook_icon} alt="" />
                    <img src={Instagram_icon} alt="" />
                    <img src={Twitter_icon} alt="" />
                </div>
            </div>
        </div>
        <div className="hr_line"></div>
        <div className="footer_section_2">
            <div>© Copyright 2024, all rights reserved</div>
        </div>
    </div>

    </>
  )
}

export default NavBar_Footer