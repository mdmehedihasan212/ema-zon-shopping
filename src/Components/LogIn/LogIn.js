import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleSubmitReload = event => {
        event.preventDefault();
    }


    const handleToLogIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const user = userCredential.user;
                console.log('User login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <section className='main-form-container'>
            <div>
                <form onSubmit={handleSubmitReload} className='login-form-container'>
                    <h1 className='form-title'>Login</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <p className='error-message'>{error}</p>
                    <input onClick={handleToLogIn} className='submit-btn' type="submit" value="Login" />
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