import React from 'react'
import '../../styles/AuthSlide.css'

const SigninSlide = () => {
    return (
        <div id="SignSlide"className="loginslide__container show">
            <div className="loginslide__content">
                <p className="loginslide__text">Already have an account?</p>
                <button id="RegisterSlideButton" className="loginslide__button">Log In</button>
            </div>
        </div>
    )
}

export default SigninSlide
