import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ orders }) => {
    // console.log(orders);

    let total = 0;
    let shipping = 0;
    for (const product of orders) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='order-summary'>
            <h1>OrderSummary</h1>
            <p>Selected Items: {orders.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h1>Grand Total: ${grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default OrderSummary;