import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/LoginPage.css'

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext)

    return (
        <div className='cover'>

            <form onSubmit={loginUser} className="cover-form">
                <h1>Login</h1>
                <input className='text-input' type="text" name="username" placeholder='Enter Username' />
                <input className='password-input' type="password" name="password" placeholder='Enter Password' />
                <input className='login-btn' type="submit" value='LOGIN' />
            </form>
        </div>
    )
}

export default LoginPage