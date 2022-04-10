import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ orders }) => {
    // console.log(orders);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of orders) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='order-summary'>
            <h1>OrderSummary</h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h1>Grand Total: ${grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default OrderSummary;