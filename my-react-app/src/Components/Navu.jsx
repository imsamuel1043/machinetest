import React from 'react'
import "../assets/machine.css"
import profileimg from "../assets/Images/profileimg.jpg";

const Navu = () => {
    return (
        <div className='navbar'>
            
            <ul className='liststyle'>
              
                <li>
                    <div className="profilecontainer">
                        <span ><i  className="bi bi-bell-fill bellicon"></i></span>
                        <img src={profileimg} alt="Propic" className="profile" />
                        <span className="username">Naja Fathima</span>
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Navu