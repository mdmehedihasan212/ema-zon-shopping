import React, { useState } from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();


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

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            })
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
                    <input onClick={handleToSignUp} className='submit-btn' type="submit" value="Sign Up" />
                    <p className='form-text'>Already have an account?
                        <Link to={'/login'}> Login</Link>
                    </p>
                    <p className='form-text'>
                        -----or-----
                    </p>
                    <div className="google-btn">
                        <button onClick={continueWithGoogle}>
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