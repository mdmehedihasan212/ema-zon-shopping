import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <section>
            <div>
                <form className='shipping-form-container'>
                    <h1 className='form-title'>Shipping Form</h1>
                    <div className="input-group">
                        <label htmlFor="text">Your Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Current Address</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone</label>
                        <input type="number" name="number" />
                    </div>
                    <input className='submit-btn' type="submit" value="Submit Form" />
                </form>
            </div>
        </section>
    );
};

export default Shipping;