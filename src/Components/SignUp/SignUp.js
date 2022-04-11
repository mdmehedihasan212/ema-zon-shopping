import React from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section>
            <div>
                <form className='sign-form-container'>
                    <h1 className='form-title'>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" />
                    </div>
                    <input className='submit-btn' type="submit" value="Sign Up" />
                    <p className='form-text'>Already have an account?
                        <Link to={'/login'}> Login</Link>
                    </p>
                    <p className='form-text'>
                        -or-
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

export default SignUp;