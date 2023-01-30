import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../styles/Header.css'

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)
    return (
        <div className="from-container">
            <Link to="/">Home</Link>
            {user && <p>Hello {user.username}</p>}
            {user ? (
                <p className='header-logout' onClick={logoutUser}>Logout</p>
            ) : (
                <Link to="/login">Login</Link>
            )}

        </div>
    )
}

export default Header
