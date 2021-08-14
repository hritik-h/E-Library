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
                <p>"By clicking Sign Up, you agree to our Terms and that you have read virtusa intern's project E-Library 
                    virtusa intern's project E-Library virtusa intern's project E-Library Data Use Policy, including our Cookie Use."</p>

                <button 
                    onClick={register}
                    className="login__RegisterButton">Create your new Account
                </button>
            </div>
        </div>
    )
}

export default Login
