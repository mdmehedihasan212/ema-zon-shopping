import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import { FcGoogle } from 'react-icons/fc';

const LogIn = () => {
    return (
        <section className='main-form-container'>
            <div>
                <form className='login-form-container'>
                    <h1 className='form-title'>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                    <p className='form-text'>New to Ema-john?
                        <Link to={'/signup'}> Create New Account</Link>
                    </p>
                    <p className='form-text'>
                        -----or-----
                    </p>
                    <div className="google-btn">
                        <button>
                            <FcGoogle className='google-icon' />
                            <p>Continue with Google</p>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LogIn;