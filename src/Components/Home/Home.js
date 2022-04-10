import React from 'react';
import './Home.css';
import photo from '../../Assets/photo-1552573102-2b44b44d85b5.avif';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='home-container'>
            <div className="text-section">
                <h4>New Collection For Fall</h4>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to={'/shop'} className='shop-btn'>Shop Now</Link>
            </div>
            <div className="photo-section">
                <img src={photo} alt="" />
            </div>
        </section>
    );
};

export default Home;