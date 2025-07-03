import React from 'react'
import './Card.css'
import Card2 from './ProductCard'

const Card = () => {
  return (
    <>
            <div className="quality">
            <div className="verify">
                <div className="img"><img src="./public/images/veried-icon.png" id="vegi"/> <span>High Quality</span></div>

            </div>
            <div className="verify">
                <div className="img"><img src="./public/images/vegetarian-icon.png"/> <span>100 % Vegetarian</span></div>


            </div>
            <div className="verify">
                <div className="img"><img src="./public/images/hygen-icon.png" alt=""/><span>Hygenic</span></div>

            </div>
        </div>
    <div className="card-box">
    <div className="card">
        <h3 className='h3'>Best Sellers</h3>
        <p className='p'>Sweeten your day with a wide variety of our best selling delicacies</p>

        <button style={{backgroundColor :"#9D0910" ,color: "#E4B8B8 "}} className='button'>Sweets</button>
        <button style={{backgroundColor: "#E4B8B8" ,color: "#9D0910"}} className='button'>Namkeens</button>
      
     <Card2/>
    </div>    
  </div>   
  </>
  )
}

export default Card