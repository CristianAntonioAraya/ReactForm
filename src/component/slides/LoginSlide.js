import React from 'react'
import '../../styles/AuthSlide.css'

const LoginSlide = () => {
    return (
        <div id="LoginSlide" className="loginslide__container">
            <div className="loginslide__content">
                <p className="loginslide__text">Or create new account!</p>
                <button id="LoginSlideButton" className="loginslide__button">Register</button>
            </div>
        </div>
    )
}

export default LoginSlide
