import React, { useEffect } from 'react'
import LoginForm from '../component/forms/LoginForm';
import SigninForm from '../component/forms/SigninForm';
import LoginSlide from '../component/slides/LoginSlide';
import SigninSlide from '../component/slides/SigninSlide';
import { Slide } from '../services/Animation';
import '../styles/Main.css'


const MainPage = () => {

    useEffect(() => {
        Slide();
    }, [])

    return (
        <div className="main__container">
            <div className="main__content">
                <div className="main__content-info">
                    <LoginForm/>
                    <SigninForm/>
                </div>
                <div className="main__content-slide">
                    <div className="main__content-skew" id="skew-slide"/>
                    <div className="main__content-square" id="square-slide">
                        <SigninSlide/>
                        <LoginSlide/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default MainPage
