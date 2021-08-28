import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Database login
    }

    const register = e => {
        e.preventDefault();

        // Database register
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src="https://www.virtusa.com/content/dam/virtusa/images/logo/shared/virtusa-logo.png"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text" value={email} onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password" value={password} onChange={p => setPassword(p.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton">Sign In
                    </button>

                </form>
                <p>"To Sign Up, you need to read and agree to our Terms and virtusa intern's project E-Library 
                    virtusa intern's project E-Library virtusa intern's project E-Library Data Use Policy, including our Cookie Use."</p>

                <Link to='/register'>
                    <span className="login__RegisterButton">Click here to Create your new Account</span>
                </Link>
                {/* <button 
                    onClick={register}
                    className="login__RegisterButton">Create your new Account
                </button> */}
            </div>
        </div>
    )
}

export default Login
