import React from 'react'
import { useNavigate } from 'react-router-dom';
import './buttons.css'
import { NavLink } from 'react-router-dom'

const Profile_notification = () => {
    const navigate = useNavigate();
    const profile_nav = [
        {
            nav_link_name: "Profile",
            icon: <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            nav_link: "/profile-user",
        },
        {
            nav_link_name: "Notification",
            icon: <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3699 17.4L15.3749 14.13V9.49497C15.4459 8.26257 15.1666 7.03526 14.5693 5.95492C13.9721 4.87458 13.0813 3.98533 11.9999 3.38997C12.0144 3.20024 12.0144 3.00969 11.9999 2.81997C11.9883 2.43777 11.9014 2.0616 11.7443 1.71298C11.5872 1.36436 11.363 1.05013 11.0843 0.788229C10.8057 0.526332 10.4782 0.321914 10.1206 0.186659C9.76291 0.0514048 9.3821 -0.012034 8.99991 -3.06536e-05C8.61771 -0.012034 8.2369 0.0514048 7.87924 0.186659C7.52158 0.321914 7.19408 0.526332 6.91547 0.788229C6.63686 1.05013 6.41259 1.36436 6.25549 1.71298C6.09839 2.0616 6.01154 2.43777 5.99991 2.81997C5.97726 3.00929 5.97726 3.20064 5.99991 3.38997C4.91853 3.98533 4.02772 4.87458 3.43048 5.95492C2.83324 7.03526 2.55396 8.26257 2.62491 9.49497V14.13L0.629905 17.4C0.457336 17.6834 0.363087 18.0076 0.356784 18.3394C0.350481 18.6712 0.43235 18.9987 0.594029 19.2885C0.755709 19.5783 0.991407 19.82 1.27705 19.9889C1.5627 20.1578 1.88806 20.2479 2.21991 20.25H4.87491C4.9443 21.2871 5.41269 22.257 6.18179 22.9561C6.95089 23.6553 7.96091 24.0294 8.99991 24C10.0389 24.0294 11.0489 23.6553 11.818 22.9561C12.5871 22.257 13.0555 21.2871 13.1249 20.25H15.7799C16.1118 20.2479 16.4371 20.1578 16.7228 19.9889C17.0084 19.82 17.2441 19.5783 17.4058 19.2885C17.5675 18.9987 17.6493 18.6712 17.643 18.3394C17.6367 18.0076 17.5425 17.6834 17.3699 17.4ZM7.87491 2.81997C7.90157 2.54661 8.03429 2.29459 8.24459 2.11793C8.4549 1.94127 8.72605 1.85405 8.99991 1.87497C9.27376 1.85405 9.54491 1.94127 9.75522 2.11793C9.96552 2.29459 10.0982 2.54661 10.1249 2.81997C9.75027 2.79651 9.37454 2.79651 8.99991 2.81997C8.62527 2.79651 8.24954 2.79651 7.87491 2.81997ZM8.99991 22.125C8.4579 22.1522 7.92549 21.9745 7.50858 21.6271C7.09168 21.2796 6.82083 20.788 6.74991 20.25H11.2499C11.179 20.788 10.9081 21.2796 10.4912 21.6271C10.0743 21.9745 9.54191 22.1522 8.99991 22.125ZM2.21991 18.375L4.22991 15.12L4.49991 14.655V9.49497C4.4963 8.37162 4.80813 7.26982 5.39991 6.31497C5.80823 5.75535 6.35425 5.31075 6.985 5.02428C7.61575 4.73782 8.30982 4.61921 8.99991 4.67997C9.68999 4.61921 10.3841 4.73782 11.0148 5.02428C11.6456 5.31075 12.1916 5.75535 12.5999 6.31497C13.1917 7.26982 13.5035 8.37162 13.4999 9.49497V14.655L13.7699 15.12L15.7799 18.375H2.21991Z" fill="black"/>
            </svg>,
            nav_link: "/profile-notifications",
        },
        {
            nav_link_name: "Favourites",
            icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z" fill="black"/>
            </svg>,
            nav_link: "/profile-favourites",
        },
        {
            nav_link_name: "Order History",
            icon: <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1H3C1.89543 1 1 1.89543 1 3V16C1 17.1046 1.89543 18 3 18H13C14.1046 18 15 17.1046 15 16V3C15 1.89543 14.1046 1 13 1Z" stroke="black" stroke-width="2"/>
            <path d="M5 6H11M5 10H11M5 14H9" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>,
            nav_link: "/profile-orders",
        },
        {
            nav_link_name: "Logout",
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H2V2Z" fill="black"/>
            <path d="M17.65 8.65004L14.86 5.86004C14.7905 5.78859 14.7012 5.73952 14.6036 5.71911C14.506 5.69869 14.4045 5.70787 14.3121 5.74545C14.2198 5.78304 14.1408 5.84733 14.0851 5.93009C14.0295 6.01286 13.9999 6.11033 14 6.21004V8.00004H7C6.45 8.00004 6 8.45004 6 9.00004C6 9.55004 6.45 10 7 10H14V11.79C14 12.24 14.54 12.46 14.85 12.14L17.64 9.35004C17.84 9.16004 17.84 8.84004 17.65 8.65004Z" fill="black"/>
            </svg>,
            nav_link: "/logout",
        },
    ];
    const notifications = [
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering.',
            notification_time: '2022-01-01 12:00:00',
        },
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering. Order No.: 220033456 is success. Thankyou for ordering. Order No.: 220033456 is success. Thankyou for ordering. Order No.: 220033456 is success.',
            notification_time: '2022-01-01 12:00:00',
        },
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering.',
            notification_time: '2022-01-01 12:00:00',
        },
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering.',
            notification_time: '2022-01-01 12:00:00',
        },
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering.',
            notification_time: '2022-01-01 12:00:00',
        },
        {
            notification_name: 'Order Success',
            notification_des: 'Order No.: 220033456 is success. Thankyou for ordering.',
            notification_time: '2022-01-01 12:00:00',
        }
    ];
  return (
    <>
    <div className="profile_main_div">
    <div className="profile_navigations">
        <div>
        <div className="cart_heading">
            My Account
        </div>
        <div className="profile_navigations_link">
            {
                profile_nav.map((item, index)=>{
                    return(
                        <>
                        <div>
                            
                            <NavLink to={item.nav_link} className='navlink_active'>{item.icon}<span>{item.nav_link_name}</span></NavLink>
                        </div>
                        <div className='hr_line'></div>
                        </>
                    )
                })
            }
        </div>
        </div>
    </div>
    <div className="profile_contents">
        <div className="profile_details_main">
            <div className="profile_details_heading">
                Notifications
            </div>
            <div className="all_notifications">
            {
                notifications.map((item,index)=>{
                    return(
                        <div className="profile_notification_card">
                            <div className="notification_info">
                                <div className="notification_title">{item.notification_name}</div>
                                <div className="notification_des">{item.notification_des}</div>
                            </div>
                            <div className="notification_delete_and_time">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.23652 0.368171L7.5 5.63165L12.7362 0.395443C12.8519 0.272334 12.9912 0.173851 13.1458 0.1059C13.3005 0.0379486 13.4673 0.00192859 13.6362 0C13.9978 0 14.3447 0.143664 14.6004 0.399388C14.8561 0.655112 14.9998 1.00195 14.9998 1.3636C15.003 1.53078 14.9719 1.69684 14.9086 1.8516C14.8453 2.00636 14.751 2.14655 14.6316 2.26357L9.32722 7.49978L14.6316 12.8042C14.8563 13.024 14.9881 13.3218 14.9998 13.636C14.9998 13.9976 14.8561 14.3444 14.6004 14.6002C14.3447 14.8559 13.9978 14.9996 13.6362 14.9996C13.4624 15.0068 13.289 14.9778 13.127 14.9144C12.9651 14.851 12.818 14.7546 12.6953 14.6314L7.5 9.3679L2.25016 14.6177C2.13494 14.7368 1.9973 14.8318 1.84517 14.8973C1.69304 14.9628 1.52945 14.9976 1.36382 14.9996C1.00217 14.9996 0.655334 14.8559 0.39961 14.6002C0.143886 14.3444 0.000221866 13.9976 0.000221866 13.636C-0.00295735 13.4688 0.0280602 13.3027 0.0913714 13.148C0.154682 12.9932 0.248951 12.853 0.368393 12.736L5.67278 7.49978L0.368393 2.19539C0.143652 1.97552 0.0118665 1.67779 0.000221866 1.3636C0.000221866 1.00195 0.143886 0.655112 0.39961 0.399388C0.655334 0.143664 1.00217 0 1.36382 0C1.69108 0.00409079 2.00471 0.13636 2.23652 0.368171Z" fill="black"/>
                                </svg>
                                <div className="notification_time">{item.notification_time}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Profile_notification