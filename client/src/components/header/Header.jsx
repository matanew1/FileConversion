import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <nav className='header-nav'>
            <ul className="header-menu">
                <Link to={'/'}>
                    <div className="logo-with-title">
                        <h1>FILE CONVERSION</h1>
                        <img className="logo" src="/logo.jpeg" alt="LOGO" />
                    </div>
                </Link>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
            </ul>
        </nav>
    )
}

export default Header
