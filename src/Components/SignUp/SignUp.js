import React, { useState } from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(false);

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

        if (password !== confirmPassword) {
            setError("Password didn't matched")
            return;
        }
        if (!user) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
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
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('User login');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                });

        }

    }

    const continueWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log('Create user with google');
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
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
                    <p className='error-message'>{error}</p>
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