import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            {/* Spotify Logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify test logo"></img>
            {/* Login w/ spotify button, calls login URL from spotify.js */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
