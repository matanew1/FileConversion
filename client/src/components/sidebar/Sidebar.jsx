import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <nav className='sidebar-nav'>
            <ul className="sidebar-menu">
                <Link to={'/dashboard'}>
                    <div className="logo-with-title">
                        <label>Dashboard</label><img className="dash" 
                        src="/dashboard.jpeg" alt="LOGO" />
                    </div>
                </Link>
                <Link to={'/profile'}>
                    <div className="logo-with-title">
                    <label>Profile</label><img className="prof" 
                        src="/profile.jpeg" alt="LOGO" />
                    </div>
                </Link>
            </ul>
        </nav>
    )

}

export default Sidebar