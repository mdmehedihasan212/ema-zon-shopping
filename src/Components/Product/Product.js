import React from 'react';
import './Product.css';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const Product = ({ product, AddToCart }) => {
    // console.log(product);
    const { img, name, price, seller, ratings } = product;
    return (
        <section className='product-container'>
            <img src={img} alt="" />
            <div className="product-details">
                <h4 title={name}>
                    {name.length > 25 ? name.slice(0, 25) + '...' : name}
                </h4>
                <h5>Price: $ {price}</h5>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star</p>
            </div>
            <button className='product-add-btn' onClick={() => AddToCart(product)}>
                <p>Add to Cart</p>
                <MdOutlineAddShoppingCart className='cart-icon' />
            </button>
        </section>
    );
};

export default Product;