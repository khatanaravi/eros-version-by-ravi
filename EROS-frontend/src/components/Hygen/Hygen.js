import React from 'react';
import './Hygen.css'
import img1 from '../assets/hygen-icon.png';
import img2 from '../assets/vegetarian-icon.png';
import img3 from '../assets/veried-icon.png';

 const Hygen = () => {
  return (
    <>
    <div className="quality">
    <div className="verify">
      <div className="img">
        <img src={img1} id="vegi" /> <span>High Quality</span>
      </div>
    </div>
    <div className="verify">
      <div className="img">
        <img src={img2} /> <span>100 % Vegetarian</span>
      </div>
    </div>
    <div className="verify">
      <div className="img">
        <img src={img3} alt="" />
        <span>Hygenic</span>
      </div>
    </div>
  </div>
  </>
  )
}

export default Hygen;