import React from 'react'
import './LoginSignup'
function LoginSignup() {
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className="inderline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <input type="email" placeholder='UserName'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='UserName'/>
                    </div>
                </div>
                <div className="forgot-password">Forgot Password <span>Click Here!</span></div>
                <div className="sub-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Login </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup