import React from 'react'
import '../../styles/LogInForm.css'

const LoginForm = () => {
    return (
        <div className="log__container front" id="form">
            <p className="log__title">LOGIN</p>
            <form className="log__content">
                <label className="log__label">Email:</label>
                <input className="log__input" type="email"/>
                <label className="log__label" >Password:</label>
                <input className="log__input" type="password"/>
                <button className="log__button">Submit</button>
                <p className="log__or">Or Sign In with Social media</p>
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
        </div>
            </form>
        </div>
    )
}

export default LoginForm
