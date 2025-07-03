import React from 'react'
import './section.css'

const Section = () => {
    return (
        <>
            <div className="banner-box">
                <div className="top-box">
                    <div className="img">

                        <img src="../images/sweet1.jpg" alt="product" />
                    </div>
                    <div className="top-right">

                        <h2>Elegant Sweet Packaging</h2>
                        <p>Celebrate special moments with our beautifully <br/>crafted sweet boxes</p>
                       
                       <div className="btn">
                        <button>Explore Sweet Packaging</button>
                       </div>
                    </div>



                </div>
                <div className="bottom-box">
                    <div className="bottom-left">

                        <h2>Charming Namkeen Hampers</h2>
                        <p>Delight your loved ones with our exquisite namkeen gift bags.</p>
                        <div className="btn2">
                        <button>Browse Namkeen Packaging</button>
                       </div> 
                    </div>

                    <div className="img2">

                        <img src="../images/namkeen1.jpg" alt="product" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section