import React from 'react'
import CartImg from '../assets/cake_img.png'
import { useState } from "react";
import './buttons.css'

const Cart = () => {
    // let qty = 1;
    const [qty, setQty] = useState(1);
    const increaseQty = () => {
        setQty(qty + 1);
    }
    const decreaseQty = () => {
        if (qty > 1) {
            setQty(qty - 1);
        } 
        else {
            setQty(1);
        }
    }
    const cartItems = [
        {
            name: 'Forrero Rocher Cake',
            category: 'Chocolate Cake',
            price: 25.99,
        },
        {
            name: 'Black Berry Cake',
            category: 'Chocolate Cake',
            price: 49.99,
        },
        {
            name: 'Chocolate Cheese Cake',
            category: 'Cheese Cake',
            price: 49.99,
        },
        {
            name: 'Apple Fruit Cake',
            category: 'Fruit Cake',
            price: 39.99,
        },
        {
            name: 'Nicol\'s Special Cake',
            category: 'Nicol Cake',
            price: 79.99,
        },
        {
            name: 'DC Cake',
            category: 'xyz Cake',
            price: 79.99,
        },
    ]
    
  return (
    <>

    <div className="default_page_navigation_div">
        <div className="default_page_heading">Cart</div>
        <div className="default_page_navigation_links"><a href='/'>Home</a> | Cart</div>
    </div>
    <div className="cart_page_main_bg">
        <div className="cart_div">
            <div className="cart_heading">
                Cart
            </div>
            <div className="cart_items">
                {
                    cartItems.map((item, index)=>{
                        return (
                            <>
                            
                            <div className="cart_card">
                            <div className='cart_card_cross_div'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.23652 0.368171L7.5 5.63165L12.7362 0.395443C12.8519 0.272334 12.9912 0.173851 13.1458 0.1059C13.3005 0.0379486 13.4673 0.00192859 13.6362 0C13.9978 0 14.3447 0.143664 14.6004 0.399388C14.8561 0.655112 14.9998 1.00195 14.9998 1.3636C15.003 1.53078 14.9719 1.69684 14.9086 1.8516C14.8453 2.00636 14.751 2.14655 14.6316 2.26357L9.32722 7.49978L14.6316 12.8042C14.8563 13.024 14.9881 13.3218 14.9998 13.636C14.9998 13.9976 14.8561 14.3444 14.6004 14.6002C14.3447 14.8559 13.9978 14.9996 13.6362 14.9996C13.4624 15.0068 13.289 14.9778 13.127 14.9144C12.9651 14.851 12.818 14.7546 12.6953 14.6314L7.5 9.3679L2.25016 14.6177C2.13494 14.7368 1.9973 14.8318 1.84517 14.8973C1.69304 14.9628 1.52945 14.9976 1.36382 14.9996C1.00217 14.9996 0.655334 14.8559 0.39961 14.6002C0.143886 14.3444 0.000221866 13.9976 0.000221866 13.636C-0.00295735 13.4688 0.0280602 13.3027 0.0913714 13.148C0.154682 12.9932 0.248951 12.853 0.368393 12.736L5.67278 7.49978L0.368393 2.19539C0.143652 1.97552 0.0118665 1.67779 0.000221866 1.3636C0.000221866 1.00195 0.143886 0.655112 0.39961 0.399388C0.655334 0.143664 1.00217 0 1.36382 0C1.69108 0.00409079 2.00471 0.13636 2.23652 0.368171Z" fill="black" fill-opacity="0.4"/>
                                </svg>
                            </div>
                            <div className='cart_card_img'>
                                <img src={CartImg} alt="" />
                            </div>
                            <div className='cart_card_info'>
                                <div className="cart_card_info_and_qty">
                                    <div className="cart_card_info_name_category">
                                        <div className="cart_card_info_main_name">{item.name}</div>
                                        <div className="cart_card_info_category">{item.category}</div>
                                    </div>
                                    <div className="cart_card_qty_main">
                                        <button className='qty-btn' onClick={()=>decreaseQty()}>-</button>
                                            {qty}
                                        <button className='qty-btn' onClick={()=>increaseQty()}>+</button>
                                    </div>
                                </div>
                                <div className="cart_card_info_prize">
                                    {item.price}$
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className='hr_line'></div>
                            
                            </>
                        )
                    })
                }

            </div>
        </div>

        <div className="order_summary">
        <span className='heading'>Order Summary</span>
        <div className="order_details">
            <div className="details_items">
                <p>Subtotal</p>
                <span>$150.00</span>
            </div>
            <div className="details_items">
                <p>Delivery</p>
                <span id='green_font'>Free</span>
            </div>
        </div>
        <div className='hr_line'/>
        <div className="terms_condition_accept_div">
            <input type="checkbox" name="" id="" />
            <div>i agree to the rules for using the trading platform and returning</div>
        </div>
        <div className="order_btn">
            <button className='order-btn'>Order</button>
        </div>
        </div>

    </div>

    

    </>
  )
}

export default Cart