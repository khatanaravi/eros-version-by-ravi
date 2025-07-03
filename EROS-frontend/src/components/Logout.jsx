import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const goToProfile = () => {
        navigate(-1);
    }
  return (
    <div className="logout_main">
        <div className="logout_container">
            <div className="logout_header">Logout</div>
            <div className="logout_confirmation">
                Are you sure you want to logout?
                <div className="logout_buttons">
                    <button className="logout_yes">Yes</button>
                    <button className="logout_no" onClick={()=>goToProfile()}>No</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Logout