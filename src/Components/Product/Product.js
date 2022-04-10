import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    console.log(product);
    const { img, name, price, seller, ratings } = product;
    return (
        <section className='product-container'>
            <img src={img} alt="" />
        </section>
    );
};

export default Product;