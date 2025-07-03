import React from 'react'
import l1 from './assets/veried-icon.png'
import l2 from './assets/vegetarian-icon.png'
import l3 from './assets/hygen-icon.png'

export const Quality = () => {
  return (
    <div className="quality">
            <div className="verify">
                <div className="img"><img src={l1} id="vegi"/> <span>High Quality</span></div>

            </div>
            <div className="verify">
                <div className="img"><img src={l2}/> <span>100 % Vegetarian</span></div>


            </div>
            <div className="verify">
                <div className="img"><img src={l3} alt=""/><span>Hygenic</span></div>

            </div>
        </div>
  )
}
