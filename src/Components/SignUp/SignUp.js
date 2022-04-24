import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import SocialResister from '../Shared/SocialResister/SocialResister';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [user] = useAuthState(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmitReload = event => {
        event.preventDefault();
    }

    const handleToSignUp = () => {

        if (password !== confirmPassword) {
            setError("Password didn't matched")
            return;
        }
        if (!user) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setError('');
                    console.log('Create user');

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log('Email verification sent!');
                        });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                });
        }
        else {

        }

    }

    return (
        <section className='main-form-container'>
            <div>
                <form onSubmit={handleSubmitReload} className='sign-form-container'>
                    <h1 className='form-title'>Sign Up</h1>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                    </div>
                    <p className='error-message'>{error}</p>
                    <input onClick={handleToSignUp} className='submit-btn' type="submit" value="Sign Up" />
                    <p className='form-text'>Already have an account?
                        <Link to={'/login'}> Login</Link>
                    </p>
                    <SocialResister></SocialResister>
                </form>
            </div>
        </section>
    );
};

export default SignUp;