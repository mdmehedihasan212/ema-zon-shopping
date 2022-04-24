import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../../Firebase/Firebase.init';
import './SocialResister.css';

const SocialResister = () => {
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();

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
        <div>
            <section className='line-section'>
                <div className='first-div'></div>
                <p className='text'>or</p>
                <div className='second-div'></div>
            </section>
            <section>
                <div className="google-btn">
                    <button onClick={continueWithGoogle}>
                        <FcGoogle className='google-icon' />
                        <p>Continue with Google</p>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SocialResister;