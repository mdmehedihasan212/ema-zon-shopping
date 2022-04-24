import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './LogIn.css';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import SocialResister from '../Shared/SocialResister/SocialResister';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true })
    }

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
                console.log('User login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleForgetPassword = () => {

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('')
                console.log('Password reset email sent!');
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

                    <div className="form-link">
                        <p className='forget-password'>
                            <Link onClick={handleForgetPassword} to={'/login'}>Forget Password?</Link>
                        </p>
                        <p>
                            <Link className='create-account' to={'/signup'}>Create New Account</Link>
                        </p>
                    </div>
                    <SocialResister></SocialResister>
                </form>
            </div>
        </section>
    );
};

export default LogIn;