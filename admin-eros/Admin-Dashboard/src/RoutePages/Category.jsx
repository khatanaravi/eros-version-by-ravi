import React from 'react'
import './Category.css'
import { Link, useNavigate } from 'react-router-dom'

const Category = () => {

  const Items3 = [
    {"img" : "https://tse2.mm.bing.net/th?id=OIP.TR6gVZG-S4YxWTyGXxAHiwHaFk&pid=Api&P=0&h=180",
     "Category" : "Sweet",
     "quantity" : 24, 
    },

    
      {
        "img": "https://tse2.mm.bing.net/th?id=OIP.TR6gVZG-S4YxWTyGXxAHiwHaFk&pid=Api&P=0&h=180",
        "Category": "Sweet",
        "quantity": 24
      },
      {
        "img": "https://tse2.mm.bing.net/th?id=OIP.ALNVrDctDELKjmqSe9uniQHaFh&pid=Api&P=0&h=180",
        "Category": "Sweet",
        "quantity": 15
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Sweet",
        "quantity": 30
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Namkeen",
        "quantity": 50
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Namkeen",
        "quantity": 20
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Namkeen",
        "quantity": 35
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Sweet",
        "quantity": 18
      },
      {
        "img": "https://tse1.mm.bing.net/th?id=OIP.NUBrnKyNWYaGiMDFR0YPqAHaHa&pid=Api&P=0&h=180",
        "Category": "Namkeen",
        "quantity": 25
      }
    ]
    
  

  const navigate = useNavigate();
  return (
    <div className='category-container'>
      <div className="top-bar">
          <button className="back-btn" onClick={() => navigate(-1)}><i className="fa-solid fa-chevron-left"></i></button>
          <p>Categories</p>
          <div className="top-right">
            <button ><Link to="#" style={{color:"#fff"}}><i className="fa-solid fa-plus add-btn"></i> Add Category</Link></button>
          </div>
        </div>

        <div className="product-card-container">
       
       {
         Items3.map((e , indexe)=>
          {
          
            return(
              <div className="category-card" id={indexe}>
             <div className="card-image">
             <img src={e.img}/>

            </div>
            <div className="name-size">
            <h4 className='ans-card'>{e.Category}</h4>
            <p className='ans-card'>{e.quantity} items</p>
           </div>
           </div>
            )
         })

       }
           
        </div>
    </div>
  )
}

export default Category