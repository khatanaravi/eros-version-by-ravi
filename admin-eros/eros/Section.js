import React from 'react'
import './Section.css'
import img3 from '../assets/5.png'
import img4 from '../assets/2.png'


const Section = () => {
    return (
        <>
            <div className="banner-box">
            <div className="quality">
            <div className="verify">
                <div className="img"><img src="src\assets\veried-icon.png" id="vegi"/> <span>High Quality</span></div>

            </div>
            <div className="verify">
                <div className="img"><img src="src\assets\vegetarian-icon.png"/> <span>100 % Vegetarian</span></div>


            </div>
            <div className="verify">
                <div className="img"><img src="src\assets\hygen-icon.png" alt=""/><span>Hygenic</span></div>

            </div>
        </div>
                <div className="top-box">
                    <div className="img">

                        <img src= {img3 } alt="product" style={{marginLeft:"4rem"}} />
                    </div>
                    <div className="top-right" >

                        <h2>Elegant Sweet Packaging</h2>
                        <p>Celebrate special moments with our beautifully crafted <br/> sweet boxes</p>
                       
                       
                        <button>Explore Sweet Packaging</button>
                      
                    </div>



                </div>
                <div className="bottom-box">
                    <div className="bottom-left" >

                        <h2>Charming Namkeen Hampers</h2>
                        <p>Delight your loved ones with our exquisite namkeen <br/>gift bags.</p>
                       
                        <button>Browse Namkeen Packaging</button>
                    
                    </div>

                    <div className="img2">

                        <img src= {img4} alt="product" style={{marginLeft:"5rem"}} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section
