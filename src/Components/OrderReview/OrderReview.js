import React from 'react';
import './OrderReview.css';
import { RiDeleteBin5Line } from 'react-icons/ri';

const OrderReview = ({ product, handleRemoveProduct }) => {
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name.length > 30 ? name.slice(0, 30) + '...' : name}
                    </p>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p>Shipping: <span className='orange-color'>${shipping}</span></p>
                    <p>Quantity: <span className='orange-color'>{quantity}</span></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <RiDeleteBin5Line className='delete-icon' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;