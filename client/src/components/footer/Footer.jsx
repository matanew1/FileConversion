import React from 'react'
import './Footer.css'

const Footer = () => {

    return (
        <div className='main-footer'>
            <p className='p-footer'>
                © {new Date().getFullYear()} FConv. All rights reserved.
            </p>
        </div>
    )
}

export default Footer