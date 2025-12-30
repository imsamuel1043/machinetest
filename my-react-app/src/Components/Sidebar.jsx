import React from 'react'
import "../assets/machine.css";
import logo from "../assets/Images/logo.png";


const Sidebar = () => {
    return (
        <div>

            <div>

                <aside>

                    <ul className='sidelist'>
                        <li className='logopart'>
                            <div className='logo'>
                                <img src={logo} alt="logoimg" />
                            </div>
                        </li>
                        <li><i className="bi bi-house-door-fill ico"></i>  Dashboard</li>
                        <li><i className="bi bi-boxes ico"></i>  Department</li>
                        <li><i className="bi bi-people-fill ico"></i>  Member</li>
                        <li><i className="bi bi-archive-fill ico"></i>  Class</li>
                        <li><i className="bi bi-file-earmark-text-fill ico"></i>  Material</li>
                        <li><i className="bi bi-chat-dots-fill ico"></i>  Forum</li>
                        <li><i className="bi bi-newspaper ico"></i>  News</li>

                    </ul>
                </aside>
            </div>

        </div>
    )
}

export default Sidebar