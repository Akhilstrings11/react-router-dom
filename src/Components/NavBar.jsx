import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>

            <Link to="/" ><span>Home</span></Link>
            <Link to="/about"><span>About</span></Link>
            <Link to="/contact"><span>Contact</span></Link>
            <Link to="/userPage"><span>Users Page</span></Link>
        </div>
    
    )
}

export default NavBar
