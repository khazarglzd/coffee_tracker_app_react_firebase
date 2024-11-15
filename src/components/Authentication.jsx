import React from 'react'

const Authentication = () => {
    return (
        <>
            <h2 className="sign-up-text">Sign Up / Login</h2>
            <p> Sign in to your account!</p>
            <input placeholder="Email" />
            <input placeholder="********" type="password" />
            <button ><p>Submit</p></button>
            <hr />
            <div className="register-content">
                <p> Do not have an account?'</p>
                <button><p>Sign up</p></button>
            </div>
        </>
    )
}

export default Authentication